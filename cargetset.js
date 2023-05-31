class Car {
  constructor (nameCar, maxSpeed, currentSpeed){
    this._name = nameCar;
    this._maxSpeed = maxSpeed;
    this._currentSpeed = currentSpeed;
  }
  get nameCar(){
    return this._nameCar;
  }
  set nameCar (nameCar){
    this._nameCar = nameCar;
  }
  get maxSpeed (){
    return this._maxSpeed;
  }
  set maxSpeed (maxSpeed){
    if (maxSpeed > 0){
      this._maxSpeed = maxSpeed;
    }
  }
  get currentSpeed(){
    return this._currentSpeed;
  }
  fastSpeed (speed){
    if (speed > 0){
      return(`fastSpeed ${speed}`);
    } 
  }
  brakeCar() {
    this._currentSpeed = 0;
    return('Stop');
  }
}










