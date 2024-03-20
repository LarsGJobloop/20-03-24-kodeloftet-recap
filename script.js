const button = document.getElementById("test-button")
button.addEventListener("click", handleClick)

function handleClick() {
    // Hente ut nåværende verdi
    const display = document.querySelector("#counter-display")
    const currentValueString = display.textContent
    const currentValue = Number(currentValueString)

    // Beregn den nye verdien
    const newValue = currentValue + 1

    // Updater Documentet
    display.textContent = newValue
}