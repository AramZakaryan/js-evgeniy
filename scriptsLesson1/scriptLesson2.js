const myPromise = new Promise((res, rej) => {
    setTimeout(() => {
            res()
        }
        , 2000
    )
})

myPromise
    .then(() => {
        console.log("cucu1")
        return "cucu"
    })
    .then((data) => {
        console.log("cucu2", data)
    })


