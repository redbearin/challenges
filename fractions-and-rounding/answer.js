fracRound = (frac, places) => {
  let end;
  const fracArr = frac.split('/');
  const decStr = Math.round(+fracArr[0]/+fracArr[1] * Math.pow(10, places)) /
        Math.pow(10, places) + "";
  const decStrArr = decStr.split('.');

  if (!decStrArr[1]) {
    end = "." + "0".repeat(places);
  }
  else if (decStrArr[1].length < places) {
    end = "0".repeat(places - decStrArr[1].length);
  }
  else {
    end = "";
  }
  return frac + " rounded to " + places + " decimal places is " + decStr + end;
}

const frac = "2/8";
const places = 4;

document.getElementById('ans').textContent = fracRound(frac, places);