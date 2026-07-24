import Navbar from "@/components/Navbar";
import Container from "@/components/Container";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 pt-32 pb-20 text-white">
        <Container>

          <h1 className="text-6xl font-extrabold tracking-tight">
            Contact
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-400">
            I'm currently looking for a Cloud & DevOps apprenticeship starting
            in September 2026. Feel free to contact me if you would like to
            discuss an opportunity.
          </p>

          <div className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/60 p-10">

            <div className="space-y-8">

              <div>
                <p className="text-sm uppercase tracking-widest text-violet-400">
                  Email
                </p>

                <a
                  href="mailto:maissa.saad.pro@gmail.com"
                  className="mt-2 block text-xl text-white hover:text-violet-400 transition"
                >
                  maissa.saad.pro@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-widest text-violet-400">
                  LinkedIn
                </p>

                <a
                  href="https://www.linkedin.com/in/maissa-saad"
                  target="_blank"
                  className="mt-2 block text-xl text-white hover:text-violet-400 transition"
                >
                  linkedin.com/in/maissa-saad
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-widest text-violet-400">
                  GitHub
                </p>

                <a
                  href="https://github.com/maissa-saad"
                  target="_blank"
                  className="mt-2 block text-xl text-white hover:text-violet-400 transition"
                >
                  github.com/maissa-saad
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-widest text-violet-400">
                  Phone
                </p>

                <p className="mt-2 text-xl">
                  +33 7 60 01 77 33
                </p>
              </div>

            </div>

          </div>

        </Container>
      </main>
    </>
  );
}