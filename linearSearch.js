function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return true;
        }
    }
    return false;
}

const array = Array.from({length: 10000}, () => Math.floor(Math.random() * 100000)).sort((a, b) => a - b);
const target = array[Math.floor(Math.random() * array.length)];

const startLinear = performance.now();
const resultLinear = linearSearch(array, target);
const endLinear = performance.now();

console.log(`Linear search: doelwit gevonden? ${resultLinear}`);
console.log(`looptijd: ${(endLinear - startLinear).toFixed(6)} ms`);
