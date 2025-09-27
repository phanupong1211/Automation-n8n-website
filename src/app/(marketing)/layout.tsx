import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "../globals.css";
import { Navigation } from "@/components/(marketing)/Navigation";
import { MarketingMotionProvider } from "@/components/(marketing)/MarketingMotionProvider";

const geistSans = GeistSans;
const geistMono = GeistMono;

export const metadata: Metadata = {
  title: "(Automation Service) - Instrument",
  description:
    "We are experts providing inspection, maintenance, and improvement services for industrial equipment.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function MarketingLayout({ children }: RootLayoutProps) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <MarketingMotionProvider>
        <Navigation />
        <main className="min-h-screen">{children}</main>
      </MarketingMotionProvider>
    </div>
  );
}
