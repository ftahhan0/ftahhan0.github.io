console.log('step #1');
console.log('halo, dunia!');
console.log('Ciao, mondo!');
console.log('Hola, mundo!');
console.log('step #2');
console.log("I'm awesome");
console.log('step #3');
let x;
console.log("the value of my variable x will be: undefined");
console.log(x)
x=10;
console.log("the value of my variable x will be: 10");
console.log(x);
console.log('step #4');
let y = "Hello"
console.log("the value of my string will be: Hello");
console.log(y);
y = "World";
console.log("the value of my string will be: World");
console.log(y);
console.log('step #5');
let roundedNumber = Math.round(7.25);
console.log(roundedNumber);
let z = 7.25
console.log(z)
let a = z
console.log(a)
let highestValue = z > a ? z : a;
console.log('The highest value is:', highestValue);
console.log('step #6');
let hobbies = ['football','basketball','volleyball'];
console.log(hobbies);
let favorite_animals = ['cats','rabbits'];
favorite_animals.push('baby pig');
console.log(favorite_animals);
console.log('step #7');
let myString = "this is a test"
console.log(myString)
let lengthOfMyString = myString.length;
console.log("Length of myString:", lengthOfMyString);
console.log('step #8');
let foo = 3;
let bar = "Hello";
let baz = true;
let qux = [1, 2, 3];
console.log("The value of foo is: " + foo);
console.log("The value of bar is: " + bar);
console.log("The value of baz is: " + baz);
console.log("The value of qux is: " + qux);
console.log("Type of foo: " + typeof foo);
console.log("Type of bar: " + typeof bar);
console.log("Type of baz: " + typeof baz);
console.log("Type of qux: " + typeof qux);
if (typeof foo === typeof bar && typeof bar === typeof baz && typeof baz === typeof qux) {
    console.log("SAME TYPE");
} else {
    console.log("Variables are of different types");
}
console.log('step #9')
x = 7
x = x % 3
y = 13
y = y % 7
z = 1/2
z = z % 1/4
console.log('step #10')
let multiplevalues = [42, "Hello", true, 3.14, null];
console.log("Value #1:", multiplevalues[0], "- Type:", typeof multiplevalues[0]); // Number
console.log("Value #2:", multiplevalues[1], "- Type:", typeof multiplevalues[1]); // String
console.log("Value #3:", multiplevalues[2], "- Type:", typeof multiplevalues[2]); // Boolean
console.log("Value #4:", multiplevalues[3], "- Type:", typeof multiplevalues[3]); // Number
console.log("Value #5:", multiplevalues[4], "- Type:", typeof multiplevalues[4]); // Null
let firstresult = 6 / 0;
let secondresult = 10 / 0;
console.log("Result 1:", firstresult);
console.log("Result 2:", secondresult);
if (firstresult === secondresult) {
    console.log("6/0 is equal to 10/0");
} else {
    console.log("6/0 is not equal to 10/0");
}





