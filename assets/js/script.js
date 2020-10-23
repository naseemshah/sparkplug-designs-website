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


window.addEventListener("resize",()=>{
    let sidebar = document.getElementById("sidebar")
    sidebar.style.left = `${window.innerWidth}px`;
},false)

  
  
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

// WORK SECTION
// Masonery

let workItems = [
    {
        workName: 'Work Name',
        image: 'assets/img/works/work1.png'
    },
    {
        workName: 'Work Name',
        image: 'assets/img/works/work2.png'
    },
    {
        workName: 'Work Name',
        image: 'assets/img/works/work3.png'
    },
    {
        workName: 'Work Name',
        image: 'assets/img/works/work4.png'
    },

];

function generateMasaneryGrid() {

    let worksContainer = document.getElementById('masonry');
    workItems.forEach(WorkItem =>{
        worksContainer.innerHTML += `
        <div class="masonry-item">
                <img src="${WorkItem.image}" alt="${WorkItem.title}" class="masonry-content">
         </div>`;
    })

}

generateMasaneryGrid();


//CAROUSAL

function generateHomeCarousal() {
    let carousel = document.querySelector('.home-carousal-container');

    workItems.forEach(WorkItem =>{
        carousel.innerHTML += `
        <div class="home-carousal-cell">
                <img src="${WorkItem.image}" alt="${WorkItem.title}">
         </div>`;
    })

    let flkty = new Flickity( carousel, {
    imagesLoaded: true,
    percentPosition: false,
    });

    let imgs = carousel.querySelectorAll('.home-carousal-cell img');
    // get transform property
    let docStyle = document.documentElement.style;
    let transformProp = typeof docStyle.transform == 'string' ?
    'transform' : 'WebkitTransform';

    flkty.on( 'scroll', function() {
    flkty.slides.forEach( function( slide, i ) {
        let img = imgs[i];
        let x = ( slide.target + flkty.x ) * -1/5;
        img.style[ transformProp ] = 'translateX(' + x  + 'px)';
    });
    });
    
}

generateHomeCarousal();


// ////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\
// WHAT WE DO SECTION
function setAccordian(){
    var acc = document.getElementsByClassName("home-accordian");
    var i;
    let hoverContainer = document.getElementById('what-we-do-hover-container');

    for (i = 0; i < acc.length; i++) {
    
    let currentElement = acc[i];
    currentElement.addEventListener("click", function() {
        if(window.innerWidth<769){
            this.classList.toggle("home-accordian-active");
            var panel = this.childNodes[3];
            if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            }
        } 
        });
    
    currentElement.addEventListener('mouseover',()=>{
        if(window.innerWidth>=769){
            let panel = currentElement.children[1];
            hoverContainer.innerHTML= panel.innerHTML
        }
        
        },false)

    currentElement.addEventListener('mouseout',()=>{
        if(window.innerWidth>=769){
            hoverContainer.innerHTML = '';
        }
        },false)
    }
    

}

setAccordian()