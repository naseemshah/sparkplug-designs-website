let LocoScroll;
window.onload = () =>{
    LocoScroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        // multiplier: 0.5
    });
}