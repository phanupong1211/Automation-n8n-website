"use client";

import dynamic from "next/dynamic";
import { SectionSkeleton } from "@/components/(marketing)/SectionSkeletons";

const HeroSection = dynamic(
  () =>
    import("@/components/(marketing)/HeroSection").then((mod) => ({
      default: mod.HeroSection,
    })),
  {
    ssr: true,
    loading: () => <SectionSkeleton variant="hero" id="home" />,
  }
);

const AboutSection = dynamic(
  () =>
    import("@/components/(marketing)/AboutSection").then((mod) => ({
      default: mod.AboutSection,
    })),
  {
    ssr: true,
    loading: () => <SectionSkeleton id="about" variant="content" />,
  }
);

const ExperienceSection = dynamic(
  () =>
    import("@/components/(marketing)/ExperienceSection").then((mod) => ({
      default: mod.ExperienceSection,
    })),
  {
    ssr: true,
    loading: () => <SectionSkeleton id="experience" variant="cards" />,
  }
);

const ContactSection = dynamic(
  () =>
    import("@/components/(marketing)/ContactSection").then((mod) => ({
      default: mod.ContactSection,
    })),
  {
    ssr: true,
    loading: () => <SectionSkeleton id="contact" variant="content" />,
  }
);

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
