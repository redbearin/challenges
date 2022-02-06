closestToPage = (chapters, page) => {
  let diff = Infinity;
  let closestTitle = '';
  // go title by title through chapters obj
  for (let title in chapters) {
    // closer to this title
    if (Math.abs(chapters[title] - page) <= diff) {
      diff = Math.abs(chapters[title] - page);
      closestTitle = title;
    }
    // past the closest title
    else
      break;
  }
  return closestTitle;
}

const chapters = {
  "New Beginnings" : 1,
  "Strange Developments" : 62,
  "The End?" : 194,
  "The True Ending" : 460
};

const page = 200;

document.getElementById('ans').textContent = closestToPage(chapters, page)