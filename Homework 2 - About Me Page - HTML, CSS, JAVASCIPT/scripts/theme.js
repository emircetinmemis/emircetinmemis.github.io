// Apply theme change, and change theme icon.
const themeButton = document.getElementById('themeButton');
const themeIcon = document.getElementById("theme-icon");
const html = document.documentElement;
themeButton.addEventListener("click", () => {
    if (html.getAttribute("theme") == "light") {
        html.setAttribute("theme", "dark");
        themeIcon.classList.replace("bx-moon", "bxs-moon");
    } else {
        html.setAttribute("theme", "light");
        themeIcon.classList.replace("bxs-moon", "bx-moon");
    }
});