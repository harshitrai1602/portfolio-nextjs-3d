import gsap from "gsap";

export const heroAnimation = () => {
  gsap.from(".hero-text", {
    y: 50,
    opacity: 0,
    duration: 1,
  });
};