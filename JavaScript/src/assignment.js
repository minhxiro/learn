let country = 'Vietnam';
console.log(country);
let continient = 'Asia';
console.log(continient);
 population = '100M';
console.log(population);
console.log(typeof population);

population = 100000;
population /= 1000;
const x = population / 10;
console.log(population, x);
console.log(x <= 11);
// Test //
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;
let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;
let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
console.log(markBMI, johnBMI);
// Test 2 //
if(markBMI > johnBMI) {
    console.log(`Mark's BMI ${markBMI} is higher than John's BMI ${johnBMI}!`);
}
else {
    console.log("John's BMI is higher than Mark's!");
}
//Test 3 //
//Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.//
//Sample numbers : -5, -2, -6, 0, -1//
//Output : 0 //
let a = -5;
let b = -2;
let c = -6;
let d = 0;
let e = -1;
if(a>b, a>c, a>d, a>e) {
    console.log(a);
}
else {
    if(b>a, b>c, b>d, b>e) {
        console.log(b);
    }
    else {
        if(c>a, c>b, c>d, c>e) {
            console.log(c);
        }
        else {
            if(d>a, d>b, d>c, d>e) {
                console.log(d);
            }
            else {
                if(e>a. e>b, e>c, e>d) {
                    console.log(e);
                }
            }
        }
    }
}

//Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade//
const david = 80;
const vinoth = 77;
const divya = 88;
const isthina = 95;
const thomas = 68;
if(david<60) {
    console.log('david F');
}
else if(david>60, david<70) {
    console.log('david D');
}
else if(david>70, david<80) {
    console.log('david C');
}
else if(david>80, david<90) {
    console.log('david B');
}
else if(david>90, david<100) {
    console.log('david A');
}

if(vinoth<60) {
    console.log('vinoth F');
}
else if(vinoth>60, vinoth<70) {
    console.log('vinoth D');
}
else if(vinoth>70, vinoth<80) {
    console.log('vinoth C');
}
else if(vinoth>80, vinoth<90) {
    console.log('vinoth B');
}
else if(vinoth>90, vinoth<100) {
    console.log('vinoth A');
}

if(divya<60) {
    console.log('divya F');
}
else if(divya>60, divya<70) {
    console.log('divya D');
}
else if(divya>70, divya<80) {
    console.log('divya C');
}
else if(divya>80, divya<90) {
    console.log('divya B');
}
else if(vinoth>90, divya<100) {
    console.log('divya A');
}

if(isthina<60) {
    console.log('isthina F');
}
else if(isthina>60, isthina<70) {
    console.log('isthina D');
}
else if(isthina>70, isthina<80) {
    console.log('isthina C');
}
else if(isthina>80, isthina<90) {
    console.log('isthina B');
}
else if(isthina>90, isthina<100) {
    console.log('isthina A');
}

if(thomas<60) {
    console.log('thomas F');
}
else if(thomas>60, thomas<70) {
    console.log('thomas D');
}
else if(thomas>70, thomas<80) {
    console.log('thomas C');
}
else if(thomas>80, thomas<90) {
    console.log('thomas B');
}
else if(thomas>90, thomas<100) {
    console.log('thomas A');
}

//Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign//
const k = 3;
const y = -7;
const z = 2;
if(k<0,y>0,z>0) {
    console.log('The sign is -');
}
else if(k>0, y<0, z>0) {
    console.log('The sign is -');
}
else if (k>0, y>0, z<0) {
    console.log('The sign is -');
    
}

/*Write a function named greaterNum that:
takes 2 arguments, both numbers.
returns whichever number is the greater (higher) number.
Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").*/
const num1 = 5;
const num2 = 10;
if (num1>num2) {
    let largerNum = num1;
    console.log(largerNum);
}
else {
    let largerNum = num2;
    console.log(largerNum);
}
// equality operator //
/*const dateOfBirth = Number(prompt('What is your date of birth'));
console.log(dateOfBirth);
console.log(`${dateOfBirth} is your date of birth`);
if(dateOfBirth === 1) {
    console.log('This is your first date in month')
}
else if(dateOfBirth === 24) {
    console.log('Today is your birthday');
}
else if(dateOfBirth > 31) {
    console.log('Are you alien?');
} */
// coding challenge 3 //
let dolGame1 = 96;
let dolGame2 = 108;
let dolGame3 = 89;
let dolAverage = (dolGame1 + dolGame2 + dolGame3) / 3;
let koalaGame1 = 88;
let koalaGame2 = 91;
let koalaGame3 = 110;
let koalaAverage = (koalaGame1 + koalaGame2 + koalaGame3) / 3;
if(dolAverage === koalaAverage) {
    console.log(' Two teams are equal')
}
else if(dolAverage < koalaAverage) {
    console.log('Koala wins')
}
else if(dolAverage > koalaAverage) {
    console.log('Dolphin wins')
}

dolGame1 = 97;
dolGame2 = 112;
dolGame3 = 101;
dolAverage = (dolGame1 + dolGame2 + dolGame3) / 3;
koalaGame1 = 109;
koalaGame2 = 95;
koalaGame3 = 123;
koalaAverage = (koalaGame1 + koalaGame2 + koalaGame3) / 3;
const dolWin = dolAverage > koalaAverage;
const koalaWin = koalaAverage > dolAverage
const ruleForDolphin = dolAverage >= 100;
const ruleForKoala = koalaAverage >= 100;
if(dolAverage == koalaAverage) {
    console.log('Both teams are draw')
}
else if(dolWin && ruleForDolphin) {
    console.log('Dolphin wins')
}
else if(koalaWin && ruleForKoala) {
    console.log('Koala wins')
}
else {
    console.log('No one win')
}

// data bonus 2 //
dolGame1 = 97;
dolGame2 = 112;
dolGame3 = 101;
dolAverage = (dolGame1 + dolGame2 + dolGame3) / 3;
koalaGame1 = 109;
koalaGame2 = 95;
koalaGame3 = 106;
koalaAverage = (koalaGame1 + koalaGame2 + koalaGame3) / 3;
const drawOne = dolAverage == koalaAverage;
const drawTwo = dolAverage >= 100;
if(drawOne && drawTwo) {
    console.log('Both teams are draw')
}
else if(dolAverage > koalaAverage) {
    if(ruleForDolphin) {
        console.log('Team Dolphin is able to win')
    }
    else {
        console.log('No one win')
    }
}
else if(dolAverage < koalaAverage) {
    if(ruleForKoala) {
        console.log('Team Koala is able to win')
    }
    else {
        console.log('No one win')
    }
}