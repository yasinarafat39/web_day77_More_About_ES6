const numbers = [20, 45, 85, 47, 80, 96];
const devideBy3 = numbers.map((singleNum) => parseFloat((singleNum / 3).toFixed(2)));
console.log(devideBy3);


const friends = ["Mahfuzur", "Arman", "Rana", "Nazim", "Muzammel"];
const firstLetterOfFriends = friends.map(friendName => friendName[0])
console.log(firstLetterOfFriends)