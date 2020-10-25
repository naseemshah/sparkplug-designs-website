
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



// Clients section\\\\\\\\\\\\\\

function generateClients() {
    let clientsContainer = document.getElementById('photobanner');
    let images = [
        {
            title: "alpas",
            src: 'assets/img/clients/alpas.png'
        },
        {
            title: "datamatics",
            src: 'assets/img/clients/datamatics-logo.png'
        },
        {
            title: "alpas",
            src: 'assets/img/clients/alpas.png'
        },
        {
            title: "datamatics",
            src: 'assets/img/clients/datamatics-logo.png'
        },
        {
            title: "alpas",
            src: 'assets/img/clients/alpas.png'
        },
        {
            title: "datamatics",
            src: 'assets/img/clients/datamatics-logo.png'
        },
        {
            title: "alpas",
            src: 'assets/img/clients/alpas.png'
        },
        {
            title: "datamatics",
            src: 'assets/img/clients/datamatics-logo.png'
        }        
    ]

    images.forEach((image,id) =>{
        if(id==0){
            clientsContainer.innerHTML += `
                
                <img class="first" src="${image.src}" alt="${image.title}" >
                
            `

        }else{
            clientsContainer.innerHTML += `
                
                <img src="${image.src}" alt="${image.title}" >
                
            `
        }
    })
    
}

generateClients()