// Sidebar Animations
let sidbarAnimation = anime({
    targets: '.sidebar',
    left: 0,
    // delay: function(el, i) { return i * 100; },
    // direction: 'forward',
    // loop: true,
    autoplay: false,
    easing: 'easeInOutSine',
    duration: 500   
  });


  
  
let hamMenuBtn = document.getElementById("ham-menu");
let hamMenuCloseBtn = document.getElementById("ham-close");
let isInitialSidebarVisit = true;
hamMenuBtn.onclick = ()=>{
    if (isInitialSidebarVisit){
        sidbarAnimation.play();
    }else{
        sidbarAnimation.reverse();
        sidbarAnimation.play();
    }

}
hamMenuCloseBtn.onclick = ()=>{
    sidbarAnimation.reverse();
    sidbarAnimation.play();
    isInitialSidebarVisit = false;
}