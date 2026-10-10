const menuBtn = document.getElementById("menuBtn");
const navlinks = document.getElementById("navlinks");
const themeBtn = document.getElementById("themeBtn");

// Mobile navigation menu
menuBtn.addEventListener("click", () => {
  navlinks.classList.toggle("open");
});

// Close the mobile menu and mark the clicked section as active
document.querySelectorAll(".navlinks a").forEach((link) => {
  link.addEventListener("click", () => {
    navlinks.classList.remove("open");
    document.querySelectorAll(".navlinks a").forEach((item) => {
      item.classList.remove("active");
    });
    link.classList.add("active");
  });
});

// Switch between dark and light themes
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeBtn.textContent = document.body.classList.contains("light") ? "☾" : "☼";
});

// Automatically update the copyright year
document.getElementById("year").textContent = new Date().getFullYear();

// Highlight the navigation link for the section currently in view
const sections = [...document.querySelectorAll("main section")];
window.addEventListener("scroll", () => {
  let current = "home";
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 140) {
      current = section.id;
    }
  });

  document.querySelectorAll(".navlinks a").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
});
