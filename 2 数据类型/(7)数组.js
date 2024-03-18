let a = ['a', 'b', 'c', undefined, 'd'];
a.foo = 'hello';
// console.log(Object.values(a));
// console.log(Object.keys(a));
//
// console.log(a[0]);

for (let key in a) {
    console.log(a[key]);
}

for (let value of a) {
    console.log(value);
}

// for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);
// }