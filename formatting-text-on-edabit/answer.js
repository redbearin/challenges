mdFormat = (str, sty) => {
  switch (sty) {
    case "b":
      return "**" + str + "**";
    case "i":
      return "_" + str + "_";
    case "c":
      return "`" + str + "`";
    default:
      return "~~" + str + "~~";
  }
}

const str = "Bold";
const sty = "b";

document.getElementById('ans').textContent = mdFormat(str, sty);