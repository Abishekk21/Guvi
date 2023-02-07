1)
class Movie {
//SOLUTION FOR A AND B
    constructor(title= '', studio = '', rating = 'PG') {
       this.title = title;
       this.studio = studio;
       this.rating = rating;
    }
 //SOLUTION FOR C
    getPG(movies = [], rating = '') {
       return movies.filter((m) => m.rating === rating);
    }
}
 
// SOLUTION FOR D
const casionRoyaleMovie = new Movie('Casino Royale', 'Eon Productions', 'PG13');
const leo = new Movie('Leo', '7 screen', 'PG');
const vikram = new Movie('Vikram', 'RKFI', 'R');
const avatar = new Movie('Avatar: The water way', 'EROS', 'PG13');
const avengers = new Movie('The avengers: End Game', 'Paramount', 'PG');
const aehdilheimushkil = new Movie('aeh dil hei mushkil','yash', 'R');
const chichore = new Movie('chichore','yash','PG');
const premam = new Movie('premam','Nivin prod','PG13');
const charlie = new Movie('charlie','DQ pictures','PG');
 
const moviesArray = [casionRoyaleMovie, leo, vikram, avatar, avengers, aehdilheimushkil, chichore, premam, charlie];
 
//console.log(casionRoyaleMovie.getPG(moviesArray, 'R'));
console.log(casionRoyaleMovie.getPG(moviesArray, 'PG'));

  
3)
class Person {
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.getFullName()}`);
  }
}

const person = new Person("Joseph", "Vijay", 32, "male");
person.sayHello();
// Output: "Hello, my name is John Doe"


4)
class UberPrice {
  constructor(baseFare, perMinute, perMile) {
    this.baseFare = baseFare;
    this.perMinute = perMinute;
    this.perMile = perMile;
  }

  calculatePrice(minutes, miles) {
    return (this.baseFare + (this.perMinute * minutes) + (this.perMile * miles));
  }
}

const uberX = new UberPrice(5, 0.2, 1.5);
const price = uberX.calculatePrice(15, 5);
console.log(price); // 14.5

