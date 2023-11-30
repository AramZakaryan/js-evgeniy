// setTimeout(() => {
//         console.log('s1'); // 1
//     },
//     0)
//
//
// setTimeout(() => {
//     console.log('s2') // 2
// }, 1000)
//
// new Promise(function (res, rej) {
//     console.log('p1'); // 3
//     res();
//     console.log('p2'); // 4
// })
//     .then(() => console.log("p3")) // 5
//
//
// console.log("w1") // 6
//
// async function test1() {
//     console.log("a1"); // 7
//     await test2();
//     console.log("a2"); // 8
// }
//
// async function test2() {
//     console.log("a3"); // 9
// }
//
// test1();
//
// console.log("w2"); // 10
//
//
// // p1 p2 w1   a1 a3 w3     micro p3 a2            macro s1(0) s2(1000)
//
// // 3 4 6 7 9 10   5 8   1 2     
//
//
