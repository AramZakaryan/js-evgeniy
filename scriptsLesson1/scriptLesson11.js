// function foo() {
//     const x = 10
//     return {
//         x: 20,
//         bar: () => {
//             console.log(this.x);
//         },
//         baz: function () {
//             console.log(this.x)
//         }
//     }
// }
//
// // // const obj1 = foo()
// // // obj1.bar() // --> undefined
// // // obj1.baz() // 20
//
// const obj2 = foo.call({x:30})
//
// console.log(obj2)


// function startEngine() {
//     console.log(this.mark+" starts, it's max speed is "+this.maxSpeed );
// }
//
// const car1 = {
//     mark: "bmw",
//     maxSpeed: 200,
//     startEngine: startEngine
// }
//
// const car2 = {
//     mark: "mers",
//     maxSpeed: 200,
//     startEngine: startEngine
// }
//
// car1.startEngine()
// car2.startEngine()


// class car {
//     constructor(props) {
//         super(props);
//
//     }
//
// }


// function startEngine() {
//     console.log(this.mark+" starts, it's max speed is "+this.maxSpeed );
// }
//
// class car {
//     constructor(mark, maxSpeed) {
//         this.mark = mark
//         this.maxSpeed = maxSpeed
//         this.startEngine = startEngine
//     }
// }
//
// const car1 = new car("pmw-m", 350)
//
// console.log(car1);


// function Car(mark, maxSpeed) {
//     this.mark = mark
//     this.maxSpeed = maxSpeed
//     // this.startEngine = startEngine
// }
//
// const car1 = new Car("pmw", 300)
//
// Car.prototype.startEngine = function () {
//     console.log("1. "+this.mark + " starts, it's max speed is " + this.maxSpeed)
// }
//
// car1.startEngine()
//
// Car.prototype.startEngine = function () {
//     console.log("2. "+this.mark + " starts, it's max speed is " + this.maxSpeed)
// }
//
// car1.startEngine()


// class Car {
//
//     constructor(mark, speed) {
//         this.mark = mark
//         this.speed = speed
//     }
//
//     tartEngine() {
//         console.log(this.mark + " starts, it's max speed is " + this.maxSpeed)
//     }
//    
// }
//
// const car1 = new Car("mersik", 280)
//
// car1.tartEngine()


// const car = {
//     mark: "bmw",
//     speed: 200,
//     start() {
//         console.log(`${this.mark} starts`);
//     }
// }
//
// car.start()


// const car = {
//     mark: "bmw",
//     speed: 200,
//     start: () => {
//         console.log(`${this.mark} starts`);
//     }
// }
//
// car.start()


// class Car {
//
//     constructor(mark, speed) {
//         this.mark = mark
//         this.speed = speed
//     }
//
//     start() {
//         console.log(`${this.mark} starts`);
//     }
//
// }
//
// const car = new Car("bmw", 280)
//
// car.start()


// class Car {
//
//     constructor(mark, speed) {
//         this.mark = mark
//         this.speed = speed
//     }
//
//     start ()  {
//         console.log(`${this.mark} starts`);
//     }
//     go = function () {
//         console.log(`${this.mark} goes`);
//     }
//     stop = () => {
//         console.log(`${this.mark} stops`);
//        
//     }
//
// }
//
// const car1 = new Car("bmw", 180)
// const car2 = new Car("mers", 280)
//
// console.log(car1.start===car2.start)
//
// console.log(car1.go===car2.go)
//
// console.log(car1.stop===car2.stop)

// class Car {
//     #mark
//     #speed
//     constructor(mark, speed) {
//         this.#mark = mark
//         this.#speed = speed
//     }
//     getSpeed () {
//         // Some additional logic in case of GETTING 'speed'
//         return this.#speed
//     }
//    
//     setSpeed (newSpeed) {
//         // Some additional logic in case of SETTING new 'speed'
//         this.#speed=newSpeed
//     }
//    
// }
//
// const car1 = new Car("bmw", 180)
//
// car1.setSpeed(200)
//
// console.log(car1.getSpeed());

//
// class Car {
//     #mark
//     #speed
//     constructor(mark, speed) {
//         this.#mark = mark
//         this.#speed = speed
//     }
//     get getSpeed () {
//         // Some additional logic in case of GETTING 'speed'
//         return this.#speed
//     }
//
//     set setSpeed (newSpeed) {
//         // Some additional logic in case of SETTING new 'speed'
//         this.#speed=newSpeed
//     }
//
// }
//
// const car1 = new Car("bmw", 180)
//
// car1.setSpeed=200
//
// console.log(car1.getSpeed);
//


class Car {
    constructor(mark, speed) {
        if (!speed) {
            this.mark = mark
        } else {
            this.mark = mark
            this.speed = speed
        }
    }

}


const car1 = new Car("bmw")

console.log(car1);








