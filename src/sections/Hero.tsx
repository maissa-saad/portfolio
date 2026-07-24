import Container from "@/components/Container";
import Button from "@/components/Button";
import ButtonLink from "@/components/ButtonLink";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-start bg-gradient-to-br from-slate-950 via-slate-900 to-black pt-16">
      <Container>
        <div className="max-w-4xl pt-5">

          <span className="inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
            ☁️ Cloud • DevOps • Automation
          </span>

          <h1 className="mt-8 text-6xl font-extrabold tracking-tight text-white md:text-7xl">
            Maïssa Saad
          </h1>

          <h2 className="mt-5 text-3xl font-semibold text-violet-400 md:text-4xl">
            Building reliable cloud infrastructures through automation.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-300">
            Master's student in Cloud & DevOps at Sorbonne University.
            I enjoy designing infrastructures, automating deployments,
            and understanding how technologies work together to build
            scalable, reliable and maintainable systems.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <ButtonLink href="/projects">
              View Projects
            </ButtonLink>

            <ButtonLink
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              external
            >
              Download CV
            </ButtonLink>

          </div>

          <div className="mt-8 flex flex-wrap gap-4">

          <div className="rounded-full border border-slate-700 bg-slate-900 px-5 py-3 text-slate-300">
                📍 Paris, France
          </div>

          <div className="rounded-full border border-slate-700 bg-slate-900 px-5 py-3 text-slate-300">
                🎓 Sorbonne University
          </div>

          <div className="rounded-full border border-violet-500/40 bg-violet-500/10 px-5 py-3 text-violet-300">
                ● Available for apprenticeship • September 2026
          </div>

          </div>

        </div>
      </Container>
    </section>
  );
}