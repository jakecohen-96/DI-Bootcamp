const apiKey = "27a27ffea3ec4822493cdc5e";
const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const amountInput = document.getElementById("amount");
const resultDiv = document.getElementById("result");

// Fetch available currencies
async function fetchCurrencies() {
    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/codes`);
        const data = await response.json();

        if (data.result === "success") {
            populateDropdowns(data.supported_codes);
        } else {
            throw new Error("Failed to fetch currencies");
        }
    } catch (error) {
        resultDiv.innerHTML = `<p style="color:red;">Error loading currencies.</p>`;
    }
}

// Populate currency dropdowns
function populateDropdowns(currencies) {
    currencies.forEach(currency => {
        const option1 = document.createElement("option");
        const option2 = document.createElement("option");

        option1.value = currency[0];
        option1.textContent = `${currency[0]} - ${currency[1]}`;
        option2.value = currency[0];
        option2.textContent = `${currency[0]} - ${currency[1]}`;

        fromCurrency.appendChild(option1);
        toCurrency.appendChild(option2);
    });

    // Set default currencies
    fromCurrency.value = "USD";
    toCurrency.value = "ILS";
}

// Fetch conversion rate and calculate result
async function convertCurrency() {
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const amount = amountInput.value;

    if (amount <= 0) {
        resultDiv.innerHTML = `<p style="color:red;">Enter a valid amount.</p>`;
        return;
    }

    resultDiv.innerHTML = `<p>Converting...</p>`;

    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}/${amount}`);
        const data = await response.json();

        if (data.result === "success") {
            resultDiv.innerHTML = `<p>${amount} ${from} = <strong>${data.conversion_result} ${to}</strong></p>`;
        } else {
            throw new Error("Conversion failed");
        }
    } catch (error) {
        resultDiv.innerHTML = `<p style="color:red;">Error fetching conversion rate.</p>`;
    }
}

// Switch currency values
document.getElementById("switch").addEventListener("click", () => {
    const temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;
    convertCurrency();
});

document.getElementById("convert").addEventListener("click", convertCurrency);

// Initialize the app
fetchCurrencies();