countClaps = str => str.replace(/[^C]/g, "").length;

const str = "CCClaClClap!Clap!ClClClap!";

document.getElementById('ans').textContent = countClaps(str);