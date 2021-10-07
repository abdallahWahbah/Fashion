// prevent default when you click on any anchor
document.querySelectorAll("a").forEach(el=> el.addEventListener("click", e => e.preventDefault()));

////////////////////////// 
// Navigation functionality

let navSearch = document.querySelector(".navigation__form");
let searchBtn = document.querySelector(".js__navigation__icon--search");
let navList = document.querySelector(".navigation__list");

let navCart = document.querySelector(".navigation__cart");
let cartBrn = document.querySelector(".js__navigation__icon--cart");
let menuBtn = document.querySelector(".js__navigation__icon--menu");



searchBtn.addEventListener("click", e=>
{
    // preview search input, make the search btn blue, remove the cart, remove the list .. the 2 below funcs do the same
    navSearch.classList.toggle("active");
    searchBtn.classList.toggle("active");
    cartBrn.classList.remove("active");
    navCart.classList.remove("active");
    navList.classList.remove("active");
    menuBtn.classList.remove("active");
});

cartBrn.addEventListener("click", e=>
{
    navCart.classList.toggle("active");
    cartBrn.classList.toggle("active");
    navSearch.classList.remove("active");
    searchBtn.classList.remove("active");
    navList.classList.remove("active");
    menuBtn.classList.remove("active");
});
menuBtn.addEventListener("click", e=>
{
    navList.classList.toggle("active");
    menuBtn.classList.toggle("active");
    cartBrn.classList.remove("active");
    navCart.classList.remove("active");
    navSearch.classList.remove("active");
    searchBtn.classList.remove("active");
});


////////////////////////// 
// Products filter
const productButtons = document.querySelectorAll(".product__link");
const productItems = document.querySelectorAll(".product");

productButtons.forEach(btn =>
{
    btn.addEventListener("click", e=>
    {
        // colorize the link (filter)
        productButtons.forEach(el => el.classList.remove("active"));
        e.target.classList.add("active")

        const dataFilter = e.target.dataset.filter;
    
        if(!dataFilter) return;

        productItems.forEach(item =>
        {
            item.classList.remove("active");
            item.classList.add("hide");

            
            if(item.dataset.type === dataFilter || dataFilter === "all")
            {
                item.classList.add("active");
                item.classList.remove("hide");
            }
        });
    }) ;
});