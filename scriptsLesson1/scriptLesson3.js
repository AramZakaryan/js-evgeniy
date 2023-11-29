// //////// equivalent of all static method of promise
//
// const promise1 = new Promise((res, rej) => res("res1"))
// const promise2 = new Promise((res, rej) => res("res2"))
// const promise3 = new Promise((res, rej) => res("res3"))
//
//
// const p0 = Promise.resolve([])
//
//
// const p1 = p0.then(data => promise1.then(d => [...data, d]))
// const p2 = p1.then(data => promise2.then(d => [...data, d]))
// const p3 = p2.then(data => promise3.then(d => [...data, d]))
//
// p3.then(data => console.log(data))
//     .catch(err => console.log("eh", err))


function delayResolve(resolveArgument, ms) {
    return new Promise(res =>
        setTimeout(() => res(resolveArgument)
            , ms)
    )
}

function delayReject(rejectArgument, ms) {
    return new Promise((_,rej) =>
        setTimeout(() => rej(rejectArgument)
            , ms)
    )
}


const prom1 = delayResolve("res1", 2000)
// const prom2 = delayResolve("res2", 1000)
const prom2 = delayReject("err2", 1000)
const prom3 = delayResolve("res3", 10000)

Promise.all([prom1, prom2, prom3])
    .then(data => console.log("data of 'all': ", data))
    .catch(err=> console.log("err of 'all'",err))

Promise.race([prom1, prom2, prom3])
    .then(data => console.log("data of 'race': ", data))
    .catch(err=> console.log("err of 'race'",err))

Promise.any([prom1, prom2, prom3])
    .then(data => console.log("data of 'any': ", data))
    .catch(err=> console.log("err of 'any'",err))
