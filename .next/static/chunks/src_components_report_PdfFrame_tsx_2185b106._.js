(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/report/PdfFrame.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PdfFrame)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function lastName(s) {
    if (!s) return "";
    const seg = s.split(/[\\/]/).pop() || "";
    return seg.trim();
}
function isPathLike(s) {
    return !!s && s.includes("/");
}
function PdfFrame(props) {
    _s();
    const { kind, reportNo, pdfHint, tag } = props;
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PdfFrame.useEffect": ()=>{
            let alive = true;
            ({
                "PdfFrame.useEffect": async ()=>{
                    if (!tag) return;
                    setLoading(true);
                    try {
                        // token ตัวเลขจาก reportNo ใช้เป็น fallback
                        const token = (reportNo.match(/(\d[\d-]*)/) || [
                            ""
                        ])[0];
                        const nameFromHint = lastName(pdfHint); // "SV202594-c70f7333- Report 90LAA10BB001.pdf"
                        const params = new URLSearchParams({
                            kind,
                            fileName: nameFromHint,
                            path: isPathLike(pdfHint) ? pdfHint || "" : "",
                            hint: nameFromHint || token || "",
                            reportNo: token || reportNo,
                            tag: tag || ""
                        }).toString();
                        const res = await fetch(`/api/report/pdf?${params}`);
                        const data = await res.json();
                        if (!alive) return;
                        if (data?.found) {
                            setFiles([
                                {
                                    id: data.id,
                                    name: data.name,
                                    webViewLink: data.webViewLink,
                                    modifiedTime: data.modifiedTime,
                                    size: data.size
                                }
                            ]);
                        } else {
                            setFiles([]);
                        }
                    } catch  {
                        if (alive) setFiles([]);
                    } finally{
                        if (alive) setLoading(false);
                    }
                }
            })["PdfFrame.useEffect"]();
            return ({
                "PdfFrame.useEffect": ()=>{
                    alive = false;
                }
            })["PdfFrame.useEffect"];
        }
    }["PdfFrame.useEffect"], [
        kind,
        tag,
        pdfHint,
        reportNo
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mb-3 text-base font-semibold text-slate-900",
                children: "เอกสาร PDF"
            }, void 0, false, {
                fileName: "[project]/src/components/report/PdfFrame.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-slate-600",
                children: "กำลังค้นหาไฟล์ PDF…"
            }, void 0, false, {
                fileName: "[project]/src/components/report/PdfFrame.tsx",
                lineNumber: 81,
                columnNumber: 19
            }, this),
            !loading && (!files || files.length === 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-slate-600",
                children: "ไม่มีไฟล์ PDF แบบ (หรือค้นหาไม่เจอ)"
            }, void 0, false, {
                fileName: "[project]/src/components/report/PdfFrame.tsx",
                lineNumber: 84,
                columnNumber: 9
            }, this),
            !loading && files && files.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: files.map((f)=>{
                    const view = f.webViewLink || `https://drive.google.com/file/d/${f.id}/view`;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "truncate text-sm font-medium text-slate-900",
                                        children: f.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/report/PdfFrame.tsx",
                                        lineNumber: 94,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-slate-500",
                                        children: [
                                            f.modifiedTime ? new Date(f.modifiedTime).toLocaleString() : "",
                                            " ",
                                            f.size ? `• ${f.size}B` : ""
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/report/PdfFrame.tsx",
                                        lineNumber: 95,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/report/PdfFrame.tsx",
                                lineNumber: 93,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "shrink-0 space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-slate-700",
                                        href: view,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: "เปิดดู"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/report/PdfFrame.tsx",
                                        lineNumber: 100,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100",
                                        href: `https://drive.google.com/uc?export=download&id=${f.id}`,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: "ดาวน์โหลด"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/report/PdfFrame.tsx",
                                        lineNumber: 101,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/report/PdfFrame.tsx",
                                lineNumber: 99,
                                columnNumber: 17
                            }, this)
                        ]
                    }, f.id, true, {
                        fileName: "[project]/src/components/report/PdfFrame.tsx",
                        lineNumber: 92,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/report/PdfFrame.tsx",
                lineNumber: 88,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/report/PdfFrame.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_s(PdfFrame, "KYFxSHzuipzsOrZihiiYFNO2KLY=");
_c = PdfFrame;
var _c;
__turbopack_context__.k.register(_c, "PdfFrame");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_report_PdfFrame_tsx_2185b106._.js.map