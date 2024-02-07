// var a = 1+2
// console.log(a)

// console.log(a);
// var a = 1;

// let even = 4;
// let ifEven;
//
// ifEven = even % 2 === 0;
//
// console.log(ifEven);

// let i = 0;
//
// while(i < 100) {
//     console.log('i 当前为：' + i);
//     i++;
//     if (i === 10) break;
// }
//
// console.log(i)

let i = 0;

while (i < 100){
    i++;
    if (i % 2 === 0) continue;
    console.log('i 当前为：' + i);
}