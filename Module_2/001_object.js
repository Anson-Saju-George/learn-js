const product = {
    title: "Wireless Mouse",
    rating: 4.5,
    offers: [
        { type: "Discount", description: "10% off on first purchase" },
        { type: "Bundle", description: "Buy 1 Get 1 Free" }
    ],
    price: 25.99,
};


console.log(product)
console.log("Product Title:", product.title);
console.log("Product Rating:", product.rating);
console.log("First Offer Type:", product.offers[0].type);
console.log("First Offer Description:", product.offers[0].description);
console.log("Second Offer Type:", product.offers[1].type);
console.log("Second Offer Description:", product.offers[1].description);
console.log("Product Price:", product.price);