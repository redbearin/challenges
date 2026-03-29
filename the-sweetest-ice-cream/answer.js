class IceCream {
	constructor(flavor, numSprinkles) {
		this.flavor = flavor
		this.numSprinkles = numSprinkles
	}
};

sweetestIcecream = arr => {
  let sweetest = 0;
  for (let i = 0; i < arr.length; i++) {
    const sweetness = {
      Plain: 0, 
      Vanilla: 0, 
      ChocolateChip: 5, 
      Strawberry: 10, 
      Chocolate: 10};
    if (sweetness[arr[i].flavor] + arr[i].numSprinkles > sweetest) {
      sweetest = sweetness[arr[i].flavor] + arr[i].numSprinkles;
    }
  }
  return sweetest;
}

ice1 = new IceCream("Chocolate", 13)
ice2 = new IceCream("Vanilla", 0)
ice3 = new IceCream("Strawberry", 7)
ice4 = new IceCream("Plain", 18)
ice5 = new IceCream("ChocolateChip", 3)
ice6 = new IceCream("Chocolate", 23)
ice7 = new IceCream("Strawberry", 0)
ice8 = new IceCream("Plain", 34)
ice9 = new IceCream("Plain", 81)
ice10 = new IceCream("Vanilla", 12)

const arr = [ice1, ice2, ice3, ice4, ice5];

document.getElementById('ans').textContent = sweetestIcecream (arr);