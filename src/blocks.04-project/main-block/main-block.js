class MainBlock {
  constructor(elem) {
    this.block = elem;
    this.block.MainBlock = this;
    this.copyBlock = this.block.querySelector('.main-block__copy');

    this.copy();
    this.init();
  }
  init = () => {
    this.block.classList.add('main-block_inited');
  };

  copy = () => {
    this.copyBlock.addEventListener('click', () => {
      const textToCopy = this.copyBlock.textContent.trim();

      let tempInput = document.createElement("input");
      tempInput.value = textToCopy;
      document.body.appendChild(tempInput);

      tempInput.select();
      document.execCommand("copy");

      document.body.removeChild(tempInput);
    })
  }

  static init() {
    return Array.from(document.querySelectorAll('.main-block:not(.main-block_inited)')).forEach((elem) => new MainBlock(elem));
  }
}

document.addEventListener('DOMContentLoaded', MainBlock.init);

// Экспорт;
window.Block = window.Block ? window.Block : {};
window.Block.MainBlock = MainBlock;

