/*let js ='amazing';
console.log(40+3);

console.log('Minh');
let firstName = 'Mai';

console.log(firstName);
console.log(firstName);
console.log(firstName);

let myDreamJob = 'Software Engineer';
console.log(myDreamJob);

let myMajoir = 'IT';
console.log(myMajoir);*/
// Boolean//
/*
let javscriptIsFun = true;
console.log(javscriptIsFun);
console.log(typeof true);
console.log(typeof javscriptIsFun);
console.log(typeof 18);
console.log(typeof 'Minh');

javscriptIsFun = 'YES!';
console.log(typeof javscriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2003;
console.log( typeof year);

//let.const and var//
let age = 30;
age = 'thirty';
const birhDay = 2003;*/
//Math operator//
/*const now = 2021;
const minhAge = now - 2003;
const nguyenAge = now - 2002;
const manhAge = now - 2001;
console.log(minhAge, nguyenAge, manhAge);
console.log(minhAge * 2, nguyenAge / 2, manhAge **2);
// mangAge ** 2 means manhAge^2//
//plus operator//
/*const firtsName = 'Dinh';
const lastName = 'Minh';
console.log(firtsName + ' ' + lastName);
// the ' ' string is considered space
// assignemt operator//
let x = 10 + 5; // 15
x += 10; // x=x+10=25
x *= 4; // x=x*4=100
x ++; // x=x+1
x --; // x=x-1
x --;
console.log(x);

//Comparision Operator//
console.log(nguyenAge > minhAge > manhAge);// > < >= <=
console.log(nguyenAge >= 18);
const isFullAge = nguyenAge >= 18;
console.log(now - 2003 > now - 2001);*/
// Precedence operator //
/*console.log(now - 2003 > now - 2001);
let x, y;
x = y = 10-5;//x=y=5
console.log(x, y);
const averageAge = (minhAge + nguyenAge) / 2;
console.log(averageAge);*/

//Strings and template literals//
/*const firstName = 'Minh';
const job = 'student';
const birthYear = 2003;
const year = 2021;

const minh = " I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job;
console.log(minh);

const minhTwo = `I'm ${firstName} a ${year - birthYear} years old ${job}`;
console.log(minhTwo);
console.log(`Hello I'm MinhXiro`);*/

/*console.log(`Troi Dat Dung Hoa \n\ Van Vat \n\ Sinh Soi`);
console.log(`Troi Dat 
Dung Hoa
Van Vat
Sinh Soi`);*/

// Ì/else statements //
/*const age = 17;

if(age >= 18) {
  console.log(`Can take 
  the driver 
  license`);
}
else {
    const yearsLeft = 18 - age;
    console.log(`Need ${yearsLeft} year to take the license`);
}

const minhAge = 18;
const nguyenAge = 19;
if(minhAge >= nguyenAge) {
    console.log(`Minh la anh`);
}
else {
    let ageRange = nguyenAge - minhAge + 1;
    console.log(`Can ${ageRange} nam de Minh lam anh`);
}

const birthYear =2023;

if(birthYear <= 2000) {
     let century = 20;
     console.log(century);
}
else {
    if(birthYear >= 2199) {
        let century = 22;
        console.log(century);
    }
    else {
        if(birthYear < 2199) {
            let century = 21;
            console.log(century);
        }
    
    }
    
} */
 //Type conversion //
/*const inputYear = '1991';
console.log(Number(inputYear) + 18);
console.log(Number('Minh'));
console.log(String(18));
// type coercion //
console.log("I'm " + 23 + " years old" );
console.log('23' - '10' - 3);
console.log('23' * 2);
let n = '1' + 1; // '11'
n = n - 1; // 11 - 1
console.log(n);
console.log('10' + '4');*/

//5 falsy values: 0, '', undefined, null, NaN//
/*console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('DinhMinh'));
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log("Don't spend it all");
}
else {
    console.log("You should get a job");
}

let height;
if (height) {
    console.log("Height is defined");
}
else {
     height = 180;
     console.log(`${height} is the height`);
}*/
// Eqyuality operator//
/*const age = 18;
if (age === 18) console.log("He's an adult(strict)");
if(age == 18) console.log("He's an adult(loose)");

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
if(favorite === 89) { // '89' == 89
    console.log('Great');
} 
else if(favorite === 7) {
    console.log('Cool!');
}
else {
    console.log('Number is not 89 or 7');
}

if(favorite !== 89) console.log('The number is not 89');*/
// Boolean Logic //
// Logical Operator //
/*const hasDriverLicense = true; //A
const hasGoodVision = false; //B
const isTired = true; // C

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense, !hasGoodVision);

const ableToDribe = hasDriverLicense && hasGoodVision;
/*if(ableToDribe) {
    console.log("I'm able to drive");
}
else if(ableToDribe && isTired) {
    console.log('I should take test for each department')
}
else if(!hasDriverLicense || hasDriverLicense) {
    console.log('Cool');
} */
/*console.log(hasDriverLicense && hasGoodVision && isTired);
console.log(hasDriverLicense || hasGoodVision || isTired);
/*if(ableToDribe) {
    console.log("I'm able to drive");
}
else {
    console.log('Someone have to drive')
} */
/*const canDrive = hasDriverLicense && hasGoodVision && !isTired; // !isTired = not tired it is true when the tired is false
if(canDrive) {
    console.log('I can drive')
}
else {
    console.log('I can not drive')
}*/
// The switch statement //
//const day = 'Thursday';//
/*switch(day) {
    case 'Monday':
        console.log('Plan course structure'); // day === Monday
        console.log('Go to coding meet up');
        break;
    case 'Tuesday':
        console.log('Prepare the theory video');
        break
    case 'Wednesday':
    case ' Thursday':
        console.log('Write code example');
        break;
    case 'Friday':
        console.log('Record video');
        break;
    case 'Saturday' :
    case 'Sunday' :
        console.log('Relax');
        break;
    default:
        console.log('Not a valid day!');

}*/
/*if(day === 'Monday') {
    console.log('Plan the course structure');
    console.log('Go to the coding meetup');
}
else if( day === 'Tuesday') {
    console.log('Prepare the theory video');
}
else if (day === 'Wednesday' || day === 'Thursday') {
    console.log('Write code example');
}
else if(day === 'Friday') {
    console.log('Record video');
}
else if(day === 'Saturday' || day === 'Sunday') {
    console.log('Relax');
}
else {
    console.log('Not a valid day!');
} */
// Statement and expression //
const age = 20;
age >= 18 ? console.log('I can sleep with 20 years girlfriend') :
            console.log('I can not sleep with years girlfriend');

const bed = age >= 18 ? 'sleep' : 'can not sleep';
console.log(bed);
let age2;
if(age >= 18) {
    age2 = 'Can sleep';
    console.log(age2);
}
else {
    age2 = 'can not sleep';
    console.log(age2);
}
console.log(`I'm ${age} years old so I  ${age >= 18 ? 'can sleep' : 'can not sleep'} with 20years girlfriend`);