"use client";

import { usePathname } from "next/navigation";
import { ChatWidget } from "@/components/ChatWidget";

//ลบ export
export function ChatWidgetWrapper() {
  const pathname = usePathname();

  // ถ้าเป็น /reportai ให้ซ่อน ChatWidget
  if (pathname.startsWith("/reportai")) return null;

  return <ChatWidget />;
}
