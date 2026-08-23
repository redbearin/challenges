canPlay = (hand, card) => {
  const cardArr = card.split(' ');
  let handCard;
  for (let i = 0; i < hand.length; i++) {
    let handCard = hand[i].split(' ');
    if (handCard[0] === cardArr[0] || 
        handCard[1] === cardArr[1]) {
      return true;
    }
  }
  return false;
}

const hand = ["yellow 3", "yellow 7"];
const card = "blue 7";

document.getElementById('ans').textContent = canPlay(hand, card);