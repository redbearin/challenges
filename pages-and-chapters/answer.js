closestToPage = (chaps, pg) => {
  const chapsArr = Object.entries(chaps);
  for (let i = 1; i < chapsArr.length; i++) {
    if (chapsArr[i][1] > pg && chapsArr[i-1][1] < pg) {
      if (pg - chapsArr[i-1][1] >=  chapsArr[i][1] - pg) {
        return chapsArr[i][0]
      }
      return chapsArr[i -1][0];
    }
  }
}

const chaps =  {
  "New Beginnings" : 1,
  "Strange Developments" : 62,
  "The End?" : 194,
  "The True Ending" : 460
}

const pg = 200;

document.getElementById('ans').textContent = closestToPage(chaps, pg);

