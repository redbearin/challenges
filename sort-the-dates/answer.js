sortDates = (arr, dir) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].slice(6,10) + '-' + arr[i].slice(3, 5) + '-' + arr[i].slice(0,2) + 'T' + arr[i].slice(11) + ':00';   
  }

  dir === "ASC" ?
    arr.sort((a, b) => new Date(a) - new Date(b)) :
    arr.sort((a, b) => new Date(b) - new Date(a));

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].slice(8, 10) + '-' + arr[i].slice(5,7) + '-' + arr[i].slice(0, 4) + '_' + arr[i].slice(11, 16);  
  }
  
  return JSON.stringify(arr);
}

const arr = [
  "18-10-2016_16:19",
  "18-10-2016_12:04",
	"18-10-2016_12:09",
	"18-10-2017_16:19",
	"19-10-2017_16:20",
  "01-12-2017_20:32",
];
const dir = "ASC";

document.getElementById('ans').textContent = sortDates(arr, dir);
