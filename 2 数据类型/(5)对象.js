// let obj = {
//     foo: 'hello',
//     bar: 'world'
// };
//
// let obj1 = {
//     p: function (x) {
//         return 2 * x;
//     }
// };

// let o1 = {
//
// };
//
// let o2 = {
//     bar:'hello'

// };
//
// o1.foo = o2
// console.log(o1.foo.bar);

// let obj = {
//
// };
// obj.foo = 'hello';
// console.log(obj.foo);
// console.log(obj);

// ES6中对象的新使用方法
// let name = 'Amy'
// let age = 18
//
// let person = {name, age}
// console.log(person)

// let o1 = {
//
// };
// let o2 = o1
//
// o2.foo = 'hello'
// console.log(o1.foo); // hello

// let o1 = {name:'Amy', age:18}
// let o2 = o1
// let o3 = {...o1}
//
// o1 = 1
//
// console.log(o1)
// console.log(o2)
// console.log(o3)

// console.log(eval('({name: "Amy", age: 18})'));
// console.log(eval('{age:18}'))

// let foo = 'bar';
// let obj1 = {
//     foo: 'hello',
//     bar: 'world'
// };
//
// console.log(obj1.foo);
// console.log(obj1['foo']);
// console.log(obj1[foo]);

// let obj1 = {
//     0.7:'hello'
// };
// console.log(obj1[0.3+0.4]);

// let obj1 = {
//     key1: 'value1',
//     key2: 'value2',
//     key3: 'value3'
// };
// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));

// let obj1 = Object.defineProperty({}, 'key1', {
//     value: 'value1',
//     writable: false,
//     enumerable: true,
//     configurable: false
// });
//
// console.log('key1' in obj1);
// console.log(obj1.hasOwnProperty('toString'));

