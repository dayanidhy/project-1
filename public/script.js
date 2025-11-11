  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
  });

  const menuLinks = mobileMenu.querySelectorAll('a');
menuLinks.forEach(link =>
  link.addEventListener('click', () => mobileMenu.classList.add('hidden'))
);


const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("mouseenter", () => menu.classList.add("open"));
btn.addEventListener("mouseleave", () => setTimeout(() => menu.classList.remove("open"), 300));
menu.addEventListener("mouseenter", () => menu.classList.add("open"));
menu.addEventListener("mouseleave", () => menu.classList.remove("open"));
