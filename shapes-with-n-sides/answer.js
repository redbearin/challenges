nSidedShape = n => {
  const shapes = {
    1:	"circle",
    2: "semi-circle",
    3:	"triangle",
    4:	"square",
    5:	"pentagon",
    6:	"hexagon",
    7:	"heptagon",
    8:	"octagon",
    9:	"nonagon",
    10:	"decagon"
  }
  return shapes[n];
}

const n = 3;

document.getElementById('ans').textContent = nSidedShape(n);