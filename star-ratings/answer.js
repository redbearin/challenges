starRating = ratings => {
  let totalOfRatings = 0;
  let numRatings = 0;
  // go rating by rating and add number to total of Ratings
  // count number of ratings
  for (let i = 0; i < ratings.length; i++) {
    totalOfRatings += (i+1) * ratings[i];
    numRatings += ratings[i];
  }
  // calc rating avg
  const avg = (totalOfRatings/numRatings).toFixed(2);
  let stars = '';
  // add correct number of * symbols based on avg
  for (let i = 0; i < Math.round(avg); i++) {
    stars += '*';
  }
  return '[' + avg + '] ' + stars;
}

const ratings = [0, 2, 0, 1, 23];

document.getElementById('ans').textContent = starRating(ratings);