export function getProds(){
    // console.log("get prods function in api.js")
    return fetch("/.netlify/functions/getProds")
    .then(res => res.json())
    .then(({ data }) => data)
};

// CART functionality 
// local storage.. based on a token that will expire after 20 minutes (of inactivity??)
// this way, if a customer leave the site and comes back, pull their token (if it exists) from local storage
// if token is still valid, use the cart info that's saved there
// so essentially save cart info into local storage...

//create cart
export function createCart(){
    localStorage.setItem("cart", JSON.stringify([]))
    console.log(JSON.parse(localStorage.getItem('cart')))
};

// getCart: gets existing cart
export function getCart(){
    return JSON.parse(localStorage.getItem("cart"))
    // return array 
}

// add item to cart
export function addItemToCart(prod){
    // add that product to the cart 
    let cart = JSON.parse(localStorage.getItem("cart"))
    localStorage.setItem("cart", JSON.stringify([...cart, prod]))
    console.log(localStorage)
    return getCart()
};
// * digital products usually don't need to be added to cart more than once, so i wont be keeping track of quantity
// * however, I do want to alert the user if they're trying to add an item that's already in the cart and ask if they want to add it again.. if they do, that's on them...

// remove item from cart
export function removeItemFromCart(indexToRemove){
    let cart = JSON.parse(localStorage.getItem("cart"))
    let updatedCart = cart.filter((_, index) => index !== indexToRemove)
    localStorage.setItem("cart", JSON.stringify(updatedCart))
};

// clear cart of items
export function clearCart(){
    localStorage.setItem("cart", JSON.stringify([]))
    return getCart()
};

// dispose cart
export function trashCart(){
    localStorage.removeItem("cart")
};