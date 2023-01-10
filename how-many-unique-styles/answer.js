uniqueStyles = bandStyles => {
  const styles = {};
  for (let i = 0; i < bandStyles.length; i++) {
    // break the str into arr of styles
    let arr = bandStyles[i].split(',');
    // add each style to the styles object
    for (let j = 0; j < arr.length; j++) {
      if (!styles[arr[j]]) 
        styles[arr[j]] = 1;
    }
  }
  return Object.keys(styles).length;
}

const bandStyles = [
  "Soul",
  "House,Folk",
  "Trance,Downtempo,Big Beat,House",
  "Deep House",
  "Soul"
];

document.getElementById('ans').textContent = uniqueStyles(bandStyles);