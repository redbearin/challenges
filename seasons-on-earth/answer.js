hemisphereSeason = (hemi, date) => {
  const dateArr = date.split(', ');
  if (dateArr[0] === "February" && dateArr[1] === "29" || 
      dateArr[0] === "March" || 
      dateArr[0] === "April" || 
      dateArr[0] === "May") {
    return hemi === "S" ? "Autumn" : "Spring";
  }
  if (dateArr[0] === "June" || 
      dateArr[0] === "July" || 
      dateArr[0] === "August") {
    return hemi === "S" ? "Winter" : "Summer";
  }
  if (dateArr[0] === "September" || 
      dateArr[0] === "October" || 
      dateArr[0] === "November") {
    return hemi === "S" ? "Spring" : "Autumn";
  }
  else {
    return hemi === "S" ? "Summer" : "Winter";
  }
}

const hemi = "S"
const date =  "September, 22";

document.getElementById('ans').textContent = hemisphereSeason(hemi, date);