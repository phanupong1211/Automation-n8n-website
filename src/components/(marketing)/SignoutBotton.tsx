"use client";
import { supabaseBrowser } from "@/lib/supabase/client";

export function SignOutButton() {
  const sb = supabaseBrowser();
  return (
    <button
      onClick={async () => {
        await sb.auth.signOut();
        location.href = "/login";
      }}
      className="text-sm px-3 py-2 rounded-lg border hover:bg-slate-50"
    >
      ออกจากระบบ
    </button>
  );
}
