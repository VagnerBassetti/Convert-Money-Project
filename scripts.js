const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {
    const inputCurrencyValues = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")
    const imgConverted = document.querySelector(".img-converted")
    const dolarEuro = document.querySelector(".dolar-euro")

    const dolarToday = 4.99
    const euroToday = 5.38

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD"
        }).format(inputCurrencyValues / dolarToday);
        dolarEuro.innerHTML = "Dólar";
        imgConverted.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", currency: "EUR"
        }).format(inputCurrencyValues / euroToday);
        dolarEuro.innerHTML = "Euro";
        imgConverted.src = "./assets/euro.png"
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", currency: "BRL"
    }).format(inputCurrencyValues)



}

convertButton.addEventListener("click", convertValues)
currencySelect.addEventListener("change", convertValues)