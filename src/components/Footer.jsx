import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="py-10 flex flex-col items-center gap-6 border-t border-white/10">

      <div className="flex gap-6 text-2xl">

        <a
          href="https://github.com/harshitrai1602"
          target="_blank"
          className="hover:text-cyan-400 transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          className="hover:text-cyan-400 transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://wa.me/7008479724"
          target="_blank"
          className="hover:text-cyan-400 transition"
        >
          <FaWhatsapp />
        </a>

        <a
          href="https://leetcode.com"
          target="_blank"
          className="hover:text-cyan-400 transition"
        >
          <SiLeetcode />
        </a>

      </div>

      <p className="text-gray-500 text-sm">
        © 2026 Harshit Rai. All rights reserved.
      </p>

    </footer>
  );
}