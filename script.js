
function scroller() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}



scroller();

gsap.to(".bottle", {
    scrollTrigger: {
        trigger: ".bottle",
        scroller: "#main",
        pin: true,
        start: "top 10%",
        end: "top -480%",
        scrub: 2
    },
    rotate: -15,
})
gsap.to(".bottle", {
    scrollTrigger: {
        trigger: ".bottle",
        scroller: "#main",
        start: "top 9%",
        scrub: 2,
        end: "top 15%"
    },
    scale: "0.60",
})



