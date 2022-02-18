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
  "Chapter 1" : 1,
  "Chapter 2" : 15,
  "Chapter 3" : 37
};

const page = 10;

document.getElementById('ans').textContent = closestToPage(chapters, page)