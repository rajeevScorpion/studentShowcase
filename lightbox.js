// lightbox.js

document.addEventListener('DOMContentLoaded', function() {
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImage = document.getElementById('lightboxImage');
    const closeLightbox = document.getElementById('closeLightbox');
    const zoomIn = document.getElementById('zoomIn');
    const zoomOut = document.getElementById('zoomOut');
    let zoomLevel = 1;

    // Function to open lightbox
    window.openLightbox = function(src) {
        lightboxModal.style.display = 'block';
        lightboxImage.src = src;
        zoomLevel = 1;
        lightboxImage.style.transform = 'scale(1)';
    };

    // Close lightbox
    closeLightbox.onclick = function() {
        lightboxModal.style.display = 'none';
    };

    // Zoom in function
    zoomIn.onclick = function() {
        zoomLevel += 0.1;
        lightboxImage.style.transform = `scale(${zoomLevel})`;
    };

    // Zoom out function
    zoomOut.onclick = function() {
        if (zoomLevel > 1) {
            zoomLevel -= 0.1;
            lightboxImage.style.transform = `scale(${zoomLevel})`;
        }
    };
});
