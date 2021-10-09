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



// Swipers
var swiper = new Swiper(".header__swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".product__swiper--featured", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination-2",
      clickable: true,
    },
    breakpoints: {
        600: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
  });

var swiper = new Swiper(".swiper__reviews", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination-2",
        clickable: true,
    },
    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        900: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        },
});


var swiper = new Swiper(".blog__swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination-2",
      clickable: true,
    },
    breakpoints: {
        600: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
  });


// Smooth scrool when you click on a navigation link
document.querySelector(".navigation__list").addEventListener("click", e =>
{
    e.preventDefault();
    if(!e.target.classList.contains("navigation__link")) return;
    const id = e.target.getAttribute("href");

    // remove color from all links, add the color to the clicked link
    const links = document.querySelectorAll(".navigation__link");
    links.forEach(link=>
    {
      link.classList.remove("active");
    });
    e.target.classList.add("active");

    // get the section and scroll to it
    const sectionCoords = document.querySelector(`${id}`).getBoundingClientRect();
    window.scrollTo(
    {
      left: sectionCoords.left + window.pageXOffset,
      top: sectionCoords.top + window.pageYOffset -45,
      behavior: 'smooth'
    }
  );
});


// colorize the navigation link when you reach a certain section
const colorizeSection = (sectionID, sectionOffset = "20%") =>
{
  var waypoint = new Waypoint({
    element: document.getElementById(`${sectionID}`),
    handler: function() {
      // remove the color from each link first
      const links = document.querySelectorAll(".navigation__link");
      links.forEach(link=>
      {
        link.classList.remove("active");
      });

      // colorize that link only
      const linkItem = document.querySelector(`a[href = "#${sectionID}"]`);
      linkItem.classList.add("active");
    },
    offset: `${sectionOffset}`
  });
};

colorizeSection("header", "-10%");
colorizeSection("section__products");
colorizeSection("section__features__slider");
colorizeSection("section__reviews");
colorizeSection("section__contact");
colorizeSection("section__blogs__slider");


// Animations
const animation = (el, animation, sectionOffset = "80%") =>
{
  var waypoint = new Waypoint({
    // element: document.querySelector(`.${sectionID}`),
    element: el,
    handler: function() {
      this.element.classList.add("animate__animated");
      this.element.classList.add(`${animation}`);
      console.log(this.element)
    },
    offset: `${sectionOffset}`
  });
};

// header
document.querySelectorAll(".js--fadeIn").forEach(el =>
{ 
  animation(el, "animate__fadeIn");
});

// Exclusive products links
// Collection details
// Reviews
// Contact 3rd box
// Contact map
// Footer 2nd two items
document.querySelectorAll(".js--fadeInRightBig").forEach(el =>
{ 
  animation(el, "animate__fadeInRightBig");
});

// Exclusive products products
// Featured products
// Blogs
document.querySelectorAll(".js--fadeInUp").forEach(el =>
{ 
  animation(el, "animate__fadeInUp");
});

// Collection
// Contact 1st box
// Contact form
// Footer 1st two items
document.querySelectorAll(".js--fadeInLeftBig").forEach(el =>
{ 
  animation(el, "animate__fadeInLeftBig");
});

// Heading__primary--container
// Footer social icons
document.querySelectorAll(".js--bounce").forEach(el =>
{ 
  animation(el, "animate__bounceIn");
});

