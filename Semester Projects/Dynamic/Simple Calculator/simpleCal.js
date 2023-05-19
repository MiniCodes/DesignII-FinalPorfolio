// function to display value of Simple calculator buttons
function display(val) {
    document.getElementById("calResults").value += val
}

// function to solve equation in Simple calculator
function solve() {
    calResults.value = eval(calResults.value)
}