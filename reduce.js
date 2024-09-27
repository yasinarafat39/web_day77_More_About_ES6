
const numbers = [75, 65, 52, 48, 63, 55, 58];

const total = numbers.reduce((previousValue, currentValue) => 
    previousValue + currentValue
, 0)

console.log(total); 