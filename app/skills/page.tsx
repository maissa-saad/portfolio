import Navbar from "@/components/Navbar";
import Container from "@/components/Container";

export default function SkillsPage() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-950 pt-32 text-white">
        <Container>

          <h1 className="text-5xl font-bold">
            Skills
          </h1>

        </Container>
      </section>
    </>
  );
}