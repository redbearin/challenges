findMedianSortedArrays = (arr1, arr2) => {
    const merg = [...arr1, ...arr2].sort((a, b) => a - b);
    const mid = Math.floor(merg.length / 2);
    
    return merg.length % 2 !== 0 ? 
           merg[mid] : 
           (merg[mid - 1] + merg[mid]) / 2;
}

const arr1 = [1,2];s
const arr2 = [3,4];

document.getElementById('ans').textContent = findMedianSortedArrays(arr1, arr2);