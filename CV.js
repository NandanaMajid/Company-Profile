let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Function untuk scroll ke section contact
function scrollToContact() {
  const contactSection = document.querySelector("#contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
}

// Function untuk review project
function reviewProject(projectName) {
  alert(
    "Terima kasih! Anda melihat detail " +
      projectName +
      ".\n\nGanti URL project sesuai kebutuhan Anda di CV.html",
  );
  // Anda bisa mengganti alert dengan membuka URL project:
  // window.open('https://link-project-anda.com', '_blank');
}

// Close navbar ketika klik link
const navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach((link) => {
  link.onclick = () => {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  };
});
