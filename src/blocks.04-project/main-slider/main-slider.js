import Swiper from "swiper";
import { Autoplay, FreeMode } from "swiper/modules";

class MainSlider {
  constructor(elem) {
    this.block = elem;
    this.block.MainSlider = this;

    this.initSwiper()
    this.init();
  }
  init = () => {
    this.block.classList.add('main-slider_inited');
  };

  initSwiper = () => {
    const swiper = new Swiper(this.block, {
      modules: [Autoplay, FreeMode],
      slidesPerView: "auto",
      spaceBetween: 15,
      speed: 3000,
      loop: true,

      autoplay: {
        delay: 1,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      breakpoints: {
        768: {
          spaceBetween: 20,
        },
        1240: {
          spaceBetween: 30,
        }
      }
    });
  }

  static init() {
    return Array.from(document.querySelectorAll('.main-slider:not(.main-slider_inited)')).forEach((elem) => new MainSlider(elem));
  }
}

document.addEventListener('DOMContentLoaded', MainSlider.init);

// Экспорт;
window.Block = window.Block ? window.Block : {};
window.Block.MainSlider = MainSlider;

