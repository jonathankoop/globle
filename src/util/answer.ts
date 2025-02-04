import { Country } from "../lib/country";

const countryData: Country[] = require("../data/country_data.json").features;

// Retrieve the seed from localStorage, fallback to "1234"
const storedSeed = localStorage.getItem("globleSeed") || "1234";
const seed = parseInt(storedSeed, 10);

// Deterministic pseudo-random function using sine
function seededRandom(seed: number, max: number) {
  let x = Math.sin(seed) * 10000;
  return Math.floor((x - Math.floor(x)) * max);
}

// Get the index of the mystery country based on the seed
const key = seededRandom(seed, countryData.length);

export const answerCountry = countryData[key];
export const answerName = answerCountry.properties.NAME;
