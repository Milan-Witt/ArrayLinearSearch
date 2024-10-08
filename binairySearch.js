function binarySearch(array, target, low, high) {
    if (low > high) {
        return false;
    }
    const mid = Math.floor((low + high) / 2);
    if (array[mid] === target) {
        return true;
    } else if (array[mid] > target) {
        return binarySearch(array, target, low, mid - 1);
    } else {
        return binarySearch(array, target, mid + 1, high);
    }
}

const array = Array.from({length: 10000}, () => Math.floor(Math.random() * 100000)).sort((a, b) => a - b);
const target = array[Math.floor(Math.random() * array.length)];

const startBinary = performance.now();
const resultBinary = binarySearch(array, target, 0, array.length - 1);
const endBinary = performance.now();

console.log(`binair zoeken: doelwit gevonden? ${resultBinary}`);
console.log(`looptijd: ${(endBinary - startBinary).toFixed(6)} ms`);
