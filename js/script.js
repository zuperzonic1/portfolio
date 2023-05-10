// background cloud animation

let backgroundCloud = "#background-cloud";
let deg = gsap.utils.random(25, 115);
let deg2 = gsap.utils.random(218, 320);
gsap.fromTo('#background-cloud',{
    duration: 3,
    fill: "red",
    opacity: .5,
},{
    duration: 3,
    // fill: "green",
    opacity: 1,
    repeat: -1,
    yoyo: true,

});

// flashing-but animation

let flashingBut = "#flashing-but";
gsap.To('#flashing-but',{
    duration: 1,
    fill: "green",
    opacity: 1,
    repeat: -1,
    yoyo: true,
});
