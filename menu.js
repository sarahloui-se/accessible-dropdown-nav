const menu = document.querySelector(".dropdown");
const toggle = document.querySelector(".dropdown-title");

function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.innerHTML = "<span class='fa fa-bars fa-lg'></span>"; // bars icon
  } else {
    menu.classList.add("active");
    toggle.innerHTML = "<span class='fa fa-times fa-lg'></span>"; // close icon
  }
};

toggle.addEventListener("click", toggleMenu, false);
