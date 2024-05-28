module.exports = [
  {block: 'main-slider', cls: 'swiper', content: [
      {cls: 'swiper-wrapper', content: [...new Array(2)].map((_, index) => [
          {elem: 'slide', cls: 'swiper-slide', content: [
              {elem: 'img', content: [
                  {block: 'img', src: './images/main-slider/slide1.png'}
                ]}
            ]},
            {elem: 'slide', mods: {double: true}, cls: 'swiper-slide', content: [
                {elem: 'img', content: [
                    {block: 'img', src: './images/main-slider/slide2.jpg'},
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
          {elem: 'slide', mods: {double: true}, cls: 'swiper-slide', content: [
              {elem: 'img', content: [
                  {block: 'img', src: './images/main-slider/slide2.jpg'},
                ]},
              {elem: 'img', content: [
                  {block: 'img', src: './images/main-slider/slide2.jpg'},
                ]},
            ]},
        ])}


      // {cls: 'swiper-wrapper', content: [
      //     {elem: 'slide', cls: 'swiper-slide', content: [
      //         {elem: 'img', content: [
      //             {block: 'img', src: './images/main-slider/slide1.png'}
      //           ]}
      //       ]},
      //     {elem: 'slide', mods: {even: true}, cls: 'swiper-slide', content: [
      //         {elem: 'img', content: [
      //             {block: 'img', src: './images/main-slider/slide2.jpg'},
      //           ]},
      //         {elem: 'img', content: [
      //             {block: 'img', src: './images/main-slider/slide2.jpg'},
      //           ]},
      //       ]},
      //     {elem: 'slide', cls: 'swiper-slide', content: [
      //         {elem: 'img', content: [
      //             {block: 'img', src: './images/main-slider/slide1.png'}
      //           ]}
      //       ]},
      //     {elem: 'slide', mods: {even: true}, cls: 'swiper-slide', content: [
      //         {elem: 'img', content: [
      //             {block: 'img', src: './images/main-slider/slide2.jpg'},
      //           ]},
      //         {elem: 'img', content: [
      //             {block: 'img', src: './images/main-slider/slide2.jpg'},
      //           ]},
      //       ]},
      //     {elem: 'slide', cls: 'swiper-slide', content: [
      //         {elem: 'img', content: [
      //             {block: 'img', src: './images/main-slider/slide1.png'}
      //           ]}
      //       ]},
      //     {elem: 'slide', mods: {even: true}, cls: 'swiper-slide', content: [
      //         {elem: 'img', content: [
      //             {block: 'img', src: './images/main-slider/slide2.jpg'},
      //           ]},
      //         {elem: 'img', content: [
      //             {block: 'img', src: './images/main-slider/slide2.jpg'},
      //           ]},
      //       ]},
      //     {elem: 'slide', cls: 'swiper-slide', content: [
      //         {elem: 'img', content: [
      //             {block: 'img', src: './images/main-slider/slide1.png'}
      //           ]}
      //       ]},
      //     {elem: 'slide', mods: {even: true}, cls: 'swiper-slide', content: [
      //         {elem: 'img', content: [
      //             {block: 'img', src: './images/main-slider/slide2.jpg'},
      //           ]},
      //         {elem: 'img', content: [
      //             {block: 'img', src: './images/main-slider/slide2.jpg'},
      //           ]},
      //       ]},
      //   ]}
    ]}
];