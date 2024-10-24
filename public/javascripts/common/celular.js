function toggleInfo(button) {
    var info = button.nextElementSibling;
    if (info.classList.contains("hidden")) {
        info.classList.remove("hidden");
        info.style.maxHeight = info.scrollHeight + "px"; // Establece la altura máxima para que se deslice
    } else {
        info.classList.add("hidden");
        info.style.maxHeight = null; // Vuelve a colapsar
    }
}
