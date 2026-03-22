import { useEffect } from "react";

export default function Navbar() {

  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <header className="fixed top-0 w-full flex justify-center z-50">

      <nav className="
        mt-6
        flex gap-8
        px-10 py-3
        rounded-full
        bg-white/10
        backdrop-blur-lg
        border border-white/20
        shadow-lg
      ">

        <a href="#home" className="hover:text-cyan-400 transition">
          Home
        </a>

        <a href="#about" className="hover:text-cyan-400 transition">
          About
        </a>

        <a href="#skills" className="hover:text-cyan-400 transition">
          Skills
        </a>

        <a href="#projects" className="hover:text-cyan-400 transition">
          Projects
        </a>

        <a href="#contact" className="hover:text-cyan-400 transition">
          Contact
        </a>

      </nav>

    </header>
  );
}