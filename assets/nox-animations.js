document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".nox-nav-dropdown").forEach((dropdown) => {
    let closeTimer;

    dropdown.addEventListener("mouseenter", () => {
      if (!window.matchMedia("(min-width: 1181px)").matches) return;
      window.clearTimeout(closeTimer);
      dropdown.open = true;
    });

    dropdown.addEventListener("mouseleave", () => {
      if (!window.matchMedia("(min-width: 1181px)").matches) return;
      closeTimer = window.setTimeout(() => {
        if (!dropdown.matches(":hover") && !dropdown.matches(":focus-within")) dropdown.open = false;
      }, 320);
    });

    dropdown.addEventListener("focusin", () => window.clearTimeout(closeTimer));
    dropdown.addEventListener("focusout", () => {
      if (!window.matchMedia("(min-width: 1181px)").matches) return;
      closeTimer = window.setTimeout(() => {
        if (!dropdown.matches(":hover") && !dropdown.matches(":focus-within")) dropdown.open = false;
      }, 320);
    });
  });

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
