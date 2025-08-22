gsap.registerPlugin(ScrollTrigger);

// YOUR CODE HERE

const section1Tl = gsap.timeline()

section1Tl.from('.content div h1 span:first-child',{x: "-100vw", duration:2})
        .from('.content div h1 span:last-child',{x: "100vw", duration:2},"<")
        .from('.content div p',{rotate: 90, transformOrigin:"left center", opacity: 0})
        .from('.content img',{y:'100vh'})

const section2Tl = gsap.timeline({
        scrollTrigger:{
        trigger:".section2",
        start:"top center",
        end: "bottom 50%",
        toggleActions:"play pause reverse pause "
    }
})

section2Tl.from('.section2 div h2',{y:"-100vh",duration: 1})
            .from('.section2 div h2 span:last-child',{y:"-100vh", duration: 1},"-=1")
            .from('.section2 div p', {scale:0, opacity:0, duration:2})


const senction3Tl = gsap.timeline({
        scrollTrigger:{
        trigger:".section3",
        start:"top center",
        end: "bottom 50%",
        toggleActions:"play complete reverse reverse"
    }
})

senction3Tl.fromTo('.section3 div h2',{scale: 5, x:"-100vw", opacity: 0},{scale:1, x:0,opacity: 1,duration: 2})
        //    .fromTo('.section3 p span',{y:"100vh"},{y:0,stagger: 0.3})
        //     .to('.section3 p span',{backgroundColor:"white", color: "black"},"<")
          .fromTo('.section3 p span', 
    {y: "100vh",opacity:0, backgroundColor: "transparent", color: "white"}, // set start colors explicitly
    {y: 0, opacity:1,stagger: 0.3, backgroundColor: "white", color: "black", duration: 4})




const horizontalTl = gsap.timeline({
    scrollTrigger:{
        trigger:".horizontal-sections",
        scrub: true,
        end: "bottom",
        pin: true
    }
})

horizontalTl.to(".horizontal-sections",{xPercent:-50})


const section4Tl = gsap.timeline({  
    scrollTrigger:{
        trigger:".section4",
        start:"bottom 40%",
        toggleActions:"play pause reverse pause "
    }
})

section4Tl.from(".portfolio-item",{x:"100vw",opacity:0.5,duration: 3,stagger:0.4})


// section 5
const selector =  document.querySelector(".section5 div h2")
const letters = selector.textContent.split('')

selector.innerHTML=""

letters.forEach(el=>{
    const span = document.createElement('span')
    span.innerHTML= el
    span.style.minWidth = "1.5rem"
    selector.appendChild(span)
})

const section5Tl= gsap.timeline({
    scrollTrigger:{
        trigger:".section5",
        start: "top top",
        pin: true,
        scrub: true
    }
})

section5Tl.from('.section5 div h2 span',{y:"-100vh", stagger: 0.3, duration: 2})
        .from(".section5 div p",{y:"100vh", opacity: 0.4})
        .from(".contact-btn",{scale: 0})
        .from(".section5",{backgroundPositionX:"100vw", duration: 3})
        .to(".section5",{backgroundColor:"black"},"<")


