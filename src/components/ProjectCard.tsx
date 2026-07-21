type Project = {
  title: string;
  description: string;
  challenge: string;
  solution: string;
  technologies: string[];
  skills: string[];
  github: string;
};

export default function ProjectCard({
  title,
  description,
  challenge,
  solution,
  technologies,
  skills,
  github,
}: Project) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:border-violet-500 hover:shadow-xl hover:shadow-violet-900/20">

      <h2 className="text-3xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-4 leading-8 text-slate-400">
        {description}
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <a
            key={tech}
            href={`https://www.google.com/search?q=${encodeURIComponent(tech)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-violet-500/40 bg-violet-500/10 px-4 py-2 text-sm text-violet-300 transition hover:bg-violet-500 hover:text-white"
          >
            {tech}
          </a>
        ))}
      </div>

      <div className="mt-10">

        <h3 className="text-lg font-semibold text-white">
          The Challenge
        </h3>

        <p className="mt-3 text-slate-400">
          {challenge}
        </p>

      </div>

      <div className="mt-8">

        <h3 className="text-lg font-semibold text-white">
          The Solution
        </h3>

        <p className="mt-3 text-slate-400">
          {solution}
        </p>

      </div>

      <div className="mt-8">

        <h3 className="text-lg font-semibold text-white">
          Skills Developed
        </h3>

        <div className="mt-4 flex flex-wrap gap-3">

          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg bg-slate-800 px-3 py-2 text-sm text-slate-300"
            >
              ✓ {skill}
            </span>
          ))}

        </div>

      </div>

      <div className="mt-10">

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-violet-400 transition hover:text-violet-300"
        >
          View on GitHub →
        </a>

      </div>

    </div>
  );
}