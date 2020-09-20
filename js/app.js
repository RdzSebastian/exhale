var elements = document.querySelectorAll('.text__bottomleft');

// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1 - 79
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

// Edge (based on chromium) detection
var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);

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

var bgvideos = document.querySelectorAll('.autoplay');

bgvideos.forEach(bgvideo =>{
    bgvideo.muted = true;
    bgvideo.play();
    bgvideo.loop = true;
    });