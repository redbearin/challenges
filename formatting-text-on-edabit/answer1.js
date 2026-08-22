mdFormat = (str, sty) => {
  if (sty === "b") return "**" + str + "**";
  if (sty === "i") return "_" + str + "_";
  if (sty === "c") return "`" + str + "`";
  return "~~" + str + "~~";
}

const str = "Bold";
const sty = "b";

document.getElementById('ans').textContent = mdFormat(str, sty);