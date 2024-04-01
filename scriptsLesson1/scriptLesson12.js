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
// SuperCar.prototype.__proto__ = Car.prototype
//
//
// // superCar1.greet()
//
//
// console.log(SuperCar.call === Function.prototype.call)
//
//
// console.log(superCar1 instanceof Car)


////////// Object.create

// super-constructor-function
function Car(mark, speed) {
    this.mark = mark
    this.speed = speed
}

// super-constructor-function method
Car.prototype.greet = function () {
    console.log(`Hello ${this.mark} !`);
}

// super-constructor-function static method
Car.validateSpeed = function (speed) {
    if (speed > 0 && speed < 300) {
        console.log(speed + " is a valid speed")
    } else {
        console.log(speed + " is NOT a valid speed")
    }
}

// sub-constructor-function
function SuperCar(mark, speed, canFly) {
    Car.call(this, mark, speed)
    this.canFly = canFly
}

// ///// extends by Object.create
// SuperCar.prototype = Object.create(Car.prototype, {
//     constructor: {
//         value: SuperCar
//     }
// })

// instance of sub-constructor-function
const superCar1 = new SuperCar("mers", 150, true)

console.log(superCar1)
// console.log(superCar1 instanceof SuperCar)

// transition of static method from super-constructor-function to sub-constructor-function
SuperCar.__proto__=Car // !!!
SuperCar.validateSpeed(33)
// console.log(SuperCar.validateSpeed === Car.validateSpeed)

// transition of (ordinary) method from super-constructor-function to sub-constructor-function
SuperCar.prototype.__proto__ = Car.prototype // !!!

superCar1.greet()
console.log(superCar1.greet === Car.prototype.greet)

SuperCar.prototype.saySpeed = function () {
    console.log(this.speed)}

superCar1.saySpeed()
console.log(SuperCar.prototype.saySpeed)
console.log(Car.prototype.saySpeed)





// class Car {
//     constructor(mark, speed) {
//         this.mark = mark
//         this.speed = speed
//     }
//     greet  () {
//         // console.log(this.mark);
//         return this.prototype
//     }
// }
//
//
// const car1 = new Car("mers", 100)
//
// // console.log(car1)
// console.log(car1.greet())
//
//
//
//
//
//
//
//




