class Pagination {
  constructor(arr, entries) {
    this.arr = arr;
    this.entries = entries;
  }
  index = 4;
  prevpage() {
    index = index - this.entries;
    this.getVisibleItems();
  }
  nextPage() {
   
  }
  firstPage() {

  }
  lastPage() {

  }
  goToPage() {

  }
  getVisibleItems() {
    let sub = [];
    for (let i = index; i < index + this.entries; i++) {
      sub.push(this.arr[i]);
    }
    return JSON.stringify(sub);
  }
}

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");

const p = new Pagination(alphabetArray, 4);

document.getElementById('ans').textContent = p.getVisibleItems;