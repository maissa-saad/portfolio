import Container from "@/components/Container";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-950 pt-32 text-white">
        <Container>

          <h1 className="text-5xl font-bold">
            About Me
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-300">
            I'm currently pursuing a Master's degree in Cloud & DevOps at
            Sorbonne University.

            What attracts me to DevOps is its ability to connect every part of a
            software project—from infrastructure and networking to automation,
            deployment and monitoring.

            I enjoy discovering new technologies and quickly adapting to new
            environments while understanding how everything works together.
          </p>

        </Container>
      </section>
    </>
  );
}