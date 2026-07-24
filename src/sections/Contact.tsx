import Link from "next/link";
import Button from "@/components/Button";
import ButtonLink from "@/components/ButtonLink";
import Container from "@/components/Container";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 border-t border-slate-800 py-28"
    >
      <Container>

        {/* Logo */}
        <Link
          href="/"
          className="inline-block text-3xl font-bold tracking-tight text-white transition hover:opacity-80"
        >
          <span className="text-violet-400">M</span>aïssa Saad
        </Link>

        <h2 className="mt-10 text-5xl font-bold text-white">
          Let's build something together.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          I'm currently looking for a Cloud & DevOps apprenticeship starting in
          September 2026. If you think my profile matches your team, I'd be happy
          to discuss it.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href="/contact">
            Contact Me
          </ButtonLink>

          <ButtonLink href="/cv.pdf">
            Download CV
          </ButtonLink>
        </div>

      </Container>
    </section>
  );
}