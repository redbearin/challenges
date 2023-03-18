greeting = (name, guestList) => {
  if (guestList[name])
    return "Hi! I'm " + name + ", and I'm from " + guestList[name] + ".";
  return "Hi! I'm a guest.";
}

const guestList = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina"
};

const name = "Monti";

document.getElementById('ans').textContent = greeting(name, guestList);