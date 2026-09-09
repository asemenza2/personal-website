// Lightbox functionality
(function() {
    'use strict';

    // Get lightbox elements
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    // Get all gallery images
    const galleryImages = document.querySelectorAll('.gallery-image');
    let currentImageIndex = 0;

    // Function to open lightbox
    function openLightbox(index) {
        currentImageIndex = index;
        const img = galleryImages[index];
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Update navigation button visibility
        updateNavButtons();
    }

    // Function to close lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Function to show previous image
    function showPrevImage() {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            openLightbox(currentImageIndex);
        }
    }

    // Function to show next image
    function showNextImage() {
        if (currentImageIndex < galleryImages.length - 1) {
            currentImageIndex++;
            openLightbox(currentImageIndex);
        }
    }

    // Update navigation button visibility
    function updateNavButtons() {
        // Hide prev button on first image
        if (currentImageIndex === 0) {
            prevBtn.style.visibility = 'hidden';
        } else {
            prevBtn.style.visibility = 'visible';
        }

        // Hide next button on last image
        if (currentImageIndex === galleryImages.length - 1) {
            nextBtn.style.visibility = 'hidden';
        } else {
            nextBtn.style.visibility = 'visible';
        }
    }

    // Add click event to gallery images
    galleryImages.forEach((img, index) => {
        img.addEventListener('click', function() {
            openLightbox(index);
        });
    });

    // Close lightbox when clicking close button
    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }

    // Close lightbox when clicking outside the image
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // Navigation button click handlers
    if (prevBtn) {
        prevBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            showPrevImage();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            showNextImage();
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;

        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                showPrevImage();
                break;
            case 'ArrowRight':
                showNextImage();
                break;
        }
    });

    // Prevent scrolling when lightbox is open
    lightbox.addEventListener('wheel', function(e) {
        e.preventDefault();
    });

    // Touch support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    lightbox.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });

    lightbox.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swiped left - show next image
                showNextImage();
            } else {
                // Swiped right - show previous image
                showPrevImage();
            }
        }
    }

})();