//document.getElementById("count").innerText = 5;

// let count = 0;
// console.log(count);

// // Challenge 1
// let myAge = 18;
// console.log(myAge);

// // Challenge 2
// let myAge = 18;
// let HumanDogRatio = 7;
// let myDogAge = myAge*HumanDogRatio;
// console.log(myDogAge)

// Challenge 3
// let bonusPoints = 50;
// console.log(bonusPoints);
// bonusPoints += 50;
// console.log(bonusPoints);
// bonusPoints -= 75;
// console.log(bonusPoints);
// bonusPoints += 45;
// console.log(bonusPoints);

// // Challenge 4
// function anyFunction(){
//     console.log(42);
// }
// anyFunction();

// // Challenge 5
// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;
// function sumLaps(lap1, lap2, lap3){
//     let sum = lap1+lap2+lap3;
//     console.log(sum);
// }
// sumLaps(lap1, lap2, lap3);

let count = 0;

function increment(){
    count = count+1;
    // OR count += 1;
    document.getElementById("count-el").innerHTML = count;
}

function decrement(){
    if (count>0){
        count = count-1;
        // OR count -= 1;
        document.getElementById("count-el").innerHTML = count
    }
    else {
        document.getElementById("count-el").innerHTML = "Cannot decrement further"
    }
}

function reset(){
    count = 0;
    document.getElementById("count-el").innerHTML = 0;
}

let name = 'Vignesh';
let greeting = 'Welcome Back ';
let welcomeEl = document.getElementById("welcome-el")

welcomeEl.innerHTML = greeting + name

welcomeEl.innerHTML = greeting + name + " 👋"