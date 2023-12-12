document.addEventListener('DOMContentLoaded', function() {
    // Dummy data for showcase
    const works = [
        {id: 1, title: "Student Work 1", img: "images/image_01.jpg", likes: 10, description: "Lorem ipsum..."},
        // Add more objects similar to the above for more works
    ];

    // Function to create a card
    function createCard(work) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${work.img}" class="card-img-top" alt="${work.title}" onclick="openLightbox('${work.img}')">
            <div class="card-body">
                <h5 class="card-title">${work.title}</h5>
                <p class="card-text">${work.description}</p>
                <span class="material-icons like-button" onclick="toggleLike(this, ${work.id})">favorite</span>
                <span id="like-count-${work.id}">${work.likes}</span>
            </div>
        `;
        return card;
    }

    // Adding cards to the container
    const container = document.getElementById('cards-container');
    works.forEach(work => container.appendChild(createCard(work)));

    // Lightbox function
    window.openLightbox = function(imageSrc) {
        const lightboxImage = document.getElementById('lightbox-image');
        lightboxImage.src = imageSrc;
        $('#lightboxModal').modal('show');
    };

    // Like function
    window.toggleLike = function(element, id) {
        const likeCountElement = document.getElementById(`like-count-${id}`);
        if (element.classList.contains('liked')) {
            element.classList.remove('liked');
            likeCountElement.innerText = parseInt(likeCountElement.innerText) - 1;
        } else {
            element.classList.add('liked');
            likeCountElement.innerText = parseInt(likeCountElement.innerText) + 1;
        }
    };
});
