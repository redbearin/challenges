time = (obj, people, walls) => {
  return (walls * obj.minutes * obj.people) / 
         (people * obj.walls);
}

const people = 7;
const obj = {
	people: 4,
	walls: 9,
	minutes: 63 
};
const walls = 4;

document.getElementById('ans').textContent = time(obj, people, walls);