document.getElementById('convert').addEventListener('click', function() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    const fahrenheit = (celsius * 9 / 5) + 32;
    const formula = `${celsius} °C * 9/5 + 32 = ${fahrenheit} °F`;
    document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
    document.getElementById('formula').value = formula;
});

document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('formula').value = '';
});

document.getElementById('reverse').addEventListener('click', function() {
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    const celsius = (fahrenheit - 32) * 5 / 9;
    const formula = `${fahrenheit} °F - 32 * 5/9 = ${celsius} °C`;
    document.getElementById('celsius').value = celsius.toFixed(2);
    document.getElementById('formula').value = formula;
});