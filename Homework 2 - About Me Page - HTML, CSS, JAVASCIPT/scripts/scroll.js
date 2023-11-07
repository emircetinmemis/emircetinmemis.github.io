// Mouse scroll effect, to change section when scrolling.
sectionList = ["welcome", "education", "portfolio", "favorites", "contact"];
sectionIndex = sectionList.indexOf(fragmentIdentifier.substring(1));
document.addEventListener("wheel", (event) => {
    // Check if ctrl key is not pressed.
    if (!event.ctrlKey) {
        // Check if scrolling up.
        if (event.deltaY < 0) {
            // Check if not at the top.
            if (sectionIndex > 0) {
                sectionIndex--;
                window.location.hash = sectionList[sectionIndex];
            }
        // Check if scrolling down.
        } else if (event.deltaY > 0) {
            // Check if not at the bottom.
            if (sectionIndex < sectionList.length - 1) {
                sectionIndex++;
                window.location.hash = sectionList[sectionIndex];
            }
        }
    }
});