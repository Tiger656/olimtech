// JavaScript – functions
// The following exercise contains the following subjects:
// ● functions
// Instructions
// 1. Write a function called ‘countryInfo’ which takes three
// parameters: 'country', 'population' and 'capitalCity'. Based
// on this input, the function returns a string with this format:
// ‘Spain has 47 million people and its capital city is Madrid’

function countryInfo(country, population, capitalCity) {
    return country
    .concat(" has ")
    .concat(population)
    .concat(" people and its capital city is ")
    .concat(capitalCity)
}
// 2. Call this function 3 times, with input data for 3 different
// countries. Store the returned values in 3 different
// variables, and log them to the console.

const firstInfo = countryInfo("Spain", "45 mln",  "Madrid");
const secondInfo = countryInfo("Belarus", "9 mln",  "Minsk");
const thirdInfo = countryInfo("Russia", "150 mln",  "Moscow");
