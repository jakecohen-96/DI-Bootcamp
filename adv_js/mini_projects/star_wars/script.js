document.getElementById('fetch-button').addEventListener('click', function() {
    document.querySelector('.loading').style.display = 'block';  
    
    const randomId = Math.floor(Math.random() * 83) + 1;

fetch(`https://swapi.dev/api/people/${randomId}/`)
    .then(response => response.json())
    .then(data => {
        document.querySelector('.loading').style.display = 'None'; 
        

        document.getElementById('name').textContent = 'Name: ' + data.name;
        document.getElementById('height').textContent = 'Height: ' + data.height;
        document.getElementById('gender').textContent = 'Gender: ' + data.gender;
        document.getElementById('birth-year').textContent = 'Birth Year: ' + data.birth_year;
        
        document.querySelector('.char-info').style.display = 'Block';
    })
    .catch(error => {
        document.querySelector('.loading').style.display = 'None';
        alert('An error has occured');
    });

document.querySelector(".character-info").style.display = "none";

  
});
