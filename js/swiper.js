// slide bar
var swiper = new Swiper(".slide-swp", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullests:true,
      clickable:true
    },
    autoplay:{
      delay:2500
    },
    loop:true,
  });


// slide sale-sec
var swiper = new Swiper(".sale-sec", {
    slidesPerView: 5,
    spaceBetween:30,
    autoplay:{
      delay:3000
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    loop:true,
  });

var swiper = new Swiper(".product_swip", {
    slidesPerView: 4,
    spaceBetween:30,
    autoplay:{
      delay:3000
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    loop:true,
  });