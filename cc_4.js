let products = [{
    name: "computer",
    category: "electronics",
    price: 1200.00
    Inventory: 900
}, {
    name: "Protein chips",
    category: "groceries",
    price: 4.00,
    Inventory: 500
}, {
    name: "Pump covers",
    category: "apparel",
    price: 25.00,
    Inventory: 300
}, {
    name: "candles",
    category: "household",
    price: 24.99,
    Inventory: 400
}, {
    name: "toilet paper",
    category: "household",
    price: 15.99,
    Inventory: 600
}, {
    name: "Protein brownies",
    category: "grocieries",
    price: 3.50,
    Inventory: 450
}]
    
for (let product of products) {
   switch (product.category) {
    case "electronics":
        product.price *=0.8;
        break;
    case "groceries":
        product.price *=0.9;
        break;
    case "apparel":
        product.price *=0.85;
        break;
    case "Phousehold":
        product.price *=0.9;
        break;
    case "groceries":
        product.price *=0.9;
        break;
    default:
        //no discount
        break;
}
    }

let customerType =["student","senior"];
let total = 100
if (customerType === "student") {
    total *= 0.95;
}else if (customerType === "senior") {
    total *= 0.93;
}else {
    // no discount for other customer types
    total *= 1.0;

} 
console.log(`Total after customer discount: ${customerType}: $ ${total.toFixed(2)}`);

//stimulate checkout for 3 customers 
const customerType = ["student", "senior", "regular"];
for (let i =0; i<3; i++) {
    let customerType= customerType[i];
    let cartTotal = 0;

    //each customer buys 1 of each product
    for (let product of products) {
        if (product.Inventory >0) {
        cartTotal += product.price
        product.Inventory -=1; // reduce inventory
        }
    }

}
//apply customer type discount
if (customerType === "student") {
    cartTotal *= 0.95;
}else if (customerType === "senior") {
    cartTotal *= 0.93;
}// regular customers pay full price
console.log(`Customer #${i+1} (${customerType}) total: $${cartTotal.toFixed(2)}`);
