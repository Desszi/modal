'use strict'

const modal = document.querySelector('.modal-container');

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

(function clickWindow() {
    window.addEventListener('click', (event) => {
    if(event.target == modal) {
      modal.style.display = 'none';
    }
  })
})();
