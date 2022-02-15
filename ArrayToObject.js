//using=> Object.fromEntries()

const arr = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ];
const obj = Object.fromEntries(arr);
console.log(obj);

//Output=> { 0: "a", 1: "b", 2: "c" }
