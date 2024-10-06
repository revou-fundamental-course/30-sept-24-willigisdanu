document.getElementById('temperature-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let result = '';

    switch (unit) {
        case 'celsius':
            result = `${temperature} °C = ${(temperature * 9/5) + 32} °F = ${temperature + 273.15} K`;
            break;
        case 'fahrenheit':
            result = `${temperature} °F = ${(temperature - 32) * 5/9} °C = ${((temperature - 32) * 5/9) + 273.15} K`;
            break;
        case 'kelvin':
            result = `${temperature} K = ${temperature - 273.15} °C = ${(temperature - 273.15) * 9/5 + 32} °F`;
            break;
    }

    document.getElementById('result').innerText = result;
});