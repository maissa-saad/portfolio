import Container from "@/components/Container";

const skills = [
  "Docker",
  "Kubernetes",
  "Azure",
  "Terraform",
  "Ansible",
  "Git",
  "GitHub Actions",
  "Linux",
  "Python",
  "Bash",
  "Networking",
  "CI/CD",
];

export default function TechStack() {
  return (
    <section
      id="skills"
      className="py-28"
    >
      <Container>

        <h2 className="text-4xl font-bold">
          Tech Stack
        </h2>

        <div className="mt-12 flex flex-wrap gap-4">

          {skills.map((skill) => (

            <span
              key={skill}
              className="rounded-xl border border-violet-200 px-5 py-3 font-medium hover:bg-violet-50"
            >
              {skill}
            </span>

          ))}

        </div>

      </Container>
    </section>
  );
}