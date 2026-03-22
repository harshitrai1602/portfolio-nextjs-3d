import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
      <h2 className="text-4xl mb-10">Skills</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="px-6 py-3 border border-white/20 rounded-xl backdrop-blur hover:scale-105 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}