// const myPromise1 = new Promise((res, rej) => {
//     setTimeout(() => {
//             let result = 100
//              res( result)
//         }
//         , ~~(1000 + Math.random() * 2000))
// })
//
// const myPromise2 = new Promise((res, rej) => {
//     setTimeout(() => {
//             let result = 200
//             res( result)
//         }
//         , ~~(1000 + Math.random() * 2000))
// })
//
// const myPromise3 = new Promise((res, rej) => {
//     setTimeout(() => {
//             let result = 300
//             res( result)
//         }
//         , ~~(1000 + Math.random() * 2000))
// })
//
//
// Promise.any([myPromise1,myPromise2,myPromise3]).then((data)=>{
//     console.log(data)})



// function bigFunc  () {
//
//     let count = 0
//
//     function smallFunc () {
//
//         count++
//         console.log(count)
//     }
//
//     return smallFunc
//
// }
//
//
// const outFunc = bigFunc()
//
// outFunc()
// outFunc()
// outFunc()


console.log("start")

setTimeout(function(){
    console.log("inside Timeout")
}
,0)

console.log("finish")

