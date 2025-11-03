mdFormat = (str, style) => {
  if (style === "b") {
    return "**" + str + "**";
  }
  if (style === "i") {
    return "_" + str + "_";   
  }
  if (style === "c") {
    return "`" + str + "`";       
  }
  if (style === "s") {
    return "~~" + str + "~~";      
  }
}

const str = "Bold";
const style = "b";

document.getElementById('ans').textContent = mdFormat(str, style);