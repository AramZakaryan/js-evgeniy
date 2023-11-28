//////// equivalent of all static method of promise

const promise1 = new Promise((res, rej) => res("res1"))
const promise2 = new Promise((res, rej) => res("res2"))
const promise3 = new Promise((res, rej) => res("res3"))


const p0 = Promise.resolve([])


const p1 = p0.then(data => promise1.then(d => [...data, d]))
const p2 = p1.then(data => promise2.then(d => [...data, d]))
const p3 = p2.then(data => promise3.then(d => [...data, d]))

p3.then(data => console.log(data))
    .catch(err => console.log("eh", err))


