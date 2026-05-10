likeOrDislike = arr => {
  let status = 'Nothing';
  for (let i = 0; i< arr.length; i++) {
      status === arr[i] ?
      status = "Nothing" :
      status = arr[i];
  }
  return status;
}

const arr = ["Like", "Dislike"];

document.getElementById('ans').textContent = likeOrDislike(arr);