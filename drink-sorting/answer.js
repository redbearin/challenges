sortDrinkByPrice = drinks => {
  return JSON.stringify(drinks.sort((a,b) => a.price - b.price));
} 

const drinks = [
  {name: "lemonade", price: 50},
  {name: "lime", price: 10}
]

document.getElementById('ans').textContent = sortDrinkByPrice(drinks);