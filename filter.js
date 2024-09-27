/** Filter
 * Filter selects elements based on a condition and returns an array with the elements that fulfilled the condition.
 */
const numbers = [20, 45, 85, 47, 80, 96];
const players = [75, 65, 52, 48, 63, 55, 58];

const selected = players.filter(p => p > 60);
console.log(selected) // [ 75, 65, 63 ]