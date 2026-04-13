const canGiveBlood = (donor, receiver) => {
  // universal donor (O-)
  if (/O/.test(donor) && 
      donor.charCodeAt(donor.length - 1) === 45) 
    return true;

  // +
  if (/\+/.test(donor)) {
    //AB+ donor
    if (donor.length === 3) {
      //AB+ receiver
      if (receiver.length === 3 &&
          receiver.charCodeAt(receiver.length - 1) === 43)
        return true;
      else
        return false;
    } 
    //A+ donor
    if (/A/.test(donor) && 
      /A/.test(receiver) && 
      receiver.charCodeAt(receiver.length - 1) === 43)
      return true;
    //B+ donor
    if (/B/.test(donor) && 
      /B/.test(receiver && 
      receiver.charCodeAt(receiver.length - 1) === 43))
      return true; 
    //O+ donor
    else {
      if (/[\+]/.test(receiver))
        return true;
    }
    return false;   
  }

  //-
  else {
    //AB- donor
    if (donor.length === 3) {
      //AB- receiver
      if (receiver.length === 3 &&
          receiver.charCodeAt(receiver.length - 1) === 45)
        return true;
      else
        return false;
    } 
    //A- donor
    if (/A/.test(donor) &&
        /A/.test(receiver))
      return true;
    //B- donor
    if (/B/.test(donor) &&
        /B/.test(receiver))
      return true;
    return false;
  }
};

const donor = "AB-";
const receiver = "AB+";

document.getElementById('ans').textContent = canGiveBlood(donor, receiver);