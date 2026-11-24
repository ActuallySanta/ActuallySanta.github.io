const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#nav-links");
const projectsDropdown = document.querySelector("#projects-dropdown");
const projectsToggle = document.querySelector("#projects-toggle");

const setProjectsDropdownState = (isOpen) => {
  projectsDropdown.classList.toggle("is-active", isOpen);
  projectsToggle.setAttribute("aria-expanded", String(isOpen));
};

// Equalize card heights within each grid separately, so the larger
// featured cards don't stretch the "Other Projects" cards.
const equalizeProjectCards = () => {
  document
    .querySelectorAll(".featured-projects-grid, .project-grid")
    .forEach((grid) => {
      const projectCards = grid.querySelectorAll(".card");
      if (projectCards.length === 0) return;

      projectCards.forEach((card) => {
        card.style.height = "auto";
      });

      const tallestCard = Math.max(
        ...Array.from(projectCards, (card) => card.offsetHeight),
      );

      projectCards.forEach((card) => {
        card.style.height = `${tallestCard}px`;
      });
    });
};

burgerIcon.addEventListener("click", () => {
  navbarMenu.classList.toggle("is-active");
  burgerIcon.classList.toggle("is-active");
  burgerIcon.setAttribute(
    "aria-expanded",
    String(burgerIcon.classList.contains("is-active")),
  );
});

projectsToggle.addEventListener("click", () => {
  if (!window.matchMedia("(max-width: 1023px)").matches) {
    setProjectsDropdownState(false);
    return;
  }

  setProjectsDropdownState(
    projectsToggle.getAttribute("aria-expanded") !== "true",
  );
});

document.addEventListener("click", (event) => {
  if (!projectsDropdown.contains(event.target)) {
    setProjectsDropdownState(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setProjectsDropdownState(false);
  }
});

window.addEventListener("load", equalizeProjectCards);
window.addEventListener("resize", equalizeProjectCards);
