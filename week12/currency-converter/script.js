document.getElementById('find-character').addEventListener('click', getCharacter);

function getCharacter() {
    const characterInfo = document.getElementById('character-info');
    characterInfo.innerHTML = `<p class="loading">Loading...</p>`;

    const randomId = Math.floor(Math.random() * 83) + 1;
    fetch(`https://www.swapi.tech/api/people/${randomId}`)
        .then(response => response.json())
        .then(data => {
            if (data.result) {
                const character = data.result.properties;
                characterInfo.innerHTML = `
                    <h2>${character.name}</h2>
                    <p>Height: ${character.height}</p>
                    <p>Gender: ${character.gender}</p>
                    <p>Birth Year: ${character.birth_year}</p>
                    <p>Home World: Loading...</p>
                `;

                return fetch(character.homeworld);
            } else {
                throw new Error('Character not found');
            }
        })
        .then(response => response.json())
        .then(homeworldData => {
            characterInfo.innerHTML = characterInfo.innerHTML.replace("Loading...", homeworldData.result.properties.name);
        })
        .catch(() => {
            characterInfo.innerHTML = `<p class="error">Oh No! That person isn't available.</p>`;
        });
}