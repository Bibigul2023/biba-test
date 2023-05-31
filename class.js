'use strict';
class User {
  #firstName;
  constructor(firstName, lastName){
    this._firstName = firstName;
    this._lastName = lastName;
  }
  get firstName () {
    return this.#firstname;
  }
  set firstName (newName) {
    if(typeof newName !== 'string'){
      throw new TypeError ('Name must be string');
    }
    this.#firstName = newName;
  }
  get fullName() {
    return `${this.firstName} ${this.Surname}`;
  }
  set fullName (fullNameString){
    if(typeof fullName !== 'string'){
      throw new TypeError ('Name must be string');
  }
  const nameArr = fullNameString.split('');
  this._firstName = namesArr[0];
  this._lastName = namesArr[1];
}
id = 0;
}


class Moderator extends User {
  constructor (login, password, age, firstName, lastName,permissions){
    super(login, password, firstName, lastName, age);
    this.permissions = permissions;
  }
  banUser(User){
    console.log(`user ${user} ban`);
  }
}