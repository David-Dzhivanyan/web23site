module.exports = [
  {block: 'header', content: [
      {elem: 'inner', content: [
          {block: 'img', src: './images/header/logo.png'},
          {elem: 'nav', tag: 'nav', content: [
              {block: 'a', href: '#', content: [
                  {block: 'img', src: './images/header/dex.png'},
                ]},
              {block: 'a', href: '#', content: [
                  {block: 'img', src: './images/header/eagle.png'},
                ]},
              {block: 'a', href: '#', content: [
                  {block: 'img', src: './images/header/x.png'},
                ]},
              {block: 'a', href: '#', content: [
                  {block: 'img', src: './images/header/tg.png'},
                ]},
            ]}
        ]},
    ]},
]