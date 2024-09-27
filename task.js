// task -1: console log the secondary school location of Sophia 
let data = {
    Sophia: {
        id: 33,
        study: [
            {
                primary:
                    [
                        { school_name: "ABC primary school" },
                        { location: "Peters burg" }
                    ]
            },
            {
                secondary:
                    [
                        { school_name: "ABC secondary school" },
                        { location: "St Lorence" }
                    ]
            },
        ]
    }
}
console.log(data.Sophia.study[1].secondary[1].location) // St Lorence



// task-2: console .log  output: Petersburg, Herry 
let students = {
    2222: {
        name: "Jack",
        section: "C",
        class: "IX",
        address: {
            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }
    },
    3333: {
        name: "Herry",
        section: "D",
        class: "X",
        address: {
            "building no": 85,
            "street": "DC road",
            "city": "Kachukhet",
            "country": "Bangladesh"
        }
    }
} 
const petersburg = students[2222].address.city; // Petersburg
const herry = students[3333].name; // Herry
console.log(`${petersburg}, ${herry}`); // Petersburg, Herry


// task-3 : access and then show habluder adda
// show output Beginner
let data2 = {
    data:
        [
            {
                bookId: 1,
                bookDetails: {
                    name: "habluder adda",
                    category: "XYZ",
                    price: "20$",
                },
                bookCategory: "Basic",
            },
            {
                bookId: 2,
                bookDetails: {
                    name: "gobluder adda",
                    category: "ABC",
                    price: "40$",
                },
                bookCategory: "Beginner",
            }
        ]
}

console.log(data2.data[0].bookDetails.name) // habluder adda
console.log(data2.data[1].bookCategory) // Beginner


// task - 4
const oddNumbers = [1, 3, 5, 7, 9];

// using for loop 
const eventNumbers = [];
for(let i = 0; i < oddNumbers.length; i++){ 
    let convertedToEvenNumbers = oddNumbers[i] + 1; 
    eventNumbers.push(convertedToEvenNumbers);
}
console.log(eventNumbers); // [ 2, 4, 6, 8, 10 ]

// using map()
const eventNumbers2 = oddNumbers.map(evenNum => evenNum + 1);
console.log(eventNumbers2);


// task - 5
const numbers = [33, 50, 79, 78, 90, 101, 30];

// using filter()
const numsOfDivisibleBy10 = numbers.filter(singleNum => singleNum % 10 === 0)
console.log(numsOfDivisibleBy10); // [ 50, 90, 30 ]

// using find()
const numOfDivisibleBy10UsingFind = numbers.find(singleNum => singleNum % 10 === 0);
console.log(numOfDivisibleBy10UsingFind); // 50


// task - 6

const intructor = [
    {name: "Nodi", age: 28, position: "Senior"},
    {name: "Akil", age: 26, position: "Junior"},
    {name: "Shobuj", age: 30, position: "Senior"}
];

const seniorInstructorNames = intructor.filter(instruc => instruc.position === "Senior").map(seniorIns => seniorIns.name)

console.log(seniorInstructorNames); // [ 'Nodi', 'Shobuj' ]



// task - 7

const people = [
    {name: "Meena", age: 20},
    {name: "Rina", age: 15},
    {name: "Suchorita", age: 22}
];


// using for loop
let sumOfAge = 0;
for(let i = 0; i < people.length; i++){ 
    sumOfAge += people[i].age;
}

console.log(sumOfAge); // 57


// using reduce() method
const ages = people.map(singlePeople => singlePeople.age) 
const sumOfAgeUsingReduce = ages.reduce((previous, current) => previous + current , 0)
console.log(sumOfAgeUsingReduce); // 57