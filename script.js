const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')
const dolar = 5.2
const euro = 5.9

const convertValues = () => {
    const input = document.getElementById('input-real').value
    const realvaluetext = document.getElementById('real-value-text')
    const currencyvaluetext = document.getElementById('currency-value-text')


    realvaluetext.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(input)

    if (select.value === "$ Dólar Americano") {
        currencyvaluetext.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(input / dolar)
    }

    if (select.value === "€ Euro") {
        currencyvaluetext.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(input / euro)
    }
}

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById('currencyImg')

    if (select.value === "€ Euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "assets/euro.png"
    }

    if (select.value === "$ Dólar Americano") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "assets/eua.png"
    }
    convertValues()
}



button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)