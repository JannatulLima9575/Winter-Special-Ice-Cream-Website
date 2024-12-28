var tl = gsap.timeline({
    scrollTrigger:{
        trigger: "#s1",
        start: "0% 80%",
        end: "50% 50%",
        scrub: true,
    }
})

var tl1 = gsap.timeline({
    scrollTrigger:{
        trigger: "#s2",
        start: "0% 80%",
        end: "50% 50%",
        scrub: true,
    }
})
var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: "#s3",
        start: "0% 65%",
        end: "50% 50%",
        scrub: true,
    }
})

tl.to(".hero-center-image",{
    top: "138%",
    left: "54%",
    width: "13vw",
    rotate: "0",
})
tl1.to(".hero-center-image",{
    top: "205%",
    left: "26.2%",
    width: "9.5vw",
})
tl2.to(".hero-center-image",{
    top: "251%",
    left: "30%",
    width: "17vw",
    rotate: "-50deg",
})