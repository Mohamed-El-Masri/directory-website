// document.querySelectorAll('.stars i').forEach((star, index) => {
//     star.addEventListener('click', () => {
//       document.querySelectorAll('.stars i').forEach((s, i) => {
//         s.classList.toggle('bi-star-fill', i <= index);
//         s.classList.toggle('bi-star', i > index);
//       });
//     });
//   });
  // var swiper = new Swiper(".mySwiper", {
  //   slidesPerView: 3,
  //   spaceBetween: 12,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  // });  

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // عدد الشرائح في الشاشة الافتراضية
    spaceBetween: 10, // المسافة بين الشرائح
    loop: false, // تشغيل السلايدر بشكل دائري
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 4000, // تأخير بين كل سلايد وآخر
      disableOnInteraction: false, // الاستمرار في التشغيل بعد التفاعل
    },
    breakpoints: {
      640: { slidesPerView: 1 }, // شريحة واحدة للموبايل
      768: { slidesPerView: 2 }, // شريحتين للأجهزة اللوحية
      1024: { slidesPerView: 3 }, // ثلاث شرائح للكمبيوتر
    }
  });
  


