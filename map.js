const numbers = [545, 21, 245, 7, 17, 20, 5];

// Double it
// const doubled = [];
// for(let singleNum of numbers){
//     const double = singleNum * 2;
//     doubled.push(double)
// }
// console.log(doubled)

/** Map
 * Map ==> loops through each element of the array and do the operation that you passed in the callback function and hold the result from each oparation in the arry and finally return you the array.
 */

// function doubleIt(num){
//     return num * 2;
// }

// const result = numbers.map(doubleIt)
// console.log(result)

const double2 = numbers.map((singleNumber) => singleNumber * 2);
console.log(double2);

const fiveBonus = numbers.map((singleNumber) => singleNumber + 5);
console.log(fiveBonus);
