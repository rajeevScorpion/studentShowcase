document.addEventListener('DOMContentLoaded', function() {
    fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vRR3IGwqGlMfHAGPE0kLiTAnJMLIqBL6vv1e1lY1NMYXlK-5CgOt3oNJF85xKWYIyEFP1nF0e1mBoF0/pub?output=csv')
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n');
            rows.forEach((row, index) => {
                if (index === 0) return; // Skip header row
                const columns = row.split(',');
                const work = {
                    studentName: columns[0],
                    title: columns[1],
                    processDocLink: columns[2],
                    description: columns[3],
                    imageUrl: columns[4]
                };
                // Call function to create and display the card
                const container = document.getElementById('cards-container');
                container.appendChild(createCard(work));
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});

function createCard(work) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${work.imageUrl}" class="card-img-top" alt="${work.title}">
        <div class="card-body">
            <h5 class="card-title">${work.title} - by ${work.studentName}</h5>
            <p class="card-text">${work.description}</p>
            <a href="${work.processDocLink}" class="btn btn-primary">View Process Document</a>
        </div>
    `;
    return card;
}
