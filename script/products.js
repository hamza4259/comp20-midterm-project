const productsEl = document.getElementById('products');
const cartBtnEl = document.getElementById('cartBtn');

let cartArr;
let productsArr = [];

//hard coded data (simulate an api call)
var someData = [
   {
        product_image_lg: "images/products/gfuel.png",
        product_image_md: "images/products/gfuel.png",
        product_image_sm: "images/products/gfuel.png",
        product_name: "Gym Buddy Pre-workout",
        product_price: 19.99,
        product_ratings: 4,
        _id: "1" 
    },
    {
        product_image_lg: "images/products/protein powder.png",
        product_image_md: "images/products/protein powder.png",
        product_image_sm: "images/products/protein powder.png",
        product_name: "Gym Buddy Protein Powder",
        product_price: 29.99,
        product_ratings: 5,
        _id: "2" 
    },
    {
        product_image_lg: "images/products/creatine.png",
        product_image_md: "images/products/creatine.png",
        product_image_sm: "images/products/creatine.png",
        product_name: "Gym Buddy Creatine",
        product_price: 15.99,
        product_ratings: 5,
        _id: "3" 
    },
    {
        product_image_lg: "images/products/blood rush.png",
        product_image_md: "images/products/blood rush.png",
        product_image_sm: "images/products/blood rush.png",
        product_name: "Gym Buddy Blood Rush",
        product_price: 49.99,
        product_ratings: 5,
        _id: "4" 
    },
    {
        product_image_lg: "images/products/shaker cup.png",
        product_image_md: "images/products/shaker cup.png",
        product_image_sm: "images/products/shaker cup.png",
        product_name: "Gym Buddy Shaker Cup",
        product_price: 24.99,
        product_ratings: 5,
        _id: "5" 
    },
    {
        product_image_lg: "images/products/vitamin d.png",
        product_image_md: "images/products/vitamin d.png",
        product_image_sm: "images/products/vitamin d.png",
        product_name: "Gym Buddy Vitamin D",
        product_price: 9.99,
        product_ratings: 5,
        _id: "6" 
    },
    {
        product_image_lg: "images/products/beta alanine.png",
        product_image_md: "images/products/beta alanine.png",
        product_image_sm: "images/products/beta alanine.png",
        product_name: "Gym Buddy Beta- Alanine",
        product_price: 14.99,
        product_ratings: 5,
        _id: "7" 
    },
    {
        product_image_lg: "images/products/calcium.png",
        product_image_md: "images/products/calcium.png",
        product_image_sm: "images/products/calcium.png",
        product_name: "Gym Buddy Blood Rush",
        product_price: 9.99,
        product_ratings: 5,
        _id: "8" 
    },
];

// loads previous cart arr
function getCartArr(){
    const temp = localStorage.getItem('cartArr');
    const temp2 = JSON.parse(temp);
    if (temp2 === null || temp2 === undefined) {
        cartArr = [];
        localStorage.setItem('cartArr', JSON.stringify(cartArr));
    } else {
        cartArr = temp2;
    }
}

// loads product data 
const loadProducts = () => {
    productsArr = someData;
    displayProductsDOM(someData);
};

// renders products list on DOM
function displayProductsDOM(products){
    productsEl.innerHTML = products.map(product=>`
        <div class="product">
            <div class="product-info">
                <img src="${product.product_image_md}" alt="product-image" width = "400" height = "400">
                <h4>${product.product_name}</h4>
                <h5>Price: $${product.product_price}</h5>
                <h5>Rating: ${product.product_ratings}</h5>
                <button id="${product._id}" class="addBtn">add to cart</button>
            </div>
        </div>
    `)
    .join('');

    // add to cart button clicked
    $(".addBtn").on('click', addToCart);
}

// checks if item is already present in the cart
function isItemInCart(currId){
    for (const product of cartArr){
        if (currId === product._id){
            product['qty'] += 1;
            return true;
        }
    }
    return false;
}

// add to cart function
function addToCart(e){
    alert('Item Added to cart');
}

// display cart
function displayCart(){
    // console.log(cartArr);
    saveCartToLocal();
    window.location.href = "./cart.html";
}

// save user cart to local storage
function saveCartToLocal(){
    localStorage.setItem('cartArr', JSON.stringify(cartArr));
}

cartBtnEl.addEventListener('click', displayCart);

loadProducts();
getCartArr();