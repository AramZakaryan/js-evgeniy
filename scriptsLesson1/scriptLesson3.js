const promise1 = new Promise((res, rej) => res("res1"))
const promise2 = new Promise((res, rej) => res("res2"))
const promise3 = new Promise((res, rej) => res("res3"))


Promise.resolve([])
    .then(data => promise1.then(d => [...data, d]))
    .then(data => promise2.then(d => [...data, d]))
    .then(data => promise3.then(d => [...data, d]))
    .then(data => console.log(data))