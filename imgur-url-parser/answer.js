const imgurUrlParser = str => {
  // break str into array elements on /
  strArr = str.split('/');
  // image
  if (strArr.length < 5) {
    // break into the id and file format
    const imgArr = strArr[3].split('.');
    return JSON.stringify({id: imgArr[0], type: 'image'});
  }
  // album
  if (strArr[3] === 'a') 
    return JSON.stringify({id: strArr[4], type: 'album'});
  // gallery
  else 
    return JSON.stringify({id: strArr[4], type: 'gallery'});

};

const str = "http://imgur.com/OzZUNMM";

document.getElementById('ans').textContent = imgurUrlParser(str);