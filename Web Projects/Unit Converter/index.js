const inputEl = document.getElementById("input");
const btnEl = document.getElementById("btn");

const metreFeetEl = document.getElementById("metre-feet");
const litresGallonEl = document.getElementById("litres-gallon");
const kgPoundsEl = document.getElementById("kg-pounds");

btnEl.addEventListener("click", function () {
  const value = Number(inputEl.value);

  // Metres ↔ Feet
  const metresToFeet = (value * 3.281).toFixed(3);
  const feetToMetres = (value / 3.281).toFixed(3);
  metreFeetEl.textContent =
    `${value} metres = ${metresToFeet} feet | ${value} feet = ${feetToMetres} metres`;

  // Litres ↔ Gallons
  const litresToGallons = (value * 0.264).toFixed(3);
  const gallonsToLitres = (value / 0.264).toFixed(3);
  litresGallonEl.textContent =
    `${value} litres = ${litresToGallons} gallons | ${value} gallons = ${gallonsToLitres} litres`;

  // Kilograms ↔ Pounds
  const kgToPounds = (value * 2.204).toFixed(3);
  const poundsToKg = (value / 2.204).toFixed(3);
  kgPoundsEl.textContent =
    `${value} kilograms = ${kgToPounds} pounds | ${value} pounds = ${poundsToKg} kilograms`;
});