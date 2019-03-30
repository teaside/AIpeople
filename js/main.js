window.addEventListener('DOMContentLoaded', function () {

    let overlay = document.getElementById('overlay');
    var scroll = document.querySelector('.scroll-block__progress-bar');
    let body = document.getElementsByTagName('body')[0];
    let scrollFromTop = '0px';
    document.getElementById('openMenuBtn').addEventListener('click', () => {
        overlay.classList.add('overlay_show');
        // body.style = `top: ${-document.documentElement.scrollTop}px`;
        body.classList.add('noscroll');
        
    });

    document.getElementById('closeMenuBtn').addEventListener('click', () => {
        overlay.classList.remove('overlay_show');
        body.classList.remove('noscroll');
    });

    window.addEventListener('scroll', function () {
        setScroll(scroll);
    });

    // var color = document.querySelector('.scroll-block__progress-bar');
    // console.log(color.);
});

// When the user scrolls the page, execute myFunction 
// window.onscroll = function() {myFunction()};

function setScroll(scroll) {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  if(scrolled <= 25 && !scroll.classList.contains("scroll-block__progress-bar_s1")) {
    if (scroll.classList.contains("scroll-block__progress-bar_s3"))
    scroll.classList.remove("scroll-block__progress-bar_s3");
    if (scroll.classList.contains("scroll-block__progress-bar_s4"))
    scroll.classList.remove("scroll-block__progress-bar_s4");
    if (scroll.classList.contains("scroll-block__progress-bar_s2"))
    scroll.classList.remove("scroll-block__progress-bar_s2");
    
    scroll.classList.add("scroll-block__progress-bar_s1");
  } else
  if((scrolled >=26 && scrolled <= 50) && !scroll.classList.contains("scroll-block__progress-bar_s2") ) {
    if (scroll.classList.contains("scroll-block__progress-bar_s1"))
    scroll.classList.remove("scroll-block__progress-bar_s1");
    if (scroll.classList.contains("scroll-block__progress-bar_s3"))
    scroll.classList.remove("scroll-block__progress-bar_s3");
    if (scroll.classList.contains("scroll-block__progress-bar_s4"))
    scroll.classList.remove("scroll-block__progress-bar_s4");
    
    scroll.classList.add("scroll-block__progress-bar_s2");
  } else
  if((scrolled >=51 && scrolled <= 75) && !scroll.classList.contains("scroll-block__progress-bar_s3") ) {
    if (scroll.classList.contains("scroll-block__progress-bar_s1"))
    scroll.classList.remove("scroll-block__progress-bar_s1");
    if (scroll.classList.contains("scroll-block__progress-bar_s2"))
    scroll.classList.remove("scroll-block__progress-bar_s2");
    if (scroll.classList.contains("scroll-block__progress-bar_s4"))
    scroll.classList.remove("scroll-block__progress-bar_s4");
    
    scroll.classList.add("scroll-block__progress-bar_s3");
  } else
  if((scrolled >=76 && scrolled <= 100) && !scroll.classList.contains("scroll-block__progress-bar_s4" )) {
    if (scroll.classList.contains("scroll-block__progress-bar_s1"))
    scroll.classList.remove("scroll-block__progress-bar_s1");
    if (scroll.classList.contains("scroll-block__progress-bar_s2"))
    scroll.classList.remove("scroll-block__progress-bar_s2");
    if (scroll.classList.contains("scroll-block__progress-bar_s3"))
    scroll.classList.remove("scroll-block__progress-bar_s3");
    
    scroll.classList.add("scroll-block__progress-bar_s4");
  }
}