"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase/client";

export default function LoginPage() {
  const sb = supabaseBrowser();
  const router = useRouter();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState<string>("");
  const [loading, setLoading] = useState(false);

  async function onSignUp(e: React.FormEvent) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setMsg("");
    const { error } = await sb.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: `${location.origin}/dashboard` },
    });
    setLoading(false);
    if (error) return setMsg(error.message);
    setMsg("สมัครสำเร็จ! กรุณายืนยันอีเมล หรือเข้าสู่ระบบได้เลย");
  }

  async function onSignIn(e: React.FormEvent) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setMsg("");
    const { error } = await sb.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) return setMsg(error.message);
    router.replace("/dashboard");
  }

  async function onMagicLink() {
    if (loading) return;
    setLoading(true);
    setMsg("");
    const { error } = await sb.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${location.origin}/dashboard` },
    });
    setLoading(false);
    if (error) return setMsg(error.message);
    setMsg("เราได้ส่งลิงก์เข้าสู่ระบบไปที่อีเมลของคุณแล้ว");
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/40 p-8">
        <div className="flex items-center justify-center mb-6">
          <Image src="/images/logo.png" alt="Logo" width={48} height={48} className="h-12 w-12 object-contain" />
        </div>

        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">เข้าสู่ระบบ</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">เข้าถึง Maintenance Dashboard ของคุณ</p>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-6">
          <button
            aria-pressed={mode === "signin"}
            className={`py-2 rounded-lg font-medium transition ${
              mode === "signin"
                ? "bg-blue-600 text-white shadow"
                : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
            }`}
            onClick={() => setMode("signin")}
          >
            เข้าสู่ระบบ
          </button>
          <button
            aria-pressed={mode === "signup"}
            className={`py-2 rounded-lg font-medium transition ${
              mode === "signup"
                ? "bg-blue-600 text-white shadow"
                : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
            }`}
            onClick={() => setMode("signup")}
          >
            สมัครสมาชิก
          </button>
        </div>

        <form onSubmit={mode === "signin" ? onSignIn : onSignUp} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">อีเมล</label>
            <input
              type="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">รหัสผ่าน</label>
            <input
              type="password"
              placeholder={mode === "signin" ? "รหัสผ่าน" : "ตั้งรหัสผ่าน"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium shadow transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "กำลังดำเนินการ..." : mode === "signin" ? "เข้าสู่ระบบ" : "สมัครสมาชิก"}
          </button>
        </form>

        <div className="my-4 text-center text-sm text-gray-500">หรือ</div>

        <button
          onClick={onMagicLink}
          disabled={!email || loading}
          title={!email ? "กรอกอีเมลก่อน" : ""}
          className="w-full border border-gray-200 dark:border-gray-700 py-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 text-gray-800 dark:text-gray-200 transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          ส่งลิงก์เข้าสู่ระบบไปที่อีเมล (Magic Link)
        </button>

        {msg && (
          <p className="mt-4 text-sm text-blue-700 dark:text-blue-300 text-center">{msg}</p>
        )}
      </div>
    </main>
  );
}

