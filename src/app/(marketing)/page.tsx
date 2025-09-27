"use client";

import { HeroSection } from '@/components/(marketing)/HeroSection';
import { AboutSection } from '@/components/(marketing)/AboutSection';
import { ExperienceSection } from '@/components/(marketing)/ExperienceSection';
import { ContactSection } from '@/components/(marketing)/ContactSection';

//ลบ export default
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}
