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

const obj = { "product": "Beer", unitOfMeasure: false };

document.getElementById('ans').textContent = hasValidUnitOfMeasure(obj);