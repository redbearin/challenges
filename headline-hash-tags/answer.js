getHashTags = str => {
  str = str.toLowerCase().replace(/([^A-Za-z0-9 ])/g, '');
  strArrSortedTop = str.split(' ').sort((a,b) => b.length - a.length).slice(0,3);
  return JSON.stringify(strArrSortedTop.map(ele => "#" + ele));
}

const str = "How the Avocado Became the Fruit of the Global Trade";

document.getElementById('ans').textContent = getHashTags(str);