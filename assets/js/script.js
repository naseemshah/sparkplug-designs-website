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
let hamMenuHireBtn = document.getElementById("ham-hire-us");
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

hamMenuHireBtn.onclick = ()=>{
    hamMenuCloseBtn.onclick();
    LocoScroll.scrollTo('.footer-address');
}

// (function() {
//     emailjs.init("user_kSG71wGhQRVFxYJ84MP7U");
// })();

function sendFooterForm() {
    emailjs.init("user_kSG71wGhQRVFxYJ84MP7U");

    let send = document.getElementById("form-submit-button-send");
    let sending = document.getElementById("form-submit-button-sending");
    let sent = document.getElementById("form-submit-button-sent");
    let errorMsg = document.getElementById("form-submit-button-error");

    if(send.classList.contains('show-form-button-message')){
        send.classList.remove('show-form-button-message');
    }
    if(sent.classList.contains('show-form-button-message')){
        sent.classList.remove('show-form-button-message');
    }
    if(errorMsg.classList.contains('show-form-button-message')){
        errorMsg.classList.remove('show-form-button-message');
    }
    sending.classList.add("show-form-button-message")

    emailjs.sendForm('service_08grlqg', 'template_55wmjzj', '#footer-form')
        .then(function(response) {
        //    console.log('SUCCESS!', response.status, response.text);
           if(send.classList.contains('show-form-button-message')){
            send.classList.remove('show-form-button-message');
            }
            if(sending.classList.contains('show-form-button-message')){
                sending.classList.remove('show-form-button-message');
            }
            if(errorMsg.classList.contains('show-form-button-message')){
                errorMsg.classList.remove('show-form-button-message');
            }
            sent.classList.add("show-form-button-message");

        }, function(error) {
            if(send.classList.contains('show-form-button-message')){
                send.classList.remove('show-form-button-message');
                }
                if(sending.classList.contains('show-form-button-message')){
                    sending.classList.remove('show-form-button-message');
                }
                if(sent.classList.contains('show-form-button-message')){
                    sent.classList.remove('show-form-button-message');
                }
                errorMsg.classList.add("show-form-button-message");

           console.log('FAILED...', error);
        });
    return false;
}

function recaptchaCallback() {
    document.getElementById("form-submit-button").disabled = false;
}

let MouseOptions = {
    "cursorOuter": "circle-basic",
    "hoverEffect": "pointer-blur",
    "hoverItemMove": false,
    "defaultCursor": false,
    "outerWidth": 41,
    "outerHeight": 41
    }; 
    window.addEventListener('mousemove',()=>{
        magicMouse(MouseOptions);
    },{once : true})

    