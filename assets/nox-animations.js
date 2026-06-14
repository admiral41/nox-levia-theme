document.addEventListener("DOMContentLoaded", () => {
  const revealItems = document.querySelectorAll(
    ".nox-reveal, .nox-section-heading, .nox-category-card, .nox-product-card, .nox-blog-card, .nox-newsletter, .nox-footer-column"
  );

  if (!revealItems.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("nox-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealItems.forEach((item, index) => {
    item.style.setProperty("--nox-delay", `${Math.min(index * 45, 260)}ms`);
    observer.observe(item);
  });
});