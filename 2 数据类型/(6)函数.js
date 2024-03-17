// let print = function print(x){
//     console.log(x);
// }
//
// print('hello world');

// f();
//
// let f = function () {
//
// }

// var f = function () {
//     console.log(1);
// }
//
// function f() {
//     console.log(2)
// }
//
// f()

// let f = function () {
//     console.log(2)
// }
//
// f()

// let  myFunc = function () {
//
// };
//
// function test(f) {
//     console.log(f.name);
// }
//
// // test(myFunc)
//
// console.log(test.length)

// let multiline = function (fn) {
//     let arr = fn.toString().split('\n');
//     console.log(arr)
//     console.log(arr.slice(1, arr.length - 1))
//     return arr.slice(1, arr.length - 1).join('\n');
// };
//
// function f() {/*
//   这是一个
//   多行注释
// */}
//
// console.log(multiline(f));

// let v = 1;
//
// function f() {
//     console.log(v)
// }
//
// f();

// let a = 1;
// let x = function (a) {
//     console.log(a);
// };
//
// function f(y) {
//     let a = 2;
//     x(y);
// }
//
// f(3);

// let x = function () {
//     console.log(a)
// };
//
// function y(f) {
//     let a = 2;
//     f();
// }
//
// y(x);

// function foo() {
//     let x = 1;
//
//     function bar() {
//         console.log(x);
//     }
//
//     return bar;
// }
//
// let x = 2;
// let f = foo();
// f();

// function f(a,b,c) {
//     console.log(a);
// }
//
// f(1,2,3);
// f(1);
// f(1,2);
// f(undefined,2,3)

// function f(a, b) {
//     'use strict';
//     console.log(arguments[0]);
//     console.log(arguments[1]);
//     arguments[0] = 3;
//     arguments[1] = 4;
//     return a + b;
// }
//
// console.log(f(1, 2));

// var f = function(a, b) {
//     'use strict'; // 开启严格模式
//     arguments[0] = 3;
//     arguments[1] = 2;
//     return a + b;
// }
//
// console.log(f(1, 1));
//
// let f = function (a, b) {
//     console.log(arguments)
//     let args = Array.prototype.slice.call(arguments)
//     console.log(args)
//     return a + b;
// }
//
// f(1, 2)
//
// let a = {
//     length: 2,
//     '0': 1,
//     '1': 2
// }
//
// console.log(Array.prototype.slice.call(a));
// console.log(a);

// function Person(name) {
//     let _age;
//
//     function setAge(n) {
//         _age = n;
//     }
//
//     function getAge() {
//         return _age;
//     }
//
//     return {
//         name: name,
//         getAge: getAge,
//         setAge: setAge
//     }
// }
//
// let p1 = Person('ALice');
// p1.setAge(18);
// console.log(p1.getAge());
// console.log(p1);