const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#nav-links");
const projectsDropdown = document.querySelector("#projects-dropdown");
const projectsToggle = document.querySelector("#projects-toggle");

const setProjectsDropdownState = (isOpen) => {
  projectsDropdown.classList.toggle("is-active", isOpen);
  projectsToggle.setAttribute("aria-expanded", String(isOpen));
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
