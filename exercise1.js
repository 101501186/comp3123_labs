// Lab 1 - comp3123

// #1
function capitalization(str) {
    return str
    .split(" ")
    .map(word => word[0]?.toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalization("my dog is friendly"));
console.log("-------------------");

// #2
function largest(x, y, z) {
    let largest;

    if(x > y && x > z) {
        largest = x;
    } else if(y > x && y > z) {
        largest = y;
    } else {
        largest = z;
    }
    console.log(`The numbers are: ${x}, ${y}, ${z}`);
    console.log(`The largest out of these 3 numbers is: ${largest}`);
}
largest(300, 700, 400);
largest(5, 4, 3);
console.log("---------------------");

// #3
function move(str) {
    if(str.length < 3) {
        return str;
    }
    let lastThree = str.slice(-3);
    let rest = str.slice(0, -3);
    return lastThree + rest;
}
console.log(move("Pirate"));
console.log(move("yo"));
console.log(move("Happy"));
console.log("----------------------");

// #4
function angleType(angle) {
    if (angle < 90 && angle >= 0) {
        return "Acute angle";
    } else if(angle === 90){
        return "Right angle";
    } else if(angle > 90 && angle < 180){
        return "Obtuse angle";
    } else if (angle === 180){
        return "Straight angle";
    } else {
        return "Invalid angle";
    }
}
console.log(angleType(50));
console.log(angleType(180));
console.log(angleType(90));
console.log(angleType(130));
console.log(angleType(200));
