// Atualiza ano no footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Menu mobile
const navToggle = document.querySelector(".nav__toggle");
const navList = document.querySelector(".nav__list");

if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    navList.classList.toggle("is-open");
  });

  navList.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navList.classList.remove("is-open");
    });
  });
}

// Scroll suave para botões com data-target
document.querySelectorAll(".js-scroll-to").forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// FAQ accordion
const accordions = document.querySelectorAll(".js-accordion");

accordions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const isOpen = btn.classList.contains("is-open");
    // fecha todos
    accordions.forEach((b) => b.classList.remove("is-open"));
    document
      .querySelectorAll(".faq__panel")
      .forEach((panel) => (panel.style.maxHeight = null));

    if (!isOpen) {
      btn.classList.add("is-open");
      const panel = btn.nextElementSibling;
      if (panel) {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    }
  });
});
