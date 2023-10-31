gsap.from("#detail-page1 #best",{
  scale:0.5,
  opacity:0,
  repeat:-1,
  duration:1.2,
})
gsap.from("#page2 #top-2 .product1",{
    scale:0.5,
    opacity:0,
    scrollTrigger:{
      scroller:"body",
      trigger:"#page2",
      // markers:true,
      start:"top 50%",
      end:"top 20%",
      scrub:3,
  }
})
gsap.from("#top-4 .product1",{
  scale:0.5,
  opacity:0,
  scrollTrigger:{
    scroller:"body",
    trigger:"#top-4",
    // markers:true,
    start:"top 50%",
    end:"top 20%",
    scrub:3,
}
})
gsap.from("#page3 #center-page3",{
  scale:0.5,
  opacity:0,
  scrollTrigger:{
    scroller:"body",
    trigger:"#page3",
    // markers:true,
    start:"top 50%",
    end:"top 20%",
    scrub:3,
  }
})
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // var i=document.querySelector("#last #facebook i",)
  // i.addEventListener("click",function(){

  // })