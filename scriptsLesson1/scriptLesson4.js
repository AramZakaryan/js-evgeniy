// // setTimeout(() => {
// //         console.log('s1'); // 1
// //     },
// //     0)
// //
// //
// // setTimeout(() => {
// //     console.log('s2') // 2
// // }, 1000)
// //
// // new Promise(function (res, rej) {
// //     console.log('p1'); // 3
// //     res();
// //     console.log('p2'); // 4
// // })
// //     .then(() => console.log("p3")) // 5
// //
// //
// // console.log("w1") // 6
// //
// // async function test1() {
// //     console.log("a1"); // 7
// //     await test2();
// //     console.log("a2"); // 8
// // }
// //
// // async function test2() {
// //     console.log("a3"); // 9
// // }
// //
// // test1();
// //
// // console.log("w2"); // 10
// //
// //
// // // p1 p2 w1   a1 a3 w3     micro p3 a2            macro s1(0) s2(1000)
// //
// // // 3 4 6 7 9 10   5 8   1 2     
// //
// //
//
//
// const myPromise = (delay) => {
//     return new Promise((res, rej) => {
//             setTimeout(res, delay)
//         }
//     )
// }
//
// setTimeout(() => {
//     console.log("in setTimeout 1 (1)")
// }, 1000)
//
//
// myPromise(1000).then(() => 
//     console.log("in Promise 1 (2)"));
//
// setTimeout(() => {
//     console.log("in setTimeout 2 (3)");
// }, 1000) // version1: 100ms // version2 and version3: 1000ms
//
//
// myPromise(1000).then(() =>
//     console.log("in Promise 2 (4)")); // version1 and version: 2000ms // version3: 1000ms
//
// // version1: 3(s2)[100ms] (1)s1[1000ms] (2)p1(1000ms) (4)[p2](ms2000)
//
// // version2:   (1)s1[1000] (2)p1[1000ms] (3)s2[1000ms] (4)p2[2000ms]     
//
// // version3: (1)s1[1000] (2)p1[1000ms] (3)s2[1000ms] (4)p2[2000ms]
//
//


console.log(1);

setTimeout(() => {
    console.log(2);
    Promise.resolve().then(() => console.log(3))
})

new Promise((res, rej) => {
    console.log(4);
    res(5)
})
    .then((data) => {
        console.log(data);
        Promise.resolve()
            .then(() => {
                console.log(6);
            })
            .then(() => {
                console.log(7);
                setTimeout(() => {
                    console.log(8);
                }, 0)
            })
    })

setTimeout(() => {
    console.log(9);
})

console.log(10);

// 1 4 10 5 6 7 2(Oms) 3(0ms)micro 9(0ms) 8(0ms)