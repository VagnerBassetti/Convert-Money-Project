const convertButton = document.querySelector(".convert-button")
const currencyConvertedSelect = document.querySelector(".currency-select")
const currencyConvertSelect = document.querySelector(".currency-convert-select")



function convertValues() {
    const inputCurrencyValues = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")
    const imgConvert = document.querySelector(".img-convert")
    const imgConverted = document.querySelector(".img-converted")
    const dolarEuroRealConvert = document.querySelector(".dolar-euro-real-convert")
    const dolarEuroRealConverted = document.querySelector(".dolar-euro-real-converted")
   

    const dolarToday = 4.95
    const euroToday = 5.33
    const euroDolar = 1.08

    if (currencyConvertSelect.value == "real" && currencyConvertedSelect.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency", currency: "BRL"
        }).format(inputCurrencyValues)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD"
        }).format(inputCurrencyValues / dolarToday);
        dolarEuroRealConvert.innerHTML = "Real"
        dolarEuroRealConverted.innerHTML = "Dólar Americano";
        imgConvert.src = "./assets/brasil.png"
        imgConverted.src = "./assets/dolar.png"
        
        
    }

    if (currencyConvertSelect.value == "dolar" && currencyConvertedSelect.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency", currency:"USD"}).format(inputCurrencyValues)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency", currency: "BRL"
        }).format(inputCurrencyValues * dolarToday);
        dolarEuroRealConvert.innerHTML = "Dólar Americano"
        dolarEuroRealConverted.innerHTML = "Real";
        imgConvert.src = "./assets/dolar.png";
        imgConverted.src = "./assets/brasil.png"
       
        
    }

    if (currencyConvertSelect.value == "real" && currencyConvertedSelect.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency", currency: "BRL"
        }).format(inputCurrencyValues)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", currency: "EUR"
        }).format(inputCurrencyValues / euroToday);
        dolarEuroRealConvert.innerHTML = "Real"
        dolarEuroRealConverted.innerHTML = "Euro";
        imgConvert.src = "./assets/brasil.png";
        imgConverted.src = "./assets/euro.png"
    }

    if(currencyConvertSelect.value == "euro" && currencyConvertedSelect.value == "real")  {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", currency: "EUR"
        }).format(inputCurrencyValues)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency", currency: "BRL"
        }).format(inputCurrencyValues * euroToday)
        dolarEuroRealConvert.innerHTML = "Euro"
        dolarEuroRealConverted.innerHTML = "Real";
        imgConvert.src = "./assets/euro.png";
        imgConverted.src = "./assets/brasil.png";
    }

    if (currencyConvertSelect.value == "dolar" && currencyConvertedSelect.value == "euro")  {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency", currency:"USD"
        }).format(inputCurrencyValues)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency", currency: "EUR"
        }).format(inputCurrencyValues / euroDolar)
        dolarEuroRealConvert.innerHTML = "Dólar Americano"
        dolarEuroRealConverted.innerHTML = "Euro"
        imgConvert.src = "./assets/dolar.png"
        imgConverted.src = "./assets/euro.png"
        }
    
    if (currencyConvertSelect.value == "euro" && currencyConvertedSelect.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", currency: "EUR"
        }).format(inputCurrencyValues)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD"
        }).format(inputCurrencyValues * euroDolar)
        dolarEuroRealConvert.innerHTML = "Euro";
        dolarEuroRealConverted.innerHTML = "Dólar Americano";
        imgConvert.src = "./assets/euro.png";
        imgConverted.src = "./assets/dolar.png"
    }

}

convertButton.addEventListener("click", convertValues)
currencyConvertedSelect.addEventListener("change", convertValues)
currencyConvertSelect.addEventListener("change",convertValues)