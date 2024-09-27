const products = [
    {id: 1, name: "lenovo", price: 65000},
    {id: 2, name: "dell", price: 45000},
    {id: 3, name: "hp", price: 40000},
    {id: 4, name: "mac", price: 150000}
]


class Product{
    constructor(id, name, price){
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

const products2 = [];

products2.push(new Product(1, 'lenovo', 45000))
products2.push(new Product(2, 'hp', 40000))
products2.push(new Product(3, 'dell', 35000))
products2.push(new Product(4, 'MacBook', 135000))

console.log(products2)