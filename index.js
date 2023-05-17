let res1 = 2 * 2 + 2;

let res2 = 2 * (2 + 2);

const type1 = typeof 'fjfjfjfj';

console.log(typeof undefined);

console.log(typeof 123);

let sum1 = 10 + 10;
let minus1 = 10 - 10;
let multiply1 = 10 * 10;
let divide1 = 10 / 10;
let remainder = 7 % 3;
let toPowerOf3 = 2 ** 3;

let counter1 = 10;
counter1++;
console.log(counter1);

let num1 = 5;
num1 += 10;

let num3 = 5;
let num4 = 2;
console.log(num3 * num4);

let num5 = 12;
let num6 = 3;
console.log(num5 / num6);

console.log(num3 ** num4);

let notBool = null;
console.log(!!notBool);

let notNumber = 'dddfdf';
console.log(+notNumber);

let notString = 123456;
console.log(notString + '');

let num = 1;
num += 5;
num -= 2;
num *= 3;
num /= 4;

//console.log('fhfhfhfhfh');

//let userInput = prompt('Введите имя');
//let greetingText = 'Привет, ' + userInput;
//console.log(greetingText);
//
//let number1 = +prompt('Enter number1');
//let number2 = +prompt('Enter number2');
//let result = number1 + number2;

//const isNaNResult = isNaN(result);
//if (isNaNResult) {
//  alert('Incorrect data. Please try again');
//} else {
//  alert(result);
//}

const compare = function(num1, num2) {
  if (
    typeof num1 !== 'number' ||
    typeof num2 !== 'number' ||
    isNaN(num1 - num2)
  ){
    return null;
  }
  if (num1 === num2){
    return num2;
  }
  if (num1 > num2){
return num1;
} else {
  return num2;
}
};


//const userOrder = prompt('Choose your product \n1 - tea, \n2 - coffee, \n3 - juice');
 //switch (userOrder) {
  //case '1': {
    //alert ('You have ordered tea');
    //break;
  //}
  //case '2': {
//alert ('You have ordered coffee');
//break;
  //}
  //case '3': {
    //alert ('You have ordered juice');
    //break;
  //}
  //default: {
    //alert ('Incorrect product number');
  //}
 //}

// let counter = 0;
 //while (counter < 10){
  //if (counter % 2 === 0) {
    //console.log(counter);
  //}
  //counter++
 //}
 
//  let counter = 0;
//  while (counter < 10){
//   counter += 2;
//   console.log(counter);
//  }

// const cat = {
//   nickname: 'Damir',
//   age: '3',
//   breed: 'british',
//   color: 'grey',
//   weight: '5'
// }
//  console.log(cat.age);
//  cat.weight = cat.weight + 1;

// let passValue = 'biba1234';
// while(true) {
//   let password = prompt('Your password')
//   if (passValue === password);
//   alert ('Welcome');
//   break;
// }


// let a = 20;
// let b = 5;
// alert (`${a} /${b} =${a / b}`);

// const user = {
//   firstName: 'User',
//   lastName: 'Test',
//   age:29,
//   isMale:true
// }
// const greetUser = function(user){
//   return (`Hello, ${user.firstName} ${user.lastName}!`);
// }
  // const obj = {
  //   0: 'secret test',
  // };

  // console.log(obj[50-50]);

  // const task1 = [1 ,2 ,3];
  // task1.push (4, 5, 6);

  // const task2 = [1, 2, 3];
  // task2.unshift(4,5,6);


  // userNames.splice('aida', 'biba', 'kamilla', 'arai', 'nazima', 'molya');
  // userNames.push('kamilla');
  // const solution1 = userNames.slice(0,3);
  // const solution2 = userNames(0, userNames.length / 2);

  // const unsortedArr = [1, -10, 3, 5, 2];
  // unsortedArr.sort();

  // function saySomething (howToSay, whatToSay) {
  //   howToSay(whatToSay);
  // }
  // saySomething(alert, 'test phrase');
  // saySomething(console.log, 'test phrase');

  // function highOrderFunction(){
  //   const someFunc = function () {};
  //   return someFunc;
  // }

  function isEven(number, index, arr){
    if (number % 2 ===0){
      return true;
    }else{
      return false;
    }
  }


  const mouse1 = {
    nickname: 'Mickey'
  };

  // const userEmails = {
  //   0: 'mail1test.test',
  //   1: 'mail2test.test',
  //   2: 'mail3test.test',

  // }
  //  const userEmailsArr = new Array (
  //   'mail1test.test',
  //   'mail2test.test',
  //   'mail3test.test',
  //  );
  //  userEmailsArr[3] =  'mail3test.test';

  const userEmails = [
      'mail1test.test',
    'mail2test.test',
    'mail3test.test',
  ];

  // console.log(userEmails[2]);
  letCurrentLength = userEmails.push('mail4test.test');

  const lastEmail = userEmails.pop();

  const userNames = [
    'biba',
    'arai',
    'nazima',
    'molya'
  ];

  userNames.push('alua', 'roza', 'aika', 'kamilla');
  const lastName = userNames.pop();

  userEmails.unshift('newtest.test');

  const firstEmail = userEmails.shift();

  userEmails.push('mail5test.test', 'mai6test.test', 'mail7test.test');
  // userEmails.splice(3);
//  userEmails.splice(-4);
// const deletedEmails = userEmails.splice(-4);
// userEmails.splice(0,3);
userEmails.splice(1, 0, 'splice1.test' , 'splice2.test');


const userNumbers = [
  '2',
  '4',
  '14',
  '39'
];
// const evenNumbers = unsortedArr.filter(isEven);
// const isEvenNumbersInArr = unsortedArr.some(isEven);
// function isLargeNumbers (number){
//   return numbers > 5000;
// }
// const firstEvenNumber = unsortedArr.find(isEven);
// function isOdd(number) {
//   return number % 2 !==0;
// }

// function Phone(model, color, memory, price, hasNFC) {
// this.model = model;
// this.color = color;
// this.memory = memory;
// this.price = price;
// this.hasNFC = hasNFC;
// this.call = function (who){
//   return `You are calling ${who}`;
// };
// } 
// const phone1 = new Phone('Galaxy Note 530', 'white',256, 49999, true);
// const phone2 = new Phone('Test phone X', 'black',128, 29999, false);
// const arr1 = [1,2,3];
// const arr2 = ['4','5','6'];
// const phones = [];
// for (let i = 0; i < 200000; i++){
  
//   const newPhone = newPhone(
//     `Random Phone ${i+1}`, 
//     `color ${i + 1})`,
//     128,
//     29999,
//     hasNFC
//     );
//   phones.push
// }

// const ladder1 = new Ladder();
// const ladder2 = new Ladder();

// ladder1.up()
// ladder1.showStep() -> 2
// ladder1.down()
// ladder1.showStep() -> 1
// constladderProto = {
//   eat: function (food){
//     return `mouse eats ${food}`;
//   }
// };
// ladder1.__proto__=ladderProto;
// ladder2.__proto__=ladderProto;

// const ladder = {
//   currentStep: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--
//   }
// }

// function sum(num1, num2) {
//   if (
//     typeof num1 !=='number'  || 
//     typeof num2 !=='number' || 
//   isNaN(num1 - num2)
//   ){
//     // const error = newTypeError('You must provide numbers');
//     throw new TypeError('You must')
//   }
// return num1 + num2;
// }

// const str = new String('test string');
// console.log(str);







