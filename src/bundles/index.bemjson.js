module.exports = {
  block: 'page',
  title: 'Пустая',
  content: [
    require('./../blocks.01-base/header/header.tmpl-specs/base.bemjson'),
    {block: 'main', content: [
        {cls: 'mt-50 mb-60', content: [
            require('../blocks.04-project/main-block/main-block.tmpl-specs/base.bemjson'),
          ]},
      ]},
    require('../blocks.04-project/main-slider/main-slider.tmpl-specs/base.bemjson'),
    ],
};
