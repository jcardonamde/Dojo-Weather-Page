function alerta(ciudad) {
    alert("Cargando informe meteorológico " + ciudad + "...");
};

function temperatureUnit(elementSelect) {
    var unitMeasurement = elementSelect.value;
    console.log("Temperature is in " + unitMeasurement);

    for (var i=1; i<=8; i++) {
        var elementTemperature = document.querySelector('#temperature' + i);
        console.log(elementTemperature);
        var temperature = elementTemperature.innerText;
        console.log(temperature);
        temperature = parseInt(temperature);
        console.log(temperature);

        var newTemperature = 0;
        if (unitMeasurement === "°C") {
            newTemperature = Math.round((temperature - 32) * 5 / 9); //change fahrenheit to centigrade
        } else {
            newTemperature = Math.round((temperature * 9 / 5) + 32); //change centigrade to fahrenheit
        }
        elementTemperature.innerText = newTemperature + "°";
    };
};

function aceptar() {
    var cookie = document.querySelector(".cookie"); //Seleccionando la etiqueta con clase cookie    
    cookie.remove();
};