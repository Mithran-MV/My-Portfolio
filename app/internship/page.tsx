import { SectionHeader } from "@/components/section-header";
import { ProjectCard } from "@/components/project-card";
import { internshipSlugs, projects } from "@/data/projects";

const internshipProjects = projects.filter((p) => internshipSlugs.includes(p.slug));

export default function InternshipPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Internship"
        title="Projects during internship"
        subtitle="Selected builds delivered during internship periods across AI, Web3, concierge systems, and IoT telemetry."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {internshipProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            slug={project.slug}
            title={project.title}
            subtitle={project.subtitle}
            role={project.role}
            status={project.status}
            categories={project.categories}
            labels={project.labels}
            tech={project.tech}
          />
        ))}
      </div>
    </div>
  );
}
