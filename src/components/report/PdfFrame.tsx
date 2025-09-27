"use client";

import { useEffect, useState } from "react";

type DriveFile = {
  id: string;
  name: string;
  webViewLink?: string;
  modifiedTime?: string;
  size?: string;
};

function lastName(s?: string) {
  if (!s) return "";
  const seg = s.split(/[\\/]/).pop() || "";
  return seg.trim();
}
function isPathLike(s?: string) {
  return !!s && s.includes("/");
}

export default function PdfFrame(props: {
  kind: "safety" | "valve";
  reportNo: string;
  pdfHint?: string;      // รับค่าจากคอลัมน์ PDF ของชีต (เป็น path หรือชื่อไฟล์ก็ได้)
  tag?: string;
  inspectedAt?: string;
}) {
  const { kind, reportNo, pdfHint, tag } = props;
  const [files, setFiles] = useState<DriveFile[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let alive = true;
    (async () => {
      if (!tag) return;
      setLoading(true);
      try {
        // token ตัวเลขจาก reportNo ใช้เป็น fallback
        const token = (reportNo.match(/(\d[\d-]*)/) || [""])[0];
        const nameFromHint = lastName(pdfHint);              // "SV202594-c70f7333- Report 90LAA10BB001.pdf"
        const params = new URLSearchParams({
          kind,
          fileName: nameFromHint,                             // ส่งชื่อไฟล์เสมอ (ให้ API exact match ก่อน)
          path: isPathLike(pdfHint) ? (pdfHint || "") : "",   // ถ้าเป็น path ก็ส่งเผื่อไว้
          hint: nameFromHint || token || "",                  // เผื่อ fallback
          reportNo: token || reportNo,
          tag: tag || "",                                     // ใช้ช่วยคัดในโฟลเดอร์
        }).toString();

        const res = await fetch(`/api/report/pdf?${params}`);
        const data = await res.json();

        if (!alive) return;

        if (data?.found) {
          setFiles([{
            id: data.id,
            name: data.name,
            webViewLink: data.webViewLink,
            modifiedTime: data.modifiedTime,
            size: data.size,
          }]);
        } else {
          setFiles([]);
        }
      } catch {
        if (alive) setFiles([]);
      } finally {
        if (alive) setLoading(false);
      }
    })();

    return () => { alive = false; };
  }, [kind, tag, pdfHint, reportNo]);

  return (
    <section className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-6">
      <h2 className="mb-3 text-base font-semibold text-slate-900">เอกสาร PDF</h2>

      {loading && <p className="text-sm text-slate-600">กำลังค้นหาไฟล์ PDF…</p>}

      {!loading && (!files || files.length === 0) && (
        <div className="text-sm text-slate-600">ไม่มีไฟล์ PDF แบบ (หรือค้นหาไม่เจอ)</div>
      )}

      {!loading && files && files.length > 0 && (
        <div className="space-y-2">
          {files.map((f) => {
            const view = f.webViewLink || `https://drive.google.com/file/d/${f.id}/view`;
            return (
              <div key={f.id} className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2">
                <div className="min-w-0">
                  <div className="truncate text-sm font-medium text-slate-900">{f.name}</div>
                  <div className="text-xs text-slate-500">
                    {f.modifiedTime ? new Date(f.modifiedTime).toLocaleString() : ""} {f.size ? `• ${f.size}B` : ""}
                  </div>
                </div>
                <div className="shrink-0 space-x-2">
                  <a className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-slate-700" href={view} target="_blank" rel="noreferrer">เปิดดู</a>
                  <a className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100" href={`https://drive.google.com/uc?export=download&id=${f.id}`} target="_blank" rel="noreferrer">ดาวน์โหลด</a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
