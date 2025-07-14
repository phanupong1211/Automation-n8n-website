import { notFound } from "next/navigation";
import projects from "@/data/projects.json";
import ProjectDetail from "@/components/ProjectDetail";

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

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = await params; // หรือ
  // const { slug } = use(params)

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
