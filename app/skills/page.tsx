import Navbar from "@/components/Navbar";
import Container from "@/components/Container";
import SkillCategory from "@/components/SkillCategory";

export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-950 pt-32 pb-20 text-white">
        <Container>
          <h1 className="text-6xl font-extrabold">
            Skills
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Technologies and tools I use to design, automate and maintain
            reliable cloud infrastructures.
          </p>
          <div className="mt-16 grid gap-8">
            <SkillCategory
              emoji="☁️"
              title="Cloud Platforms"
              skills={["Azure"]}
            />
            <SkillCategory
              emoji="🐳"
              title="Containers & Orchestration"
              skills={[
                "Docker",
                "Kubernetes",
              ]}
            />
            <SkillCategory
              emoji="⚙️"
              title="DevOps & Automation"
              skills={[
                "Git",
                "GitHub",
                "GitHub Actions",
                "Ansible",
              ]}
            />
            <SkillCategory
              emoji="🖥️"
              title="Operating Systems"
              skills={[
                "Linux",
                "WSL",
                "Bash",
              ]}
            />
            <SkillCategory
              emoji="💻"
              title="Programming"
              skills={[
                "Python",
                "Java",
                "C",
                "TypeScript",
                "JavaScript",
              ]}
            />
            <SkillCategory
              emoji="🌐"
              title="Networking"
              skills={[
                "TCP/IP",
                "DNS",
                "HTTP",
                "LAN/WAN",
                "BGP",
                "OSPF",
              ]}
            />
            <SkillCategory
              emoji="🗄️"
              title="Databases"
              skills={[
                "PostgreSQL",
              ]}
            />
          </div>
        </Container>
      </main>
    </>
  );
}
