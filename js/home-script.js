 new Swiper('.category-wraper', {
    loop: true,
    
    
    centeredSlides: false, 
    spaceBetween:7,
    // pagination bullet
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      
    },
    
       // Auto-play configuration
       autoplay: {
        delay: 1500, 
        disableOnInteraction: false, 
    },
   
   
    breakpoints:{
        0:{
            slidesPerView: 1
        },
        700:{
            slidesPerView: 3
        },
        1120:{
            slidesPerView: 5
        }
       

    }
   
  });

