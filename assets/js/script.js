function fromCelcius(){
    var celcius = parseFloat(document.getElementById("inputCelcius").value);
    document.getElementById("inputFahrenheit").value = (celcius * 9 / 5) + 32;
    document.getElementById("inputKelvin").value = (celcius + 273.15);
}

function fromFahrenheit(){
    var fahrenheit = parseFloat(document.getElementById("inputFahrenheit").value);
    document.getElementById("inputCelcius").value = (fahrenheit - 32) * 5 / 9;
    document.getElementById("inputKelvin").value = (fahrenheit - 32) * 5 / 9 + 273.15;
}

function fromKelvin(){
    var kelvin = parseFloat(document.getElementById("inputKelvin").value);
    document.getElementById("inputCelcius").value = (kelvin - 273.15);
    document.getElementById("inputFahrenheit").value = (kelvin - 273.15) * 9/5 + 32;
}