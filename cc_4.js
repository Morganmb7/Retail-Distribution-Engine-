let products = [{
    name: "computer",
    category: "electronics",
    price: 1200.00,
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
    category: "groceries",
    price: 3.50,
    Inventory: 450
}];
 //  apply category discounts to products   
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
    case "household":
        product.price *=0.9;
        break
    default:
        //no discount
        break;
}
    }

// Show discount for each customer type
const customerTypes = ["student", "senior", "regular"];
for (let customerType of customerTypes) {
    let total = 100;
    if (customerType === "student") {
        total *= 0.95;
    } else if (customerType === "senior") {
        total *= 0.93;
    }
    // regular gets no discount
    console.log(`${customerType}: $${total.toFixed(2)}`);
}




//stimulate checkout for 3 customers 
for (let i = 0; i < 3; i++) {
    let currentCustomerType = customerTypes[i];
    let cartTotal = 0;

    //each customer buys 1 of each product
    for (let product of products) {
        if (product.Inventory > 0) {
            cartTotal += product.price;
            product.Inventory -= 1; // reduce inventory
        }
    }

    //apply customer type discount
    if (currentCustomerType === "student") {
        cartTotal *= 0.95;
    } else if (currentCustomerType === "senior") {
        cartTotal *= 0.93;
    }
    // regular customers pay full price

    // Print the total for every customer
    console.log(`Customer #${i + 1} (${currentCustomerType}) total: $${cartTotal.toFixed(2)}`);
}
    



//log key/value pairs for a single product after discounts 
const sampleProduct = products[0]; // first product
console.log("Sample product details after discounts:");
for (let key in sampleProduct) {
    console.log(`${key}: ${sampleProduct[key]}`);
}

// log all product info after inventory update
console.log("All products after inventory update:");
for (const [index, product] of products.entries()) {
    const entries = Object.entries(product);
    let info= entries.map(([key, value]) => `${key}: ${value}`).join(", ");
    console.log(`Product ${index + 1}: ${info}`);
    }
