//  open & close cart

let cart = document.querySelector(".cart");

function open_cart(){
    cart.classList.add("active")
}
function close_cart(){
    cart.classList.remove("active")
}
//  open & close menu

let menu = document.querySelector("#menu");

function open_menu(){
    menu.classList.add("active")
}
function close_menu(){
    menu.classList.remove("active")
}


// add item in cart

var all_products_json;

var items_in_cart = document.querySelector(".items-in-cart");
let product_cart = [];

function addToCart(id, btn){
    product_cart.push(all_products_json[id])
    btn.classList.add("active")

    // console.log(product_cart);
    getCartItems()
}

let count_item = document.querySelector(".count_item")
let price_csrt_head = document.querySelector(".price_csrt_head") 
let pricee_cart_total = document.querySelector(".pricee_cart_total")
let cart_item = document.querySelector(".cart_item")

function getCartItems(){
    let total_price = 0; 
    let items_c = "";
        for (let i = 0; i < product_cart.length; i++) {
            items_c +=
            `
            <div class="item-cart">
                <img src="${product_cart[i].img}" alt="">
                <div class="content">
                    <h4>${product_cart[i].name}</h4>
                    <p class="price-cart">$${product_cart[i].price}</p>
                </div>
                <button class="delete-item">
                    <i onClick="remove_from_cart(${i})" class="fa-solid fa-trash-can"></i>
                </button>
            </div>
            `
            total_price += product_cart[i].price
        }

    items_in_cart.innerHTML = items_c
    price_csrt_head.innerHTML = "$" + total_price
    pricee_cart_total.innerHTML = "$" + total_price
    count_item.innerHTML = product_cart.length
    cart_item.innerHTML = `(${product_cart.length} Item in Cart)`

}

// remove cart

function remove_from_cart(index) {
    product_cart.splice(index, 1)

    getCartItems()

    let addToCartButtons = document.querySelectorAll(".fa-cart-plus")

    for(let i = 0; i < addToCartButtons.length;i++ ){
        addToCartButtons[i].classList.remove("active")

        product_cart.forEach(prodect => {
            if(prodect.id == i){
                addToCartButtons[i].classList.add("active")
            }
        })
    }

}
// back_to_top
let back_to_top = document.querySelector(".back_to_top")

back_to_top.addEventListener("click", function(){
    window.scroll({
        top:0,
        behavior:"smooth"
    })
})
 

//-----  item ----
// chang item image

let bigImage = document.getElementById("bigimg");

function ChangeItemImage(img){
    bigImage.src = img
}