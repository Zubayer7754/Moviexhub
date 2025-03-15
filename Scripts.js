document.addEventListener('DOMContentLoaded', function() {
    const movies = [
        {
            title: "Inception",
            image: "https://via.placeholder.com/300x400",
            description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
            link: "#"
        },
        {
            title: "Interstellar",
            image: "https://via.placeholder.com/300x400",
            description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            link: "#"
        },
        {
            title: "The Dark Knight",
            image: "https://via.placeholder.com/300x400",
            description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
            link: "#"
        }
    ];

    const movieList = document.getElementById('movie-list');

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'col-md-4 movie-card';

        movieCard.innerHTML = `
            <div class="card">
                <img src="${movie.image}" class="card-img-top" alt="${movie.title}">
                <div class="card-body">
                    <h3 class="card-title">${movie.title}</h3>
                    <p class="card-text">${movie.description}</p>
                    <a href="${movie.link}" class="btn btn-primary">More Info</a>
                </div>
            </div>
        `;

        movieList.appendChild(movieCard);
    });
});
