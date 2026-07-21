import Container from "@/components/Container";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 py-28"
    >
      <Container>

        <h2 className="text-4xl font-bold">
          Featured Projects
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (

            <article
              key={project.title}
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >

              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">

                {project.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="rounded-full bg-violet-100 px-3 py-1 text-sm text-violet-700"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              <p className="mt-6 text-gray-600 leading-7">
                {project.description}
              </p>

            </article>

          ))}

        </div>

      </Container>
    </section>
  );
}