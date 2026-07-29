import Navbar from "@/components/Navbar";
import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 pt-32 pb-20 text-white">

        <Container>

          <h1 className="text-5xl font-bold">
            Featured Projects
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-400">
            A selection of academic and personal projects covering
            Cloud, DevOps, automation, software architecture and
            distributed systems.
          </p>


          <div className="mt-16 space-y-10">

            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
              />
            ))}

          </div>

        </Container>

      </main>
    </>
  );
}