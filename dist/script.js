"use strict";var slideIndex=1;function plusSlides(e){showSlides(slideIndex+=e)}function currentSlide(e){showSlides(slideIndex=e)}function showSlides(e){var s,l=document.getElementsByClassName("slide__container--img"),d=document.getElementsByClassName("dot");for(e>l.length&&(slideIndex=1),e<1&&(slideIndex=l.length),s=0;s<l.length;s++)l[s].style.display="none";for(s=0;s<d.length;s++)d[s].className=d[s].className.replace(" active","");l[slideIndex-1].style.display="block",d[slideIndex-1].className+=" active"}showSlides(slideIndex);
//# sourceMappingURL=script.js.map