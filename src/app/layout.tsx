//src\app\layout.tsx
import "./globals.css";
import { ThemeProvider } from "@/components/(marketing)/ThemeProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
