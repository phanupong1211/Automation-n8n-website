import { notFound } from "next/navigation";
import projects from "@/data/projects.json";
import { ProjectDetail } from "@/components/ProjectDetail";

type Project = {
  slug: string;
  name: string;
  description: string;
  category: string;
  skill: string[];
  year: string;
  image: string;
  objectives: string[];
  results: string[];
};

// แก้ไข: params เป็น Promise<{ slug: string }> ใน Next.js 15+
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  // ต้อง await params เพราะมันเป็น Promise
  const { slug } = await params;

  const project = (projects as Project[]).find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <ProjectDetail
      title={project.name}
      description={project.description}
      category={project.category}
      skill={project.skill}
      year={project.year}
      image={project.image}
      objectives={project.objectives}
      results={project.results}
    />
  );
}

// ถ้ามี generateMetadata ก็ต้องแก้ไขด้วย
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = (projects as Project[]).find((p) => p.slug === slug);
  
  return {
    title: project?.name || 'Project Not Found',
    description: project?.description || 'Project description not available',
  };
}