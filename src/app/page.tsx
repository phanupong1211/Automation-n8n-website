"use client";

import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ContactSection } from '@/components/ContactSection';

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
