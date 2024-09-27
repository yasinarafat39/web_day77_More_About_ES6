const products = {
  count: 5000,
  data: [
    { id: 1, name: "Lenovo laptop", price: 65000 },
    { id: 2, name: "MacBook", price: 165000 },
  ],
};

// second product
console.log(products.data[1].name);
console.log(products.data[1].price);

const user = {
  id: 5601,
  name: "Shoriful Raj",
  address: {
    street: {
      first: "54/1 uttor side",
      second: "poribag er goli",
      third: "no dorai",
    },
  },
};

// first
console.log(user.address.street.first);
// second
console.log(user.address.street.second);

const user2 = {
  id: 5601,
  name: "Shoriful Raj",
  address: {
    city: "chittagong",
    country: "Bangladesh",
  },
};

// user2 second
console.log(user2.address.street?.second);
