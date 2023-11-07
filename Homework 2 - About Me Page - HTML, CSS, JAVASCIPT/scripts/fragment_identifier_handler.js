// Set fragment identifier to welcome if it is empty so the initial section will be quarenntened to be shown.
fragmentIdentifier = window.location.hash;
if (fragmentIdentifier == "" || fragmentIdentifier == null) {
    fragmentIdentifier = "#welcome";
    window.location.hash = fragmentIdentifier;
}

// Change active section when fragment identifier changes.
window.addEventListener("hashchange", () => {
    fragmentIdentifier = window.location.hash;
    sectionIndex = sectionList.indexOf(fragmentIdentifier.substring(1));
    document.querySelector("nav a.active").classList.remove("active");
    document.querySelector("nav a[href='" + fragmentIdentifier + "']").classList.add("active");
});