generar.addEventListener('click', () => {
    fetch('https://www.scorebat.com/video-api/v3/feed/?token=MTE0NjY0XzE2OTQyMzU2MjlfOWEzNjkwMzg5ZWZkZDdlZWQ2ZjQyZDIwNzg4OTNlOTgxOTM4MDQ0ZQ==')
        .then(resp => resp.json())
        .then(data => {
            const matches = data.response;

            matches.forEach(match => {
                const matchDiv = document.createElement('div');
                matchDiv.classList.add('match');
                matchDiv.innerHTML = `
                    <h2>${match.title}</h2>
                    <p>Competición: ${match.competition}</p>
                    <p>Fecha: ${match.date}</p>
                    <p><a href="${match.matchviewUrl}" target="_blank">Ver partido</a></p>
                    <img src="${match.thumbnail}" alt="Thumbnail del partido">
                `;

                contenedor.appendChild(matchDiv);
            });
        })
        .catch(error => {
            console.error('Error al obtener datos:', error);
        });
});
