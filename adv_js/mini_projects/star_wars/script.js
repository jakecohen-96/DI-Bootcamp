document.getElementById('fetch-button').addEventListener('click', function() {
    document.querySelector('.loading').style.display = 'block';  
});

fetch("https://swapi.dev/api/people/1/")
    .then(response => response.json())
    .then(data => {
        document.querySelector('.loading').style.display = 'None'; 

        document.getElementById('name').textContent = 'Name: ' + data.name;
        document.getElementById('height').textContent = 'Height: ' + data.name;
        document.getElementById('gender').textContent = 'Gender: ' + data.name;
        document.getElementById('birth-year').textContent = 'Birth Year: ' + data.name;  
    })