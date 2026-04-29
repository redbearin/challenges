itemsPurchased = (items, total) => {
  const itemsArrSorted = Object.entries(items).sort();
  let purchased = [];
  let num;
  total = +total.replace(/[\,$]/g,"");
  for (let i = 0; i < itemsArrSorted.length; i++) {
    num = +itemsArrSorted[i][1].replace(/[\,$]/g,"");
    if (num <= total) {
      purchased.push(itemsArrSorted[i][0]);
    }
  }
  if (!purchased.length) {
    return 'Nothing';
  }
  return JSON.stringify(purchased);
}

const items = {
  Apple: "$4",
  Honey: "$3",
  Fan: "$14",
  Bananas: "$4",
  Pan: "$100",
  Spoon: "$2"
  };

const total = "$100";

document.getElementById('ans').textContent = itemsPurchased(items, total);