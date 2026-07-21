import Button from "@/components/Button";
import Container from "@/components/Container";
import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-slate-800 bg-slate-950 py-32"
    >
      <Container>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-16">

          <h2 className="text-5xl font-bold text-white">
            Let's build something together.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            I'm currently looking for a Cloud & DevOps apprenticeship
            starting in September 2026.
            If you're looking for someone curious, adaptable and eager to
            contribute, I'd be happy to connect.
          </p>

          <div className="mt-10">

            <Link href="/contact">
                <Button>
                    Contact Me
                </Button>
            </Link>

          </div>

        </div>

      </Container>
    </section>
  );
}