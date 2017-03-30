var burgerMenu = document.querySelector("#burgerMenu");
var hamburger = document.querySelector(".hamburger");

hamburger.addEventListener(
  'click',
  function()
  {
    if(hamburger.classList.contains("is-active"))
      {
        burgerMenu.style.left="-2000px";
      }
    else
    {
    burgerMenu.style.left="0px";
    }
    hamburger.classList.toggle("is-active");
  },
  false
);