//homework step 4
//step 1.1
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
//step 1.2
console.log(${myString.length});
//step 1.3
myString = myString.replace(/,/g, ' ');
//step 1.4
console.log(myString);
//step 2
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
//step 2.3
favoriteAnimals.push ('turtle');
//step 2.2
console.log(favoriteAnimals);
//step 2.3
favoriteAnimals.splice(1, 0, 'meerkat');
//step 2.4
console.log("Jim's favorite animal 'meerkat' has been added after 'blowfish' and before 'capricorn'.");
//step 2.5
console.log(favoriteAnimals);
//step 2.6
console.log(${favoriteAnimals.length});
//step 2.7
favoriteAnimals.splice(3, 1);
//step 2.8
console.log(favoriteAnimals);
//step 2.9
let indexOfMeerkat = favoriteAnimals.indexOf("meerkat");
//step 2.10
console.log("The item you are looking for is at index: " + indexOfMeerkat);
// More JavaScript :tada:
//1.
function sumOfThreeNumbers(a, b, c) {
    return a + b + c;
}
let result = sumOfThreeNumbers(13, 27, 39);
console.log(result);
//2.
function colorCar(color) {
    console.log("A " + color + " car");
}
colorCar("Purple");
//3.
 let carModel = {
    brand: "Mercedes",
    model: "CLK500",
    year: 2018,
    color: "Silver",
    fuelType: "Gasoline",
};
// Function that prints out properties and values of an object
function printCarDetails(hk) {
    for (let key in hk) {
        if (hk.hasOwnProperty(key)) {
            console.log(key + ": " + hk[key]);
        }
    }
}
// Call the function with the carModel object
printCarDetails(carModel);
//4.
function vehicleType(color, code) {
    if (code === 1) {
        console.log(A ${color} car);
    } else if (code === 2) {
        console.log(A ${color} motorbike);
    } else {
        console.log("Unknown vehicle code");
    }
}
// Example usage:
vehicleType("blue", 1); 
vehicleType("red", 2); 
vehicleType("green", 3); 
//5.
console.log(3 === 3 ? "yes" : "no");
//6.
function vehicle(code, age) {
    const vehicleTypes = ['car', 'motorbike', 'caravan', 'bike'];
    const type = vehicleTypes[code - 1]; 
    if (age > 0) {
        console.log(A used ${type});
    } else {
        console.log(A new ${type});
    }
}
 
vehicle(1, 5); 
vehicle(4, 0); 
//7.
let vehicles = ["Car", "Motorbike", "Pickup", "Caravan", "Bike", "Truck"];
//8.
vehicles.splice (2, 1)
let vehiclesList = ['car', 'motorbike', 'caravan', 'bike'];
// Get the third element from the list
let thirdElement = vehiclesList[2];
console.log(thirdElement);
 //9.
function vehicle(color,typeOfVehicle, age){
  if (age >= 3){
    console.log("a "+ color +" used " + vehicles[typeOfVehicle]);
                }
   else {
    console.log("a "+ color +" new " + vehicles[typeOfVehicle]);
  }
}
//10.
function advertiseGarage() {
    let advertisement = "Amazing Joe's Garage, we service ";
    for (let i = 0; i < vehiclesList.length; i++) {
        advertisement += vehiclesList[i];
        if (i < vehiclesList.length - 2) {
            advertisement += ', ';
        } else if (i === vehiclesList.length - 2) {
            advertisement += ' and ';
        }
    }
    advertisement += '.';
    console.log(advertisement);
}
// Example usage:
advertiseGarage();
// Output: Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.
 
//12.
 let Object = {};
//13.
let moduleTeachers = {
    teacher1: {name :"Tommy"},
    teacher2: {name :"Seif"},
    teacher3: {name :"Sahin"},
};
//14.
moduleTeachers.teacher1.languages = ['HTML', 'CSS'];
moduleTeachers.teacher2.languages = ['CSS'];
moduleTeachers.teacher3.languages = ['JavaScript'];
console.log(moduleTeachers);
Object.thisobject = moduleTeachers;
console.log(Object);
//15.
let x = [1,2,3];
let y = [1,2,3];
let z = y;
console.log(x == y);
console.log(x === y);
console.log(z == y);
console.log(z == x);
//the arrays themselves are different in value.
console.log(x[0,1,2] == y[0,1,2]);
console.log(x[0,1,2] === y[0,1,2]);
console.log(z == y);
console.log(z === y);
console.log(z == x[0,1,2]);
// As shown above the values of the items inside of the arrays are actually equal. However the arrays have different identities even though they contain the same values. that can't be said for z because it refers to an existing array which doesn't make it an array in the first place!
//16.
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
console.log(o1)
console.log(o2)
console.log(o3)
//change o2 to baz
o2.foo = "baz";
console.log(o2); // { foo: "baz" }
console.log(o3); // { foo: "baz" }
// Changing o1
o1.foo = "qux";
console.log(o1); // { foo: "qux" }
console.log(o3); // { foo: "baz" }
//17.
let bar = 42;
typeof bar;
typeof typeof bar;
//it looks like typeof can be used for giving only two results, the value inside the string, and the string itself
typeof typeof typeof typeof bar;
bar = [42];
typeof bar;
typeof typeof bar;
//in the end what goes inside of a string changes the value of typeof result.