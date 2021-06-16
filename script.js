let person1 = {
  name: "John",
  greeting: function () {
    console.log(`Hi, my name is ${this.name}!`);
  },
};
let person2 = {
  name: "Paul",
  greeting: function () {
    console.log(`Hi, my name is ${this.name}!`);
  },
};
let person3 = {
  name: "Bill",
  greeting: function () {
    console.log(`Hi, my name is ${this.name}!`);
  },
};
let person4 = {
  name: "Tim",
  greeting: function () {
    console.log(`Hi, my name is ${this.name}!`);
  },
};
let person5 = {
  name: "Joe",
  greeting: function () {
    console.log(`Hi, my name is ${this.name}!`);
  },
};
person1.greeting();
person2.greeting();
person3.greeting();
person4.greeting();
person5.greeting();

function Person (name, age, city){
    this.name= name;
    this.age= age;
    this.city= city;
    
}
let firstPerson=new Person("John", 56, "Georgia");
let secondPerson=new Person("Paul", 50, "Kentucky");
let thirdPerson=new Person("Bill", 20, "California");
let fourthPerson=new Person("Tim", 34, "New York");
let fifthPerson=new Person("Joe", 48, "Alabama");
Person.prototype.personalGreeting=function(){console.log(`Hi, my name is ${this.name}, I am ${this.age} years old and I live in ${this.city}!`)};
firstPerson.personalGreeting();
secondPerson.personalGreeting();
thirdPerson.personalGreeting();
fourthPerson.personalGreeting();
fifthPerson.personalGreeting();

//  class Person{
//      constructor(name, age, city){
//         this.name= name;
//         this.age= age;
//         this.city= city;
//      }
//  }
// class Vehicle{
//     constructor(manufacturer, numberofwheels){
//   this.manufacturer= manufacturer;
//   this.numberofwheels= numberofwheels;
//     }
//     let vehicularGreeting = function() {console.log(`I am a ${this.manufacturer} ${this.make}, I have ${this.numberofdoors} and I have ${this.numberofwheels} number of wheels!`)}
// }
// vehicularGreeting();