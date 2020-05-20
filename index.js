// Import stylesheets
import "./style.css";































// Write Javascript code!
const baslik = document.getElementById("app");
baslik.innerHTML = `<h1>JS Starter</h1>`;































/* weak && dynamic variables */
var v1 = "Firebase Meetup Uygulaması";

let v2 = "Firebase";

const v3 = "Bu değişken değiştirilemez.";































function myFunction($parameter = "Youtube") {
  console.log("Merhaba", $parameter);
}

let myFunction2 = ($parameter = "Youtube") =>
  console.log("Merhaba", $parameter);

//myFunction("Emre");
//myFunction2();































let person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};


//console.log(person);
//console.log(person.firstName+" "+person.lastName);
//console.log(person.fullName());































let cars = ["Audi", "Volvo", "BMW"];

for (let i = 0; i < cars.length; i++) {
  //console.log(cars[i]);
}

for (let car of cars) {
  //console.log(car);
}

cars.forEach(element => console.log(element));
































const button = document.getElementById('button');
button.addEventListener("click", function(){
  alert("buraya tıkladınız.");
});
/*
*/
