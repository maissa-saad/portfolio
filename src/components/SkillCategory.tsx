type SkillCategoryProps = {
  title: string;
  emoji: string;
  skills: string[];
};

export default function SkillCategory({
  title,
  emoji,
  skills,
}: SkillCategoryProps) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
      <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-white">
        <span>{emoji}</span>
        {title}
      </h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <a
            key={skill}
            href={`https://www.google.com/search?q=${encodeURIComponent(skill)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300 transition hover:border-violet-400 hover:bg-violet-500/20"
          >
            {skill}
          </a>
        ))}
      </div>
    </div>
  );
}