const { celsiusToFahrenheit, fahrenheitToCelsius } = require("./Temperature");
const celsiusTemp = 25;
const fahrenheitTemp = 77;
const convertedToFahrenheit = celsiusToFahrenheit(celsiusTemp);
console.log(`${celsiusTemp}°C is ${convertedToFahrenheit.toFixed(2)}°F`);
const convertedToCelsius = fahrenheitToCelsius(fahrenheitTemp);
console.log(`${fahrenheitTemp}°F is ${convertedToCelsius.toFixed(2)}°C`);
