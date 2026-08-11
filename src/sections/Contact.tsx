import ButtonLink from "@/components/ButtonLink";
import Container from "@/components/Container";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-slate-800 bg-slate-950 py-28"
    >
      <Container>

        <h2 className="text-5xl font-bold text-white">
          Interested in working together?
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          I&apos;m currently looking for a Cloud & DevOps apprenticeship starting in
          September 2026. If you think my profile could be a good fit for your
          team, I&apos;d be happy to discuss any opportunity.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">

          <ButtonLink href="/contact">
            Contact Me
          </ButtonLink>

          <ButtonLink
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            external
          >
            Download CV
          </ButtonLink>

        </div>

      </Container>
    </section>
  );
}