import Container from "@/components/Container";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-24">
      <Container>

        <h1 className="text-5xl font-bold">
          Contact
        </h1>

        <p className="mt-6 text-slate-400">
          Feel free to contact me for apprenticeship opportunities.
        </p>

        <div className="mt-10 space-y-4">

          <p>Email : maissa.saad.pro@gmail.com</p>

          <p>LinkedIn : www.linkedin.com/in/maissa-saad</p>

          <p>GitHub : maissa-saad</p>

          <p>Numéro de téléphone : 07 60 01 77 33</p>

        </div>

      </Container>
    </main>
  );
}