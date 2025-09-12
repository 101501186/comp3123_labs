// Lab 2 - comp3123

// #1
let gretter = (myArray) => {
    let greetText = 'Hello';

    for(const name of myArray) {
        console.log(`${greetText} ${name}`);
    }
};
gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);
console.log("---------------------------");

// #2
function capitalize(string){
    const [first, ...rest] = string;
    return first.toUpperCase() + rest.join('').toLowerCase();
}
console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));
console.log("----------------------------");

// #3
const colors = ['red', 'green', 'blue'];
const capitalizedColors = colors.map(color => capitalize(color));
console.log(capitalizedColors);
console.log("----------------------------");

// #4
var values = [1, 60, 34, 30, 20, 5, 10];
const filterLessThan20 = values.filter(num => num < 20);
console.log(filterLessThan20);
console.log("-----------------------------");

// #5
var array = [1, 2 , 3 , 4, 5];
const calculateSum = array.reduce((acc, curr) => acc + curr);
const calculateProduct = array.reduce((acc, curr) => acc * curr);
console.log(calculateSum);
console.log(calculateProduct);
console.log("-----------------------------");

// #6
class Car{
    constructor(model, year){
        this.model = model;
        this.year = year;
    }

    details(){
        return `Model: ${this.model} Engine ${this.year}`;
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }

    info() {
        return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
    }
}

const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());
const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());