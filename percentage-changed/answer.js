percentageChanged = (initialPrice, finalPrice) => {
  const percentage = Math.round((Math.abs(+finalPrice.slice(1) - +initialPrice.slice(1)) / +initialPrice.slice(1)) * 100);
  if (+initialPrice.slice(1) > +finalPrice.slice(1)) {
    return percentage + '% decrease';
  }
  else {
    return percentage + '% increase';
  }
}

const initialPrice = "$800";
const finalPrice = "$600";

document.getElementById('ans').textContent = percentageChanged(initialPrice, finalPrice); 