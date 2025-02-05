    var swiper = new Swiper(".logos-slider", {
      slidesPerView: 4,
      spaceBetween: 0,
      autoplay: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        1440: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
        575: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        320: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
      },
    });

let menuicon = document.querySelector(".menuicon");
let ul = document.querySelector("ul");

menuicon.addEventListener("click", ()=>{
  ul.classList.toggle("showData");
  console.log(ul);
})
    