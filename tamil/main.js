// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Reveal animation
const sections = document.querySelectorAll(".section");

const reveal = () => {
  sections.forEach((section, i) => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      setTimeout(() => {
        section.classList.add("visible");
      }, i * 120);
    }
  });
};

window.addEventListener("scroll", reveal);
reveal();
