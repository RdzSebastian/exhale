var elements = document.querySelectorAll('.text__bottomleft');

const options = {
    threshold: 0,
    rootMargin: "-50% 0px -15% 0px"
};

const observer =  new IntersectionObserver(function
(entries, observer) {
    entries.forEach(entry => {
        console.log(entry.target);
        entry.target.classList.add("appear");
        if(!entry.isIntersecting){
            entry.target.classList.remove("appear");
        }
    });
}, options);
elements.forEach(element =>{
    observer.observe(element);
});


var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

    
  speed: 800,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
    preloadImages: false,
    // Enable lazy loading
    lazy: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})

var modal = document.getElementById('video__showreel');
var muteVideo = document.getElementById("video__showreel__player");
window.onclick = function(event) {
  if (event.target == modal) {
    muteVideo.muted = true;
    muteVideo.pause();
    modal.style.display = "none";
  }
}

var bgvideos = document.querySelectorAll('.autoplay');

bgvideos.forEach(bgvideo =>{
    bgvideo.muted = true;
    bgvideo.play();
    bgvideo.loop = true;
    });