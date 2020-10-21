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


// Masonery

function generateMasaneryGrid() {
    let workItems = [
        {
            workName: 'Work Name',
            image: '/assets/img/works/work1.png'
        },
        {
            workName: 'Work Name',
            image: '/assets/img/works/work2.png'
        },
        {
            workName: 'Work Name',
            image: '/assets/img/works/work3.png'
        },
        {
            workName: 'Work Name',
            image: '/assets/img/works/work4.png'
        },

    ];

    let worksContainer = document.getElementById('masonry');


    workItems.forEach(WorkItem =>{
        worksContainer.innerHTML += `
        <div class="masonry-item">
                <img src="${WorkItem.image}" alt="${WorkItem.title}" class="masonry-content">
         </div>`;
    })

}

generateMasaneryGrid();
