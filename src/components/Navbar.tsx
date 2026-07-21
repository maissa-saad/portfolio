import Container from "@/components/Container";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl">
      <Container>
        <nav className="flex h-16 items-center justify-between">

          <h1 className="text-2xl font-bold tracking-tight text-white">
            <span className="text-violet-400">M</span>aïssa Saad
          </h1>

          <div className="flex gap-10 text-sm font-medium text-slate-400">

            <Link href="/about" className="transition hover:text-violet-400">
              About
            </Link>

            <Link href="/projects" className="transition hover:text-violet-400">
              Projects
            </Link>

            <Link href="/skills" className="transition hover:text-violet-400">
              Skills
            </Link>

            <Link href="/contact" className="transition hover:text-violet-400">
              Contact
            </Link>

          </div>

        </nav>
      </Container>
    </header>
  );
}