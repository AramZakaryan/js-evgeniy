// // // //
// // // // console.log(this)
// // //
// // //
// // // const foo = ()=>{console.log(this)}
// // //
// // // foo()
// // //
// // //
// //
// // "use strict"
// //
// // const myObj = {
// //     key1: "value1",
// //     key2: "value2",
// //     goo
// // }
// //
// // function goo() {
// //     console.log(this)
// // }
// //
// // goo()
//
//
// const car = {
//     brand: "bmw",
//     showThis: () =>{
//         console.log(this)
//     }
// }
//
// car.showThis()


// const car1 = {
//     brand: "bmw",
//     showCar(color, year) {
//         console.log(`${this.brand} ${color} ${year}`)
//     }
// }
//
// const car2 = {
//     brand: "toyota",
// }
//
// car1.showCar.bind(car2)("black", 1977)
// car1.showCar.bind(car2, "black")(1977)
// car1.showCar.bind(car2, "black", 1977)()


// const car1 = {
//     brand: "bmw",
//     showCar() {
//         console.log(this.brand)
//     }
// }
//
// const car2 = {
//     brand: "toyota",
// }
//
// const car3 = {
//     brand: "tesla",
// }
//
// car1.showCar.bind(car2).bind(car3).call(car3)


// function curry(f) {
//
//     return function (a) {
//
//         return function (b) {
//
//             return f(a, b)
//         }
//     }
// }
//
//
// function sum(a, b) {
//     return a + b
// }
//
// const curriedSum = curry(sum)
//
// console.log(curriedSum(1)(2))

// const car1 = {
//     brand: "bmw",
//     showCar() {
//         console.log(this.brand)
//         return car1
//     }
// }
//
// const car2 = {
//     brand: "toyota"
// }
//
// const car3 = {
//     brand: "tesla"
// }
//
// console.log(car1.showCar.call(car2).call(car3))


function Car(brand) {
    // this ={}
    this.brand = brand
    // return this
    
}

const car1 = new Car("bmw")

const car2 = new Car("toyota")

console.log(car1)

console.log(car2)









