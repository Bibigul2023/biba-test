// class Car {
//   constructor (nameCar, maxSpeed, currentSpeed){
//     this.name = nameCar;
//     this.maxSpeed = maxSpeed;
//     this.currentSpeed = currentSpeed;
//   }
//   get nameCar(){
//     return this._nameCar;
//   }
//   set nameCar (nameCar){
//     this._nameCar = nameCar;
//   }
//   get maxSpeed (){
//     return this._maxSpeed;
//   }
//   set maxSpeed (maxSpeed){
//     if (maxSpeed > 0){
//       this._maxSpeed = maxSpeed;
//     }
//   }
//   get currentSpeed(){
//     return this._currentSpeed;
//   }
//   fastSpeed (speed){
//     if (speed > 0){
//       return(`fastSpeed ${speed}`);
//     } 
//   }
//   brakeCar() {
//     this._currentSpeed = 0;
//     return('Stop');
//   }
// }



// class Circle {
//   constructor(radius) {
//     this._radius = radius;
//   }
//   get radius() {
//     return this._radius;
//   }
//   set radius(radius) {
//     if (radius >= 0) {
//       this._radius = radius;
//     }
//   }
//   getArea() {
//     const area = Math.PI * Math.pow(this._radius, 2);
//     return area.toFixed(2); 
//   }
// }
// const circle1 = new Circle(5);
// function getFigureArea (figure){
//   if(figure instanceof Figure){
//     return figure.getArea();
//   }
//   throw new TypeError ('You must give proper figure')
// }


class Animal {
  constructor(name){
    this.name = name;
    this.isHungry = false;
  }
  move (){
    console.log(`Animal ${this.name}is Moving`);
  }
  eat() {
    console.log(`Animal ${this.name}is eating food`);
    this.isHungry = false;
  }
  speak() {
    console.log(`Animal ${this.name}making noices`);
  }
}
class Cat extends Animal {
  constructor (name){
    super(name);
  }
  move(){
    console.log(`Cat ${this.name}is runnig. Poor vase`);
  }
  eat (){
    console.log(`Cat ${this.name}is eating mice`);
  }
  speak(){
    console.log(`Cat ${this.name}is meowing`);
  }
}
class Dog extends Animal {
  constructor(name){
    super(name);
  }
  move(){
    console.log(`...`);
  }
}









