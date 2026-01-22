const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");
const viewWorkBtn = document.getElementById("viewWorkBtn");

function showSection(id) {
  sections.forEach((section) => {
    section.classList.remove("active");
  });

  const target = document.getElementById(id);
  if (target) {
    target.classList.add("active");
  }
}

// Navbar clicks
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // stop new page open
    const sectionId = link.getAttribute("data-section");
    showSection(sectionId);
  });
});

// Hero button click
viewWorkBtn.addEventListener("click", () => {
  showSection("projects");
});
