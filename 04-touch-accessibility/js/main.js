const btn = document.querySelector(".menu-toggle");
const nav = document.getElementById("top-level-nav");

if (btn && nav) {
    const setMenu = (open) => {
        // Tell assistive tech whether the button currently controls an expanded menu or not.
        btn.setAttribute("aria-expanded", String(open));

        // Tell assistive tech whether the nav content should be considered hidden. 
        btn.setAttribute("aria-hidden", String(!open));

        nav.classList.toggle("show-menu", open);
    };

    setMenu(btn.getAttribute("aria-expanded") === "true");

    btn.addEventListener("click", () => {
        const isOpen = btn.getAttribute("aria-expanded") === "true";
        setMenu(!isOpen);
    });

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && nav.classList.contains("show-menu")) setMenu(false);
    });
}