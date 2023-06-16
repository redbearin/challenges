const vendingMachine = (products, money, productNumber) => {
  // 1: invalid product number
  if (productNumber < 1 || productNumber > 9)
    return "Enter a valid product number";

  const coins = [500, 200, 100, 50, 20, 10];
  // change due
  const change = money - products[productNumber - 1].price;

  // 2: person does not have enough money for product
  if (change < 0)
    return "Not enough money for this product";

  const name = products[productNumber - 1].name;

  // 3: no change due
  if (change === 0)
    return JSON.stringify({ product: name, change: [] });
  
  // 4: change due 
  // 4a: change can be handled with one coin
  // find the index where the coin <= change due
  const index = coins.findIndex(element => element <= change);
  // the coin at that index is exactly the change due
  if (coins[index] === change)
    return JSON.stringify({ product: name, change: [coins[index]]});

  // 4b: requires more than one coin to make correct change
  // array to hold coins that will be provided as change
  let changeCoins = [coins[index]];
  // total to all change coins
  let total = changeCoins.reduce((value, acc) => value + acc);

  // variables
  let check;
  let i = index + 1;

  // total of coins has not reached the required change
  while (total < change) {
    // check to see what total will be after coin added
    check = total + coins[i];
    // if that coin is added too much change will be provided
    // go to a smaller coin
    if (check > change)
      i++;
    // total will be less than or equal to change required
    else if (check <= change) {
      // add the coin to the change coins array
      changeCoins.push(coins[i]);
      // increment the total
      total = check;
    }
  }
  return JSON.stringify({ product: name, change: changeCoins });
};

const products = [
  { number: 1, price: 100, name: 'Orange juice' },
  { number: 2, price: 200, name: 'Soda' },
  { number: 3, price: 150, name: 'Chocolate snack' },
  { number: 4, price: 250, name: 'Cookies' },
  { number: 5, price: 180, name: 'Gummy bears' },
  { number: 6, price: 500, name: 'Condoms' },
  { number: 7, price: 120, name: 'Crackers' },
  { number: 8, price: 220, name: 'Potato chips' },
  { number: 9, price: 80,  name: 'Small snack' },
];
const money = 200;
const productNumber = 7;

document.getElementById('ans').textContent = vendingMachine(products, money, productNumber);