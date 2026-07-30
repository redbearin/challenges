filterStateNames = (arr, typ) => {
  return typ === 'abb'?
  JSON.stringify(arr.filter(ele => ele.charCodeAt(1) < 91)) :
  JSON.stringify(arr.filter(ele => ele.charCodeAt(1) > 96)) ;
}

const arr = ["Arizona", "CA", "NY", "Nevada"];
const typ = "full";

document.getElementById('ans').textContent = filterStateNames(arr, typ);