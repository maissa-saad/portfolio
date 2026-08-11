import Container from "@/components/Container";

export default function About() {
  return (
    <section
      id="about"
      className="py-28 bg-white"
    >
      <Container>

        <h2 className="text-4xl font-bold text-gray-900">
          About Me
        </h2>

        <div className="mt-10 max-w-4xl space-y-6 text-lg leading-8 text-gray-600">

          <p>
            I am currently pursuing a Master&apos;s degree in Cloud & DevOps at
            Sorbonne University.
          </p>

          <p>
            What I enjoy most about DevOps is that it connects every part of
            software engineering—from development and infrastructure to
            deployment and automation. Rather than focusing on a single
            technology, I like understanding how all the pieces work together.
          </p>

          <p>
            Through academic and team projects, I have learned to quickly adapt
            to new technologies, collaborate efficiently, and take ownership of
            technical decisions. I enjoy learning by building real solutions and
            continuously improving the way they are delivered.
          </p>

        </div>

      </Container>
    </section>
  );
}