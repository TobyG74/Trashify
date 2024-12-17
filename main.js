const navbarMenu = document.getElementById("nav-menu");
const navbarLink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
    navbarMenu.classList.toggle("left-[0]");
    hamburger.classList.toggle("ri-close-large-line");
});

navbarLink.forEach((link) => {
    link.addEventListener("click", () => {
        navbarMenu.classList.remove("left-[0]");
        hamburger.classList.remove("ri-close-large-line");
    });
});

/**
 * Scroll Up Button
 */

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

/**
 * Active Link
 */

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

/**
 * Scroll Reveal Animation
 */
const sr = ScrollReveal({
    origin: "top",
    distance: "100px",
    duration: 2500,
    delay: 300,
    reset: true,
});

sr.reveal(
    `.beranda_content, .manfaat_content, .tentang_kami_content, .kategori_title, .blog_title, .blog_button, .ulasan_title, .ulasan_content, .newsletter_content, .footer_icon, .footer_content`
);
sr.reveal(`.image_sampah`, { delay: 500, scale: 0.5 });
sr.reveal(`.manfaat_card, .kategori_card, .blog_card`, { interval: 100 });
sr.reveal(`.tk_image_pisang, .blog_image_daun, .ulasan_image_kaleng`, {
    delay: 1000,
    origin: "right",
});
sr.reveal(`.review_image, .footer_image`, { delay: 1000, origin: "left" });
sr.reveal(`.tk_content_1, .tk_image_2`, { origin: "right" });
sr.reveal(`.tk_content_2, .tk_image_1`, { origin: "left" });

/**
 * Blog Slider
 */

const blogs = [
    {
        title: "Cara Memulai Bank Sampah di Lingkungan Anda",
        description:
            "Langkah-langkah mudah membangun komunitas peduli lingkungan.",
        img: "./assets/img/blog-1.jpg",
    },
    {
        title: "Manfaat Daur Ulang bagi Ekonomi Keluarga",
        description:
            "Bagaimana memilah sampah memberikan keuntungan finansial.",
        img: "./assets/img/blog-2.jpg",
    },
    {
        title: "Tips Mengurangi Penggunaan Plastik di Rumah",
        description: "Langkah sederhana mengurangi sampah plastik.",
        img: "./assets/img/blog-3.jpg",
    },
    {
        title: "Mengelola Sampah Organik Menjadi Kompos",
        description:
            "Panduan praktis mengolah sampah organik menjadi pupuk kompos.",
        img: "./assets/img/blog-4.jpg",
    },
    {
        title: "Program Bank Sampah di Sekolah",
        description:
            "Mendorong siswa aktif dalam program bank sampah di sekolah.",
        img: "./assets/img/blog-5.jpg",
    },
    {
        title: "Mengenal Sampah Anorganik dan Cara Mengelolanya",
        description: "Cara efektif mengelola sampah anorganik di rumah.",
        img: "./assets/img/blog-6.jpg",
    },
];

const blogsPerPage = 3;
let currentPage = 1;

const blogContainer = document.getElementById("blog-container");
const prevButton = document.getElementById("prev-page");
const nextButton = document.getElementById("next-page");

function renderBlogs() {
    blogContainer.innerHTML = "";
    const start = (currentPage - 1) * blogsPerPage;
    const end = start + blogsPerPage;
    const currentBlogs = blogs.slice(start, end);

    currentBlogs.forEach((blog) => {
        const blogCard = `
        <article class="border border-green-800 bg-white flex flex-col rounded-lg overflow-hidden w-[300px] hover:shadow-2xl hover:-translate-y-2 hover:bg-blue-700 group transition-all duration-300">
        <img src="${blog.img}" alt="${blog.title}" class="h-[200px]">
        <div class="p-4 flex flex-col flex-grow">
            <h4 class="text-gray-800 group-hover:text-white">${blog.title}</h4>
            <p class="text-gray-600 mt-2 text-sm flex-grow">${blog.description}</p>
            <a href="#" class="inline-block mt-auto text-green-600 font-semibold group-hover:text-white hover:underline">Baca Selengkapnya</a>
        </div>
        </article>`;
        blogContainer.insertAdjacentHTML("beforeend", blogCard);
    });

    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage * blogsPerPage >= blogs.length;
}

prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        renderBlogs();
    }
});

nextButton.addEventListener("click", () => {
    if (currentPage * blogsPerPage < blogs.length) {
        currentPage++;
        renderBlogs();
    }
});

renderBlogs();

/**
 * Swiper Review
 */

const swiper = new Swiper(".swiper", {
    speed: 400,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    grabCursor: true,
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
