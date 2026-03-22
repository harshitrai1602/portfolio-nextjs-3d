export default function ProjectCard({ project }) {
  return (
    <div className="
      project-card
      w-80
      p-6
      rounded-2xl
      bg-white/10
      backdrop-blur-lg
      border border-white/20
      hover:scale-105
      transition
      shadow-lg
    ">

      <h3 className="text-xl font-semibold mb-3">
        {project.title}
      </h3>

      <p className="text-gray-400 mb-4">
        {project.description}
      </p>

      <a
        href={project.github}
        target="_blank"
        className="text-cyan-400 hover:underline"
      >
        View Code →
      </a>

    </div>
  );
}