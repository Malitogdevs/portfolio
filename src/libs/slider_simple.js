import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


document.addEventListener('DOMContentLoaded', () => {
    // var swiper = new Swiper(".vertical-swiper", {
    //   direction: "vertical",
    //   slidesPerView: 1,
    //   spaceBetween: 30,
    //   mousewheel: true,
    //   modules: [Pagination],
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
    // });

    document.querySelectorAll('.horizontal-swiper').forEach((el) => {
      new Swiper('.horizontal-swiper', {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 0,
        modules: [Autoplay, Navigation],
        loop: true,
        // autoplay: {
        //   delay: 5000,
        // },
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // }
      });
    });
});