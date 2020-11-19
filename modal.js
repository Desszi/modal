'use strict'

const modal = document.querySelector('.mymodal');

(function clickModalButton() {
  const btn = document.querySelector('.modal-open');
  btn.addEventListener('click', () => {
    modal.style.display = 'block';
  })  
})();

(function clickModalClose() {
  const cls = document.getElementsByClassName('close')[0];
  cls.addEventListener('click', () =>  {
    modal.style.display = 'none';
  })
})();
