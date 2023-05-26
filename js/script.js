// background cloud animation

let backgroundCloud = "#background-cloud";
gsap.set('#background-cloud',{
    transformOrigin: "50% 50%",
    // fill: "rbg(0,0,0)",
    opacity: 0,
});
gsap.to('#background-cloud',{
    duration: 3,
    opacity: 1,
    repeat: -1,
    yoyo: true,
});

// flashing-but animation
let flashingBut = "flashing-but";

gsap.to(flashingBut,{
    duration: 1,
    fill: "rbg(0,255,0)",
});


// SKILLS SECTION
gsap.set("#react",{
    transformOrigin: "50% 50%",
});

gsap.fromTo("#react",{
    x: -1,
    y: 3,
    onComplete: console.log("react animation complete"),
},{
    x: 1,
    y: -3,
    duration: 1,
    rotate: 180,
    repeat: -1,
    yoyo: true,
    onComplete: console.log("react animation complete"),
});

gsap.set("#css",{
    transformOrigin: "50% 50%",
});

gsap.fromTo("#css",{
    x: -1,
    y: 3,
    onComplete: console.log("css animation complete"),
},{
    duration: 1,
    x: 1,
    y: -3,
    repeat: -1,
    yoyo: true,
    onComplete: console.log("css animation complete"),
});


gsap.fromTo("#javascript",{
    x: -1,
    y: 3,
    onComplete: console.log("js animation complete"),
},{
    duration: 1,
    x: 1,
    y: -3,
    repeat: -1,
    yoyo: true,
    onComplete: console.log("js animation complete"),
});

gsap.fromTo("#gsap",{
    x: -1,
    y: 3,
    onComplete: console.log("css animation complete"),
},{
    duration: 1,
    x: 1,
    y: -3,
    repeat: -1,
    yoyo: true,
    onComplete: console.log("css animation complete"),
});

