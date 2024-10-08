document.getElementById('random-button').addEventListener('click', function() {
    console.log('Fetching pokemon...');

    const randomID = Math.floor(Math.random() * 898) + 1; 

    fetch(`https://pokeapi.co/api/v2/pokemon/${randomID}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('pokemon-name').textContent = 'Name: ' + data.name;
        document.getElementById('pokemon-id').textContent = 'id: ' + data.id;
        document.getElementById('pokemon-height').textContent = 'height: ' + data.height;
        document.getElementById('pokemon-weight').textContent = 'weight: ' + data.weight;
    });

});