module.exports = [
  {block: 'main-slider', cls: 'swiper', content: [
      {cls: 'swiper-wrapper', content: [
          {elem: 'slide', mods: {big: true}, cls: 'swiper-slide', content: [
              {elem: 'img', mods: {big: true}, content: [
                  {block: 'img', src: './images/main-slider/slide5.jpg'}
                ]}
            ]},
            {elem: 'slide', mods: {double: true}, cls: 'swiper-slide', content: [
                {elem: 'img', content: [
                    {block: 'img', src: './images/main-slider/slide1.jpg'},
                  ]},
                {elem: 'img', content: [
                    {block: 'img', src: './images/main-slider/slide2.jpg'},
                  ]},
              ]},
          {elem: 'slide', mods: {big: true}, cls: 'swiper-slide', content: [
              {elem: 'img', content: [
                  {block: 'img', src: './images/main-slider/slide3.jpg'}
                ]}
            ]},
          {elem: 'slide', cls: 'swiper-slide', content: [
              {elem: 'img', content: [
                  {block: 'img', src: './images/main-slider/slide6.jpg'}
                ]}
            ]},
          {elem: 'slide', mods: {double: true}, cls: 'swiper-slide', content: [
              {elem: 'img', content: [
                  {block: 'img', src: './images/main-slider/slide1.jpg'},
                ]},
              {elem: 'img', content: [
                  {block: 'img', src: './images/main-slider/slide2.jpg'},
                ]},
            ]},
          {elem: 'slide', mods: {big: true}, cls: 'swiper-slide', content: [
              {elem: 'img', content: [
                  {block: 'img', src: './images/main-slider/slide4.jpg'}
                ]}
            ]},
        ]}
    ]}
];