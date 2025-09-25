uploadCount = (uploads, mon) => {
  const len = mon.length;
  let count = 0;
  for (let i = 0; i < uploads.length; i++) {
    if (uploads[i].slice(0, len) === mon) {
      count++;
    }
  }
  return count;
}

const uploads = ["Sept 22", "Sept 21", "Oct 15"];
const mon =  "Sept";

document.getElementById('ans').textContent = uploadCount(uploads, mon);