let currentPokemonId = 1;

function fetchPokemon(id) {
    document.getElementById('loading').style.display = 'block';
    document.getElementById('error-message').style.display = 'none';
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('pokemon-name').textContent = 'Name: ' + data.name;
        document.getElementById('pokemon-id').textContent = 'ID: ' + data.id;
        document.getElementById('pokemon-height').textContent = 'Height: ' + data.height + ' cm';
        document.getElementById('pokemon-weight').textContent = 'Weight: ' + data.weight + ' g';
        
        const types = data.types.map(typeInfo => typeInfo.type.name).join(', ');
        document.getElementById('pokemon-type').textContent = 'Type: ' + types;

        if (data.sprites.front_default) {
            document.getElementById('pokemon-image').src = data.sprites.front_default;
        } else {
            document.getElementById('pokemon-image').src = 'fallback-image.png';
        }
        
        document.getElementById('pokemon-image').alt = data.name;
        currentPokemonId = data.id;
        document.getElementById('loading').style.display = 'none';
    })
    .catch(error => {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('error-message').textContent = "An error occurred while fetching Pokémon data.";
        document.getElementById('error-message').style.display = 'block';
    });
}

document.getElementById('random-button').addEventListener('click', function() {
    const randomID = Math.floor(Math.random() * 898) + 1;
    fetchPokemon(randomID);
});

document.getElementById('next-button').addEventListener('click', function() {
    if (currentPokemonId < 1000) {
        currentPokemonId++;
        fetchPokemon(currentPokemonId);
    } else {
        alert("No more Pokémon ahead!");
    }
});

document.getElementById('previous-button').addEventListener('click', function() {
    if (currentPokemonId > 1) {
        currentPokemonId--;
        fetchPokemon(currentPokemonId);
    } else {
        alert("No previous Pokémon!");
    }
});

document.getElementById('go-button').addEventListener('click', function() {
    const pokemonIdInput = document.getElementById('pokemon-id-input').value;

    if (pokemonIdInput >= 1 && pokemonIdInput <= 1000) {
        fetchPokemon(pokemonIdInput);
    } else {
        alert('Please enter a valid Pokémon ID between 1 and 1000.');
    }
});