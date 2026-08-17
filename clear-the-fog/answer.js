clearFog = str => {
  const newStr = str.replace(/[fogFOG]/g, "");
  return newStr === str ?
  "It's a clear day!":
  newStr;
}

const str = "fogfogFFfoooofftogffreogffesGgfOogfog";

document.getElementById('ans').textContent = clearFog(str);