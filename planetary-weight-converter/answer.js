spaceWeights = (planetA, weight, planetB) => {
  const planets = {Mercury: 3.7, Venus: 8.87, Earth: 9.81, Mars: 3.711, Jupiter: 24.79, Saturn: 10.44, Uranus: 8.69, Neptune: 11.15};
  console.log(planets[planetB])
  return Math.round(planets[planetB]/planets[planetA] * weight * 100) /100;
} 

const planets = {Mercury: 3.7, Venus: 8.87, Earth: 9.81, Mars: 3.711, Jupiter: 24.79, Saturn: 10.44, Uranus: 8.69, Neptune: 11.15};

const planetA = "Earth";
const weight = 1;
const planetB = "Jupiter";

document.getElementById('ans').textContent = spaceWeights(planetA, weight, planetB); 