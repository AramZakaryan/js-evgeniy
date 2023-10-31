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


// Promise.reject("reject1")
//     .catch((t) =>t+"catch1") //rejec1catch1
//     .catch((t) =>t+"catch2")
//     .then((t) =>t+"than1") //rejec1catch1than1
//     .finally((t) =>t+"finally")
//     .then((t) =>console.log(t)) // rejec1catch1than1


const myPromise = new Promise(
    (res, rej) => {
        setTimeout(() => {
                let result = 1
                console.log(result)
                res(result)
            }
            , 2000
        )

    }
)
    .then((arg2) => {
            new Promise(
                (res, rej) => {
                    setTimeout(() => {
                            let result2 = ++arg2
                            console.log(result2)
                            res(result2)
                        }
                        , 2000
                    )

                }
            )

        }
    )