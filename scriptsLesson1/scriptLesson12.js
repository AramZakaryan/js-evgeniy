// class Car {
//     constructor(mark, speed) {
//         this.mark = mark
//         this.speed = speed
//     }
//     speedInfo = function () {
//         console.log("Speed is " + this.speed)
//     }
// }
//
// class ColoredCar extends Car {
//     sayColor =function () {
//         console.log("blue")
//     }
//
// }
//
//
// function GGG () {
//     console.log("ésss")
// }
//
// const car1=new ColoredCar("mers", 100)
//
// console.log(Car.__proto__.__proto__===Object.prototype)
//
//
//
//
//
// class Car {
//     constructor(mark, age) {
//         this.mark=mark
//         this.age=age
//     }
//
//     greet () {
//         console.log(this.mark)
//     }
//
//     static validateSpeed = function (speed) {
//         if (speed> 0 && speed < 300) {
//             console.log(speed + " is a valid speed")
//         } else{
//             console.log(speed + " is NOT a valid speed")
//
//         }
//     }
// }
//
//
// console.log(Car.prototype.mark)
//
//
// const car1 = new Car ("mers", 134) 
// const car2 = new Car ("audi", 234)
// car1.greet()
// car2.greet()
// console.log(car1.greet===car2.greet)
//
//
// Car.validateSpeed = function (speed) {
//     if (speed> 0 && speed < 300) {
//         console.log(speed + " is a valid speed")
//     } else{
//         console.log(speed + " is NOT a valid speed")
//
//     }
// }
//
// class SuperCar extends Car{
//     constructor(mark, age, canFly) {
//         super(mark, age);
//         this.canFly = canFly
//     }
// }
//
//
// const superCar1 = new SuperCar("mers", 200, true)
//
// SuperCar.validateSpeed(45)
//
//
// // console.log(superCar1)

//
// function Car(mark, speed) {
//     this.mark = mark
//     this.speed = speed
// }
//
// Car.prototype.greet = function () {
//     console.log(this.mark);
// }
//
// Car.validateSpeed = function (speed) {
//     if (speed > 0 && speed < 300) {
//         console.log(speed + " is a valid speed")
//     } else {
//         console.log(speed + " is NOT a valid speed")
//
//     }
// }
//
// function SuperCar(mark, speed, canFly) {
//
//     Car.call(this, mark, speed)
//
//     this.canFly = canFly
//    
// }
//
//
// const superCar1 = new SuperCar("mers", 150, true)
//
//
// console.log(superCar1)
//
//
// console.log(superCar1 instanceof SuperCar)
//
//
// // SuperCar.__proto__=Car
//
//
// // SuperCar.validateSpeed(33)
//
//
// SuperCar.prototype.__proto__=Car.prototype
//
//
// // superCar1.greet()
//
//
// console.log(SuperCar.call===Function.prototype.call)
//
//
// console.log(superCar1 instanceof Car)


class Car {
    constructor(mark, speed) {
        this.mark = mark
        this.speed = speed
    }
    greet  () {
        // console.log(this.mark);
        return this.prototype
    }
}


const car1 = new Car("mers", 100)

// console.log(car1)
console.log(car1.greet())












