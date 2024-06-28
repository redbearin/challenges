const youtubeId = str => {
  let strArr = str.split("https://youtu.be/");
  // does not include the above string
  if (strArr.length === 1)
    strArr = str.split('=');
  return strArr[strArr.length - 1];
};

const str = "https://youtube.com/watch?t=4m40s&v=vxP3bY-XxY4";

document.getElementById('ans').textContent = youtubeId(str);