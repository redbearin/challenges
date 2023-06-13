const GUEST_LIST = {
	Randy: "Germany",
	Karla: "France",
	Wendy: "Japan",
	Norman: "England",
	Sam: "Argentina"
}

greeting = name => {
  if (!GUEST_LIST[name]) {
    return "Hi! I'm a guest.";
  }
	return "Hi! I'm " + name + ", and I'm from " + GUEST_LIST[name] + ".";
}

document.getElementById('ans').textContent = greeting(name);