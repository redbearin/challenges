hasValidUnitOfMeasure = obj => {
  if (Object.hasOwn(obj, "comment")) {
    return true;
  }
  if (Object.hasOwn(obj, "unitOfMeasure")) { 
    if (obj.unitOfMeasure === "L" || 
        obj.unitOfMeasure === "PCE") {
      return true;
    }
  }
  return false;
}

const obj = { "product": "Milk", unitOfMeasure: "L" };

document.getElementById('ans').textContent = hasValidUnitOfMeasure(obj);