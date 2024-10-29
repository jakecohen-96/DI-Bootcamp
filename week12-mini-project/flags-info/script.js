async function fetchCountries() {
    const loading = document.getElementById('loading');
    loading.style.display = 'block';

    try {
        const response = await fetch('https://restcountries.com/v3.1/all');

        if (!response.ok) {
            throw new Error(`HTTP Error, status: ${response.status}`);
        }
    }



}