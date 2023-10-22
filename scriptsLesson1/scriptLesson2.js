// const myPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//             res()
//         }
//         , 1000
//     )
// })
//
// myPromise
//     .then(=> {
//         console.log("lava")
//         res()
//     })


Promise.reject("reject1")
    .catch((t) =>t+"catch1") //rejec1catch1
    .catch((t) =>t+"catch2")
    .then((t) =>t+"than1") //rejec1catch1than1
    .finally((t) =>t+"finally")
    .then((t) =>console.log(t)) // rejec1catch1than1
