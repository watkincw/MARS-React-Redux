// // Variable scoping
// function outer() {
//     let counter = 0;
//     function inner() {
//         counter++;
//         console.log(counter); // Closure
//     }
//     return inner;
// }
// const val = outer(); // logs a, b, c - 10, 20, 30
// val();
// val();

// function sum(a, b, c, d) {
//     return a + b + c + d + 489;    
// }

// function diff(b) {
//     return 1000 - b;
// }

// // Currying - a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).
// const curryAdd = fn => (a, d) => b => c => {
//     return fn(a, b, c, d);
// }

// const currySub = fn => (a, d) => b => c => {
//     return fn(a, b, c, d);
// }

// // // Also currying
// // function curry(fn) {
// //     return function(a, d) {
// //         return function(b) {
// //             return function(c) {
// //                 return fn(a, b, c, d)
// //             }
// //         }
// //     }
// // }

// const curriedFuncAdd = curryAdd(sum);
// const curriedFuncSub = currySub(diff);

// const sub = curriedFuncSub(570);
// const add = curriedFuncAdd(sub, 37);
// const total = 
// // const val1 = curriedFunc(489,37);
// // const val2 = subtract(1000, 768);
// // const val3 = val2(0);
// // console.log(val3);



// Find out how many Blood Essence charges have been used THIS trip
const chargesUsedThisTrip = (beforeCraftCharges, afterCraftCharges) => {
    // charges remaining BEFORE craft
    console.log('Charges left BEFORE craft: ', beforeCraftCharges);
    console.log('Charges left AFTER craft: ', afterCraftCharges);
    // How many charges were used this trip?
    let thisTrip = beforeCraftCharges - afterCraftCharges;
    console.log('Charges Used THIS TRIP: ', thisTrip);
    // change bloodEssChargesLeft to equal the new bloodEssChargesLeft minus the charges used this trip
    bloodEssChargesLeft = bloodEssChargesLeft - thisTrip;
    // if there are 0 charges left after this trip...
    if (bloodEssChargesLeft === 0) {
        console.log('!!! ACTIVATE NEW BLOOD ESSENSE !!!');
        bloodEssChargesLeft = 1000;
        console.log('New blood ess charge: ', bloodEssChargesLeft);
    }
    // return the value of thisTrip
    return thisTrip;
}

// keep a running total of blood essence charges used for the entire session
const totalBloodEssChargesUsed = () => {
    // if this trip is the first trip of the day...
    if (bloodEssChargesLeft === startingBloodEssCharges) {
        // give 'bloodEssChargesUsed' the value of how many bloods were used on the first trip
        bloodEssChargesUsed = chargesUsedThisTrip(bloodEssChargesLeft, 0);
        console.log(bloodEssChargesUsed);
        console.log('Hello');
        // give 'bloodEssChargesleft' the amount left on the current blood ess
        bloodEssChargesUsed = startingBloodEssCharges - bloodEssChargesUsed;
        // return new bloodEssChargesLeft
        return bloodEssChargesUsed;
    } else {
        console.log('Hello');
    }
}

// Current Blood Ess Charges Left: 585(bloodEssChargesLeft)
// let eachTrip = chargesUsedThisTrip(bloodEssChargesLeft, 499);
// console.log(eachTrip);
const startingBloodEssCharges = 8;
let bloodEssChargesLeft;
let bloodEssChargesUsed = 0;
// let bloodEss = {
//     startingBloodEssCharges: 100,
//     bloodEssChargesLeft: bloodEss.startingBloodEssCharges,
// }

if (!bloodEssChargesLeft) {
    console.log(bloodEssChargesLeft);
    bloodEssChargesLeft = startingBloodEssCharges;
    console.log(bloodEssChargesLeft);
    bloodEssChargesUsed = totalBloodEssChargesUsed();
    console.log(bloodEssChargesLeft);
    // console.log(bloodEssChargesUsed);
}

// How many Blood runes do I owe Shade?
// Keep a running total of blood essence charges used for the entire session
// 