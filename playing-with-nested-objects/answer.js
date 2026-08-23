getObject = obj => {
  const arr = Object.entries(obj).sort(([, a], [, b]) => {
    if (a.marks !== b.marks) {
    return b.marks - a.marks
    }
    return b.age - a.age; 
    }
  );  
  const culled = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][1].marks !== arr[i-1][1].marks) {
      culled.push(arr[i]);
    }
  }
  return JSON.stringify(Object.fromEntries(culled));
}

const obj = {
  "0": { age: 17, name: "julie", marks: "400" },
  "1": { age: 18, name: "john", marks: "400" },
  "2": { age: 16, name: "Robin", marks: "200" },
  "3": { age: 16, name: "Bella", marks: "300" }
};

document.getElementById('ans').textContent = getObject(obj);