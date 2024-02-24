// // // // //
// // // // // console.log(this)
// // // //
// // // //
// // // // const foo = ()=>{console.log(this)}
// // // //
// // // // foo()
// // // //
// // // //
// // //
// // // "use strict"
// // //
// // // const myObj = {
// // //     key1: "value1",
// // //     key2: "value2",
// // //     goo
// // // }
// // //
// // // function goo() {
// // //     console.log(this)
// // // }
// // //
// // // goo()
// //
// //
// // const car = {
// //     brand: "bmw",
// //     showThis: () =>{
// //         console.log(this)
// //     }
// // }
// //
// // car.showThis()
//
//
// // const car1 = {
// //     brand: "bmw",
// //     showCar(color, year) {
// //         console.log(`${this.brand} ${color} ${year}`)
// //     }
// // }
// //
// // const car2 = {
// //     brand: "toyota",
// // }
// //
// // car1.showCar.bind(car2)("black", 1977)
// // car1.showCar.bind(car2, "black")(1977)
// // car1.showCar.bind(car2, "black", 1977)()
//
//
// // const car1 = {
// //     brand: "bmw",
// //     showCar() {
// //         console.log(this.brand)
// //     }
// // }
// //
// // const car2 = {
// //     brand: "toyota",
// // }
// //
// // const car3 = {
// //     brand: "tesla",
// // }
// //
// // car1.showCar.bind(car2).bind(car3).call(car3)
//
//
// // function curry(f) {
// //
// //     return function (a) {
// //
// //         return function (b) {
// //
// //             return f(a, b)
// //         }
// //     }
// // }
// //
// //
// // function sum(a, b) {
// //     return a + b
// // }
// //
// // const curriedSum = curry(sum)
// //
// // console.log(curriedSum(1)(2))
//
// // const car1 = {
// //     brand: "bmw",
// //     showCar() {
// //         console.log(this.brand)
// //         return car1
// //     }
// // }
// //
// // const car2 = {
// //     brand: "toyota"
// // }
// //
// // const car3 = {
// //     brand: "tesla"
// // }
// //
// // console.log(car1.showCar.call(car2).call(car3))
//
//
// // function showBrand () {
// //     console.log(this.brand)
// // }
// //
// //
// // function Car(brand) {
// //     this.brand = brand
// //     this.showBrand = showBrand
// // }
// //
// // const car1 = new Car("bmw")
// //
// // const car2 = new Car("toyota")
// //
// // car1.showBrand()
// //
// // car2.showBrand()
// //
// //
// // console.log(car1.showBrand===car2.showBrand)
//
//
// //
// // function Car(brand) {
// //     this.brand = brand
// // }
// //
// // Car.prototype.showBrand = function () {
// //     console.log(this.brand)
// // }
// //
// // const car1 = new Car("bmw")
// //
// // const car2 = new Car("toyota")
// //
// // car1.showBrand()
// //
// // car2.showBrand()
// //
// //
// // console.log(car1.showBrand===car2.showBrand)
// //
//
//
// // const car = {
// //     brand: "bmw",
// //     showBrand() {
// //         console.log(`It's a ${this.brand}`)
// //     }
// // }
// //
// // let showBrandCB = car.showBrand.bind(car)
// //
// // setTimeout(()=>showBrandCB()
// //     , 1000)
// //
// // setTimeout(()=>{car.brand="toyota"}
// // ,500)
//
//
// // let user = {
// //     firstName: "Вася",
// //     sayHi() {
// //         console.log(`Привет, ${this.firstName}!`);
// //     }
// // };
// //
// // let sayHi = user.sayHi.bind(user); // (*)
// //
// // sayHi(); // Привет, Вася!
// //
// // setTimeout(sayHi, 1000); // Привет, Вася!
// // setTimeout(()=>{user.firstName="Jora"}, 500); // Привет, Вася!
//
//
// // console.time("timer1")
// //
// //     for (let i=0; i<100000000; i++) {
// //     }
// //
// // console.timeEnd("timer1")
// //
// //
//
// //
// //  const car = {
// //     brand: "bmw",
// //     showBrand() {
// //         console.log(`It's a ${this.brand}`)
// //     }
// // }
// //
// //
// //
// // setTimeout(()=> {
// //         car.showBrand()
// //         console.log(this)
// //     }
// //     , 1000)
// //
// // setTimeout(()=>{car.brand="toyota"}
// // ,500)
//
//
// const car = {
//     brand: "bmw",
//     model: ["320", "z3", "x5"],
//     showModels() {
//         this.model.forEach(function (m) {
//             console.log(`${this.brand} has these models: ${m}`)
//         },this)
//     }
// }
//
// car.showModels()


"use strict"


let a = "aaa" +1



console.log(a)