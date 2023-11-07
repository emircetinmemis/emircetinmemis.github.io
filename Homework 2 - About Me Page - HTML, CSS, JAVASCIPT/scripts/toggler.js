// Toggle aside menu.
const menuButton = document.getElementById('menuButton');
const aside = document.querySelector('aside');
menuButton.addEventListener("click", () => {
    aside.classList.toggle("aside-toggled");
});