let api = ` https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

const fromDropDown = document.getElementById("from-currency-select");
const toDropDown = document.getElementById("to-currency-select");

// Create DropDown for the currency array
currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    fromDropDown.add(option);
})

// Repeat the same for toDropDown
currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    toDropDown.add(option);
})

// Setting the default values
fromDropDown.value = "USD";
toDropDown.value = "INR";

let convertCurrency = () => {
    // Create references
    const amount = document.querySelector("#amount").value;
    const fromCurrency = fromDropDown.value;
    const toCurrency = toDropDown.value;
    const result = document.querySelector("#result");

    // If input field is not empty
    if(amount.length != 0) {
        fetch(api)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            let fromExchangeRate = data.conversion_rates[fromCurrency];
            let toExchangeRage = data.conversion_rates[toCurrency];

            const covertedAmount = (amount/fromExchangeRate) * toExchangeRage;
            result.innerHTML = `${amount} ${fromCurrency} = ${covertedAmount.toFixed(2)} ${toCurrency}`


        })
        

    } else {
        alert("Enter something");
    }
}

document
.querySelector("#convert-btn")
.addEventListener("click", convertCurrency);
window.addEventListener("load", convertCurrency);