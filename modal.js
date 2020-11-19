'use strict'
const modal = document.querySelectorAll(".mymodal");
const btn = document.querySelectorAll(".modal-open");
const cls = document.getElementsByClassName("close")[0];

btn.addEventListener('click', function () {
  modal.style.display = "block";
})();

cls.addEventListener('click', function () {
  modal.style.display = "none";
})();

window.onclick = (function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
})();