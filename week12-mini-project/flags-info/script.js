async function fetchCountries() {
    const loading = document.getElementById('loading');
    loading.style.display = "block";

    try {
        const response = await fetch('https://restcountries.com/v3.1/all');

        if (!response.ok) {
            throw new Error(`HTTP Error, status: ${response.status}`);
        }

        const countries = await response.json();
        loading.style.display = 'none';
        displayFlags(countries);
    } catch (error) {
        console.error('Error getting country data: ', error);
        loading.style.display = 'none';
        displayError();
    }
}

function displayFlags(countries) {
    const flagsContainer = document.getElementById("flags-container");
    flagsContainer.innerHTML = "";

    countries.forEach(country => {
        const flag = document.createElement("img");
        flag.src = country.flags.svg;
        flag.alt = `${country.name.common} flag`;
        flag.title = country.name.common;
        flag.addEventListener("click", () => displayCountryInfo(country));

        flagsContainer.appendChild(flag);
    });
}

function displayCountryInfo(country) {
    const countryInfo = document.getElementById("country-info");

    countryInfo.scrollIntoView({ behavior: "smooth", block: "start" });

    const capital = country.capital ? country.capital[0] : "N/A";
    const population = country.population ? country.population.toLocaleString() : "N/A";
    const region = country.region || "N/A";
    const flagSrc = country.flags.svg;

    countryInfo.innerHTML = `
        <h2>${country.name.common}</h2>
        <p><strong>Capital:</strong> ${capital}</p>
        <p><strong>Population:</strong> ${population}</p>
        <p><strong>Region:</strong> ${region}</p>
        <img src="${flagSrc}" alt="${country.name.common} flag" width="100">
    `;
}

function displayError() {
    const countryInfo = document.getElementById("country-info");
    countryInfo.innerHTML = `
        <p>Error loading data. Please try again later.</p>
        <button id="retry">Retry</button>
    `;

    document.getElementById("retry").addEventListener("click", fetchCountries);
}

document.addEventListener("DOMContentLoaded", fetchCountries);