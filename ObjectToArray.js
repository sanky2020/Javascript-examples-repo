//using=> Object.entries()

1) const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj)); 

//Output=>  [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// non-object argument will be coerced to an object
2) console.log(Object.entries('foo')); //output=> [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// returns an empty array for any primitive type except for strings (see the above example), since primitives have no own properties
3) console.log(Object.entries(100)); //output=> [ ]
