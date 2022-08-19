gsap.registerPlugin(ScrollTrigger);

gsap.from(".jump", {duration: 1, opacity:0, y: 150});
gsap.from(".circle", {duration: 1, opacity:0, x: -150});
gsap.from(".topright", {duration: 1, opacity:0, x: 150});
gsap.from(".bottomleft", {duration: 1, opacity:0, y: 150});
gsap.from(".title", {duration: 1, opacity:0, y: -150});
gsap.from("header", {duration: 1, opacity:0});


gsap.from(".section-1", {
    scrollTrigger: {
        trigger: '.section-1',
        start: "25% bottom"
    },
    duration: 2, 
    y: 150, 
    opacity: 0
});

gsap.from("#products", {
    scrollTrigger: {
        trigger: '#products',
        start: "25% bottom"
    },
    duration: 2, 
    y: 150, 
    opacity: 0
});

gsap.from("#ootd-sm", {
    scrollTrigger: {
        trigger: '#ootd-sm',
        start: "25% bottom"
    },
    duration: 2, 
    y: 150, 
    opacity: 0
});

gsap.from("#ootd-1", {
    scrollTrigger: {
        trigger: '#ootd-1',
        start: "25% bottom"
    },
    duration: 2, 
    y: 150, 
    opacity: 0
});

gsap.from("#ootd-2", {
    scrollTrigger: {
        trigger: '#ootd-2',
        start: "25% bottom"
    },
    duration: 2, 
    y: 150, 
    opacity: 0
});

gsap.from("#ootd-3", {
    scrollTrigger: {
        trigger: '#ootd-3',
        start: "10% bottom"
    },
    duration: 2, 
    y: 150, 
    opacity: 0
});

gsap.from("#ootd-4", {
    scrollTrigger: {
        trigger: '#ootd-4',
        start: "10% bottom"
    },
    duration: 2, 
    y: 150, 
    opacity: 0
});