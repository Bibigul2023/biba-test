function Car () {
  this.manufacturer = 'Korea',
  this.model = 'Kia';
  this.color = 'Black';
  this.releaseYear = '2022';
  this.speed = 0;
  this.maxSpeed = 180;
}
  const carProto = {
    plusSpeed : function () {
      this.speed++;
    },
    slowlySpeed : function () {
      this.maxSpeed--;
    },
    stopSpeed : function () {
      this.speed = 0;
    },
  };
Car.prototype = carProto;
const car1 = new Car();
car1.plusSpeed()
car1.slowlySpeed()
car1.stopSpeed()