import { useEffect } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {

  useEffect(() => {
    gsap.from(".project-card", {
      scrollTrigger: ".project-card",
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    });
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
      <h2 className="text-4xl mb-12">Projects</h2>

      <div className="flex flex-wrap justify-center gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}