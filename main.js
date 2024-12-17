const navbarMenu = document.getElementById("nav-menu");
const navbarLink = document.querySelectorAll(".nav-link");
const navbarToggle = document.getElementById("nav-toggle");

navbarToggle.addEventListener("click", () => {
    navbarMenu.classList.toggle("left-[0]");
    navbarToggle.classList.toggle("ri-close-large-line");
});

navbarLink.forEach((link) => {
    link.addEventListener("click", () => {
        navbarMenu.classList.remove("left-[0]");
        navbarToggle.classList.remove("ri-close-large-line");
    });
});

const scrollup = () => {
    const scrollupBtn = document.getElementById("scroll-up");
    if (this.scrollY >= 250) {
        scrollupBtn.classList.remove("-bottom-1/2");
        scrollupBtn.classList.add("bottom-4");
    } else {
        scrollupBtn.classList.add("-bottom-1/2");
        scrollupBtn.classList.remove("bottom-4");
    }
};
window.addEventListener("scroll", scrollup);

const activeLink = () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    let current = "home";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;

        if (this.scrollY >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((item) => {
        item.classList.remove("active");

        if (item.href.includes(current)) {
            item.classList.add("active");
        }
    });
};
window.addEventListener("scroll", activeLink);

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2500,
    delay: 300,
    reset: true,
});

sr.reveal(`.beranda, .manfaat, .tentang_kami, .kategori, .blog`);
sr.reveal(`.image_sampah`, { delay: 500, scale: 0.5 });
sr.reveal(`.manfaat_card, .kategori_card, .blog_card`, { interval: 100 });
sr.reveal(`.tk_image_pisang, .blog_image_daun`, {
    delay: 1000,
    origin: "right",
});
sr.reveal(`.tk_content_1, .tk_image_2`, { origin: "right" });
sr.reveal(`.tk_content_2, .tk_image_1`, { origin: "left" });
