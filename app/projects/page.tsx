import Navbar from "@/components/Navbar";
import Container from "@/components/Container";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-950 pt-32 text-white">
        <Container>

          <h1 className="text-5xl font-bold">
            Projects
          </h1>

          <p className="mt-6 text-slate-400">
            Some projects I've worked on during my studies.
          </p>

        </Container>
      </section>
    </>
  );
}