export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center text-center"
    >
      <h2 className="text-4xl mb-6">Contact Me</h2>

      <p className="text-gray-400 mb-8">
        Let's connect and build something amazing 🚀
      </p>

      <a
        href="mailto:your-harshit23btaml34@example.com"
        className="px-8 py-3 bg-cyan-500 rounded-full text-black font-semibold hover:scale-105 transition"
      >
        Send Email
      </a>
    </section>
  );
}