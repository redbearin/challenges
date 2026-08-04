plant = (seed, water, fert, temp) => 
    temp < 20 || temp > 30 ?
    '-'.repeat(water * water) + seed :
    ('-'.repeat(water) + seed.repeat(fert)).repeat(water);


const seed = "@";
const water = 3;
const fert = 3;
const temp = 25;

document.getElementById('ans').textContent = plant(seed, water, fert, temp);

