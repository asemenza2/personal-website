(function() {
    const projects = [
        {
            slug: "san-francisco",
            title: "San Francisco",
            images: [
                "../photos/San Francisco/bordered/San Francisco/p-01.jpg",
                "../photos/San Francisco/bordered/San Francisco/p-02.jpg",
                "../photos/San Francisco/bordered/San Francisco/p-03.jpg",
                "../photos/San Francisco/bordered/San Francisco/p-04.jpg",
                "../photos/San Francisco/bordered/San Francisco/p-05.jpg",
                "../photos/San Francisco/bordered/San Francisco/p-06.jpg",
                "../photos/San Francisco/bordered/San Francisco/p-07.jpg",
                "../photos/San Francisco/bordered/San Francisco/p-08.jpg",
                "../photos/San Francisco/bordered/San Francisco/p-09.jpg",
                "../photos/San Francisco/bordered/San Francisco/p-10.jpg",
                "../photos/San Francisco/bordered/San Francisco/p-11.jpg",
                "../photos/San Francisco/bordered/San Francisco/p-12.jpg",
                "../photos/San Francisco/bordered/San Francisco/p-13.jpg",
                "../photos/San Francisco/bordered/San Francisco/p-14.jpg",
                "../photos/San Francisco/bordered/San Francisco/p-15.jpg",
                "../photos/San Francisco/bordered/San Francisco/p-16.jpg",
                "../photos/San Francisco/bordered/San Francisco/p-17.jpg",
                "../photos/San Francisco/bordered/San Francisco/p-18.jpg",
                "../photos/San Francisco/bordered/San Francisco/p-19.jpg",
                "../photos/San Francisco/bordered/San Francisco/p-20.jpg",
                "../photos/San Francisco/bordered/San Francisco/p-21.jpg",
                "../photos/San Francisco/bordered/San Francisco/p-22.jpg",
                "../photos/San Francisco/bordered/San Francisco/p-23.jpg"
            ]
        },
        {
            slug: "mt-diablo",
            title: "Mt. Diablo",
            images: [
                "../photos/Mt. Diablo/bordered/A Day on Mt. Diablo/DSC_6859.jpg",
                "../photos/Mt. Diablo/bordered/A Day on Mt. Diablo/DSC_6948.jpg",
                "../photos/Mt. Diablo/bordered/A Day on Mt. Diablo/DSC_7016.jpg",
                "../photos/Mt. Diablo/bordered/A Day on Mt. Diablo/DSC_7108.jpg",
                "../photos/Mt. Diablo/bordered/A Day on Mt. Diablo/DSC_7266.jpg",
                "../photos/Mt. Diablo/bordered/A Day on Mt. Diablo/DSC_7271.jpg",
                "../photos/Mt. Diablo/bordered/A Day on Mt. Diablo/DSC_7304.jpg",
                "../photos/Mt. Diablo/bordered/A Day on Mt. Diablo/DSC_7403.jpg",
                "../photos/Mt. Diablo/bordered/A Day on Mt. Diablo/DSC_7409.jpg",
                "../photos/Mt. Diablo/bordered/A Day on Mt. Diablo/DSC_7434.jpg",
                "../photos/Mt. Diablo/bordered/A Day on Mt. Diablo/DSC_7482.jpg",
                "../photos/Mt. Diablo/bordered/A Day on Mt. Diablo/DSC_7532.jpg",
                "../photos/Mt. Diablo/bordered/A Day on Mt. Diablo/DSC_7534.jpg",
                "../photos/Mt. Diablo/bordered/A Day on Mt. Diablo/DSC_7537.jpg",
                "../photos/Mt. Diablo/bordered/A Day on Mt. Diablo/DSC_7555.jpg",
                "../photos/Mt. Diablo/bordered/A Day on Mt. Diablo/DSC_7569.jpg",
                "../photos/Mt. Diablo/bordered/A Day on Mt. Diablo/DSC_7582.jpg",
                "../photos/Mt. Diablo/bordered/A Day on Mt. Diablo/DSC_7675.jpg",
                "../photos/Mt. Diablo/bordered/A Day on Mt. Diablo/DSC_7691.jpg",
                "../photos/Mt. Diablo/bordered/A Day on Mt. Diablo/DSC_7703.jpg"
            ]
        },
        {
            slug: "dinner",
            title: "Dinner",
            images: [
                "../photos/Dinner/bordered/A Dinner/DSC_8993.jpg",
                "../photos/Dinner/bordered/A Dinner/DSC_9031.jpg",
                "../photos/Dinner/bordered/A Dinner/DSC_9081.jpg",
                "../photos/Dinner/bordered/A Dinner/DSC_9406.jpg",
                "../photos/Dinner/bordered/A Dinner/DSC_9439.jpg"
            ]
        },
        {
            slug: "point-reyes",
            title: "Point Reyes",
            images: [
                "../photos/Point Reyes/bordered/Point Reyes, Storm/DSC_6084.jpg",
                "../photos/Point Reyes/bordered/Point Reyes, Storm/DSC_6145.jpg",
                "../photos/Point Reyes/bordered/Point Reyes, Storm/DSC_6186.jpg",
                "../photos/Point Reyes/bordered/Point Reyes, Storm/DSC_6198.jpg",
                "../photos/Point Reyes/bordered/Point Reyes, Storm/DSC_6214.jpg",
                "../photos/Point Reyes/bordered/Point Reyes, Storm/DSC_6221.jpg",
                "../photos/Point Reyes/bordered/Point Reyes, Storm/DSC_6247.jpg",
                "../photos/Point Reyes/bordered/Point Reyes, Storm/DSC_6255.jpg",
                "../photos/Point Reyes/bordered/Point Reyes, Storm/DSC_6263.jpg",
                "../photos/Point Reyes/bordered/Point Reyes, Storm/DSC_6284.jpg",
                "../photos/Point Reyes/bordered/Point Reyes, Storm/DSC_6305.jpg",
                "../photos/Point Reyes/bordered/Point Reyes, Storm/DSC_6343.jpg",
                "../photos/Point Reyes/bordered/Point Reyes, Storm/DSC_6461.jpg",
                "../photos/Point Reyes/bordered/Point Reyes, Storm/DSC_6548.jpg",
                "../photos/Point Reyes/bordered/Point Reyes, Storm/DSC_6561.jpg",
                "../photos/Point Reyes/bordered/Point Reyes, Storm/DSC_6567.jpg",
                "../photos/Point Reyes/bordered/Point Reyes, Storm/DSC_6584.jpg",
                "../photos/Point Reyes/bordered/Point Reyes, Storm/DSC_6596.jpg",
                "../photos/Point Reyes/bordered/Point Reyes, Storm/DSC_6598.jpg",
                "../photos/Point Reyes/bordered/Point Reyes, Storm/DSC_6616.jpg",
                "../photos/Point Reyes/bordered/Point Reyes, Storm/DSC_6627.jpg",
                "../photos/Point Reyes/bordered/Point Reyes, Storm/DSC_6634.jpg",
                "../photos/Point Reyes/bordered/Point Reyes, Storm/DSC_6655.jpg"
            ]
        },
        {
            slug: "tablelands",
            title: "Tablelands",
            images: [
                "../photos/Tablelands/DSC_3425.jpg",
                "../photos/Tablelands/DSC_3479.jpg",
                "../photos/Tablelands/DSC_3527.jpg",
                "../photos/Tablelands/DSC_3580.jpg",
                "../photos/Tablelands/DSC_3622.jpg",
                "../photos/Tablelands/DSC_3638.jpg",
                "../photos/Tablelands/DSC_3654.jpg",
                "../photos/Tablelands/DSC_3738.jpg",
                "../photos/Tablelands/DSC_3767.jpg",
                "../photos/Tablelands/DSC_3785.jpg",
                "../photos/Tablelands/DSC_3790.jpg",
                "../photos/Tablelands/DSC_3799.jpg",
                "../photos/Tablelands/DSC_3821.jpg",
                "../photos/Tablelands/DSC_3824.jpg",
                "../photos/Tablelands/DSC_3833.jpg",
                "../photos/Tablelands/DSC_3890.jpg",
                "../photos/Tablelands/DSC_3966.jpg",
                "../photos/Tablelands/DSC_3975.jpg",
                "../photos/Tablelands/DSC_3997.jpg",
                "../photos/Tablelands/DSC_4016.jpg",
                "../photos/Tablelands/DSC_4027.jpg",
                "../photos/Tablelands/DSC_4035.jpg",
                "../photos/Tablelands/DSC_4036.jpg",
                "../photos/Tablelands/DSC_4047.jpg",
                "../photos/Tablelands/DSC_4053.jpg",
                "../photos/Tablelands/DSC_4059.jpg",
                "../photos/Tablelands/DSC_4116.jpg",
                "../photos/Tablelands/DSC_4186.jpg"
            ]
        }
    ];

    const projectMenus = document.querySelectorAll("[data-project-menu]");
    const gallery = document.getElementById("gallery");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const lightboxClose = document.getElementById("lightbox-close");
    const lightboxPrev = document.getElementById("lightbox-prev");
    const lightboxNext = document.getElementById("lightbox-next");
    const menus = Array.from(document.querySelectorAll(".menu"));
    const menuButtons = Array.from(document.querySelectorAll(".menu-toggle"));

    const projectMap = new Map(projects.map(function(project) {
        return [project.slug, project];
    }));

    const url = new URL(window.location.href);
    const requestedSlug = url.searchParams.get("project");
    const currentSlug = projectMap.has(requestedSlug) ? requestedSlug : projects[0].slug;

    let currentProject = projects[0];
    let currentIndex = 0;

    projectMenus.forEach(function(menu) {
        const base = menu.dataset.base || "";

        projects.forEach(function(project) {
            const link = document.createElement("a");
            link.className = "menu-item";
            link.href = base + project.slug;
            link.textContent = project.title;

            if (gallery && project.slug === currentSlug) {
                link.setAttribute("aria-current", "page");
            }

            menu.appendChild(link);
        });
    });

    function closeMenus() {
        menus.forEach(function(menu) {
            menu.classList.remove("is-open");
            const button = menu.querySelector(".menu-toggle");

            if (button) {
                button.setAttribute("aria-expanded", "false");
            }
        });
    }

    function syncMenuAlignment() {
        const navs = Array.from(document.querySelectorAll(".site-nav"));

        navs.forEach(function(nav) {
            const navMenus = Array.from(nav.querySelectorAll(".menu"));

            navMenus.forEach(function(menu) {
                menu.style.transform = "";
            });

            const labels = navMenus.map(function(menu) {
                return menu.querySelector(".menu-text");
            }).filter(Boolean);

            if (labels.length < 2) {
                return;
            }

            const referenceTop = Math.max.apply(null, labels.map(function(label) {
                return label.getBoundingClientRect().top;
            }));

            navMenus.forEach(function(menu) {
                const label = menu.querySelector(".menu-text");

                if (!label) {
                    return;
                }

                const offset = referenceTop - label.getBoundingClientRect().top;

                if (offset > 0.25) {
                    menu.style.transform = "translateY(" + offset.toFixed(2) + "px)";
                }
            });
        });
    }

    function queueMenuAlignment() {
        window.requestAnimationFrame(syncMenuAlignment);
    }

    queueMenuAlignment();
    window.addEventListener("resize", queueMenuAlignment);

    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(queueMenuAlignment);
    }

    menuButtons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            const menu = button.closest(".menu");
            const isOpen = menu && menu.classList.contains("is-open");

            event.stopPropagation();
            closeMenus();

            if (menu && !isOpen) {
                menu.classList.add("is-open");
                button.setAttribute("aria-expanded", "true");
            }

            queueMenuAlignment();
        });
    });

    document.addEventListener("click", function(event) {
        if (!event.target.closest(".menu")) {
            closeMenus();
            queueMenuAlignment();
        }
    });

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            closeMenus();
            queueMenuAlignment();
        }
    });

    if (!gallery || !lightbox || !lightboxImage || !lightboxClose || !lightboxPrev || !lightboxNext) {
        return;
    }

    function updateLightboxControls() {
        lightboxPrev.disabled = currentIndex <= 0;
        lightboxNext.disabled = currentIndex >= currentProject.images.length - 1;
    }

    function showLightboxImage(index) {
        currentIndex = index;
        lightboxImage.src = encodeURI(currentProject.images[index]);
        updateLightboxControls();
    }

    function openLightbox(index) {
        showLightboxImage(index);
        lightbox.hidden = false;
        document.documentElement.classList.add("is-locked");
        document.body.classList.add("is-locked");
    }

    function closeLightbox() {
        lightbox.hidden = true;
        lightboxImage.removeAttribute("src");
        document.documentElement.classList.remove("is-locked");
        document.body.classList.remove("is-locked");
    }

    function stepLightbox(direction) {
        const nextIndex = currentIndex + direction;

        if (nextIndex < 0 || nextIndex >= currentProject.images.length) {
            return;
        }

        showLightboxImage(nextIndex);
    }

    function renderProject(slug) {
        currentProject = projectMap.get(slug) || projects[0];
        gallery.classList.toggle("gallery-stack-single", currentProject.layout === "single-column");
        gallery.replaceChildren();

        const fragment = document.createDocumentFragment();

        currentProject.images.forEach(function(source, index) {
            const figure = document.createElement("figure");
            const button = document.createElement("button");
            const image = document.createElement("img");

            figure.className = "gallery-item";
            button.className = "gallery-trigger";
            button.type = "button";
            button.dataset.index = String(index);
            button.setAttribute("aria-label", currentProject.title);

            image.className = "gallery-image";
            image.src = encodeURI(source);
            image.alt = "";
            image.loading = index < 3 ? "eager" : "lazy";
            image.decoding = "async";

            button.appendChild(image);
            figure.appendChild(button);
            fragment.appendChild(figure);
        });

        gallery.appendChild(fragment);
    }

    renderProject(currentSlug);

    gallery.addEventListener("click", function(event) {
        const trigger = event.target.closest(".gallery-trigger");

        if (!trigger) {
            return;
        }

        openLightbox(Number(trigger.dataset.index));
    });

    lightbox.addEventListener("click", function(event) {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    lightboxClose.addEventListener("click", closeLightbox);
    lightboxPrev.addEventListener("click", function() {
        stepLightbox(-1);
    });
    lightboxNext.addEventListener("click", function() {
        stepLightbox(1);
    });

    document.addEventListener("keydown", function(event) {
        if (lightbox.hidden) {
            return;
        }

        if (event.key === "Escape") {
            closeLightbox();
        }

        if (event.key === "ArrowLeft") {
            stepLightbox(-1);
        }

        if (event.key === "ArrowRight") {
            stepLightbox(1);
        }
    });
})();
