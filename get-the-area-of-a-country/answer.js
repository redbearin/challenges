areaOfCountry = (country, area) => {
  return country + " is " + Math.round(area/1489400*100)/100 + "% of the total world's landmass";
}

const country = "Russia";
const area = 17098242;
document.getElementById('ans').textContent = areaOfCountry(country, area);