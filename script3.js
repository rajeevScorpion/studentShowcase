document.addEventListener('DOMContentLoaded', function() {
    fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vRR3IGwqGlMfHAGPE0kLiTAnJMLIqBL6vv1e1lY1NMYXlK-5CgOt3oNJF85xKWYIyEFP1nF0e1mBoF0/pub?output=csv')
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n');
            rows.forEach((row, index) => {
                if (index === 0) return; // Skip header row
                const columns = row.split(',');

                // Assuming the order of columns matches the form fields
                const work = {
                    studentName: columns[1], // Name
                    title: columns[2], // Title of the Poster
                    description: columns[3], // Short Description
                    processDocLink: columns[4], // Link to Process documentation
                    imageUrl: columns[5] // Upload your poster (image link)
                };

                const container = document.getElementById('cards-container');
                container.appendChild(createCard(work));
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});

function createCard(work) {
    const card = document.createElement('div');
    card.className = 'card';

    // Assuming 'work' contains: title, studentName, description, processDocLink, and imageUrl
    card.innerHTML = `
        <img src="${work.imageUrl}" class="card-img-top" alt="${work.title}" onclick="openLightbox('${work.imageUrl}')">
        <div class="card-body">
            <h5 class="card-title">${work.title} - by ${work.studentName}</h5>
            <p class="card-text">${work.description}</p>
            <a href="${work.processDocLink}" class="btn btn-primary" target="_blank">View Process Document</a>
        </div>
    `;

    // Add event listener for lightbox opening
    const img = card.querySelector('img');
    img.addEventListener('click', () => openLightbox(work.imageUrl));

    return card;
}