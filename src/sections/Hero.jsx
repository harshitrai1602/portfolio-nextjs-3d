import { useEffect } from "react";
import HeroCanvas from "../components/HeroCanvas";
import { heroAnimation } from "../animations/scrollAnimations";

export default function Hero() {

  useEffect(() => {
    heroAnimation();
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 gap-10"
    >

      {/* LEFT TEXT */}
      <div className="text-center md:text-left max-w-xl z-10">
        <h1 className="hero-text text-5xl md:text-6xl font-bold mb-6">
          Hi, I'm Harshit Rai
        </h1>

        <p className="hero-text text-gray-300 mb-6">
          MERN Stack Developer building modern 3D web experiences with smooth animations.
        </p>
      </div>

      {/* RIGHT 3D */}
      <div className="w-full md:w-[500px] h-[350px]">
        <HeroCanvas />
      </div>

    </section>
  );
}