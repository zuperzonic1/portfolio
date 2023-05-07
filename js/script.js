
// // Emoji 1     *************************************************************************
// let box1 = document.getElementById("box1");

// let glasses = "#glasses";
// gsap.set(glasses,{
//     transformOrigin: "center"
// });

// let glassesTimeline = gsap.to(glasses,{
//     duration: 1,
//     y: -75,
//     // repeat: -1,
//     yoyo: true,
//     ease: "none",
//     paused: true,
// });

// let eyes = "#eyes";
// gsap.set(eyes,{
//     transformOrigin: "center"
// });

// let eyesTimeline = gsap.to(eyes,{
//     duration: 1,
//     scaleY: 0.5,
//     repeat: -1,
//     yoyo: true,
//     paused: true,
//     // onComplete: console.log("done eyes")
// });

// let eyeball1 = "#eyeball1";
// gsap.set(eyeball1,{
//     transformOrigin: "center"
// });

// let eyeball2 = "#eyeball2";
// gsap.set(eyeball2,{
//     transformOrigin: "center"
// });


// let eyeball1Timeline = gsap.to(eyeball1,{
//     x: -10,
// },{
//     duration: 1,
//     x: 10,
//     repeat: -1,
//     paused: true,
//     yoyo: true,
//     ease: "none"
//     // paused: true,
// });

// let eyeball2Timeline = gsap.to(eyeball2,{
//     x: -10,
// },{
//     duration: 1,
//     x: 10,
//     paused: true,
//     repeat: -1,
//     yoyo: true,
//     ease: "none"

// });

// let mouth = "#mouth";
// gsap.set(mouth,{
//     transformOrigin: "center",
// });

// let mouthTimeline = gsap.to(mouth,{
//     duration: 2,
//     scaleY: 0.5,
//     repeat: -1,
//     yoyo: true,
//     paused: true,
// });

// let toggle1 = false; 
// console.log(`Box1: ${toggle1}`);

// box1.addEventListener("click", function(){
//     // console.log("click!");
//     if(toggle1 === false){
//         toggle1 = true;
//         console.log(`Box3: ${toggle1}`);
//         glassesTimeline.play();
//         eyesTimeline.play();
//         eyeball1Timeline.play();
//         eyeball2Timeline.play();
//         mouthTimeline.play();
//     } else {
//         toggle1 = false;
//         console.log(`Box1: ${toggle1}`);
//         glassesTimeline.reverse();
//         eyesTimeline.pause();
//         eyeball1Timeline.pause();
//         eyeball2Timeline.pause();
//         mouthTimeline.pause();
//     }
// });



// // Emoji 2 *************************************************************************
// let box2 = document.getElementById("box2");

// let eyes1 = "#eyes1";
// let eyes1Timeline = gsap.from(eyes1,{
//     duration: 1,
//     scaleY: 1.5,
//     // repeat: -1,
//     yoyo: true,
//     paused: true,
// })

// let glasses1 = "#glasses1";
// let glasses1Timeline = gsap.fromTo(glasses1,{
//     y:5,
//     x:5,
// },{
//     duration: 1,
//     y:-5,
//     x:-5,
//     repeat: -1,
//     yoyo: true,
//     paused: true,
// })


// let tear1 = "#tear1";
// let tear1Timeline = gsap.fromTo(tear1,{
//     y:7,
//     opacity: 0,
// },{
//     duration: .5,
//     opacity: 1,
//     repeat: -1,
//     yoyo: true,
//     paused: true,
// })

// let tear2 = "#tear2";
// let tear2Timeline = gsap.fromTo(tear2,{
//     y:7,
//     opacity: 0,
// },{
//     duration: .5,
//     opacity: 1,
//     repeat: -1,
//     yoyo: true,
//     paused: true,
// })


// let mouth1 = "#mouth1";
// gsap.set(mouth1,{
//     transformOrigin: "center",
// });

// let mouth1Timeline = gsap.to(mouth1,{
//     duration: 1,
//     y: -10,
//     scaleY: 0.5,
//     scaleX: 1.5,
//     repeat: -1,
//     yoyo: true,
//     paused: true,
//     })

//     let toggle2 = false;
//     console.log(`Box2: ${toggle2}`);

//     box2.addEventListener("click", function(){
//         // console.log("click!");
//         if(toggle2 === false){
//             toggle2 = true;
//             console.log(`Box2: ${toggle2}`);
//             eyes1Timeline.play();
//             glasses1Timeline.play();
//             tear1Timeline.play();
//             tear2Timeline.play();
//             mouth1Timeline.play();
//         } else {
//             toggle2 = false;
//             console.log(`Box2: ${toggle2}`);
//             eyes1Timeline.pause();
//             glasses1Timeline.pause();
//             tear1Timeline.pause();
//             tear2Timeline.pause();
//             mouth1Timeline.pause();
//         }
//     });




// // Emoji 3 *************************************************************************
// let box3 = document.getElementById("box3");

// let doggo1 = "#doggo1";
// gsap.set(doggo1,{
//     transformOrigin: "center"
// });

// let doggo1Timeline = gsap.to(doggo1,{
//     duration: 1,
//     y: -90,
//     // repeat: -1,
//     // yoyo: true,
//     paused: true,
// })


// let toung = "#toung";
// let toungTimeline = gsap.to(toung,{
//     duration: .5,
//     y: -2,
//     repeat: -1,
//     yoyo: true,
//     paused: true,
// })

// let toggle3 = false; 
// console.log(`Box3: ${toggle3}`);

// box3.addEventListener("mouseenter", function(){
//     // console.log("hover in!");
//     toggle3 = true;
//     console.log(`Box3: ${toggle3}`);
//     doggo1Timeline.play();
//     toungTimeline.play();
// });

// box3.addEventListener("mouseleave", function(){
//     // console.log("hover out!");
//     toggle3 = false;
//     console.log(`Box3: ${toggle3}`);
//     doggo1Timeline.reverse();
//     toungTimeline.pause();
// });

// // Emoji 4 *************************************************************************
// let box4 = document.getElementById("box4");

// let doggo = "#doggo";
// let doggoTimeline = gsap.fromTo(doggo,{
//     duration: 1,
//     x: 2,
//     repeat: -1,
// },{
//     duration: 1,
//     x: -2,
//     repeat: -1,
//     yoyo: true,
//     paused: true,
// }) ;


// let heart2 = "#heart2";
// let heart2Timeline = gsap.from(heart2,{
//     duration: .5,
//     opacity: 0,
//     // repeat: -1,
//     // yoyo: true,
//     paused: true,
// });

// let heart1 = "#heart1";
// let heart1Timeline = gsap.from(heart1,{
//     duration: .5,
//     opacity: 0  ,
//     // repeat: -1,
//     // yoyo: true,
//     paused: true,
// });


// let toggle4 = false; 
// console.log(`Box4: ${toggle4}`);

// box4.addEventListener("click", function(){
//     // console.log("click!");
//     if(toggle4 === false){
//         toggle4 = true;
//         console.log(`Box4: ${toggle4}`);
//         doggoTimeline.play();
//         heart2Timeline.play();
//         heart1Timeline.play();
//     } else {
//         toggle4 = false;
//         console.log(`Box4: ${toggle4}`);
//         doggoTimeline.pause();
//         heart2Timeline.reverse();
//         heart1Timeline.reverse();
//     }
// });


// // Emoji 5 *************************************************************************

// let box5 = document.getElementById("box5");

// let dogohand1 = "#dogohand1";
    
// gsap.set(dogohand1,{
//     transformOrigin: "center",
// });

// let dogohand1Timeline = gsap.to(dogohand1,{
//     duration: 2,
//     y: 70,
//     x: 10,
//     // repeat: -1,
//     yoyo: true,
//     rotate: -90,
//     paused: true,
// });

// let dogohand2 = "#dogohand2";

// gsap.set(dogohand2,{
//     transformOrigin: "center",
// });

// let dogohand2Timeline = gsap.to(dogohand2,{
//     duration: 2,
//     y: 70,
//     x: -10,
//     yoyo: true,
//     rotate: 90,
//     // repeat: -1,
//     paused: true,
// });

// let toung2 = "#toung2";
// let toung2Timeline = gsap.from(toung2,{
//     duration: 2,
//     scaleY: 0.5,
//     y: -2,
//     // repeat: -1,
//     // yoyo: true,
//     paused: true,
// })

// let toggle5 = false;
//     console.log(`Box5: ${toggle5}`);

//     box5.addEventListener("click", function(){
//         // console.log("click!");
//         if(toggle5 === false){
//             toggle5 = true;
//             console.log(`Box5: ${toggle5}`);
//             dogohand1Timeline.play();
//             dogohand2Timeline.play();
//             toung2Timeline.play();
//         } else {
//             toggle5 = false;
//             console.log(`Box5: ${toggle5}`);
//             dogohand1Timeline.reverse();
//             dogohand2Timeline.reverse();
//             toung2Timeline.reverse();
//         }
//     });

// // Emoji 6 *************************************************************************

// let box6 = document.getElementById("box6");

// let baloon1 = "#baloon1";
// let baloon1Timeline = gsap.fromTo(baloon1,{
//     duration: 3,
//     y: 180,
// },{
//     duration: 3,
//     y: -200,
//     ease: "none",
//     repeat: -1,
//     paused: true,
// });

// let baloon2 = "#baloon2";
// let baloon2Timeline = gsap.fromTo(baloon2,{
//     duration: 5,
//     y: 180,
// },{
//     duration: 5,
//     y: -200,
//     ease: "none",
//     repeat: -1,
//     paused: true,
// });

// let baloon3 = "#baloon3";
// let baloon3Timeline = gsap.fromTo(baloon3,{
//     duration: 4,
//     y: 180,
// },{
//     duration: 4,
//     y: -200,
//     ease: "none",
//     repeat: -1,
//     paused: true,
// });

// let bdToung = "#bd-toung";
// let bdToungTimeline = gsap.to(bdToung,{
//     duration: .5,
//     scaleY: 0.5,
//     y: -2,
//     repeat: -1,
//     yoyo: true,
//     paused: true,
// });

// let lEar = "#l-ear";
// gsap.set(lEar,{
//     transformOrigin: "center",
// });

// let lEarTimeline = gsap.from(lEar,{
//     duration: 1,
//     rotate: -30,
//     repeat: -1,
//     yoyo: true,
//     paused: true,
// });

// let rEar = "#r-ear";
// gsap.set(rEar,{
//     transformOrigin: "center",
// });

// let rEarTimeline = gsap.from(rEar,{
//     duration: 1,
//     rotate: 28,
//     repeat: -1,
//     yoyo: true,
//     paused: true,
// });


// let toggle6 = false;
//     console.log(`Box6: ${toggle6}`);

//     box6.addEventListener("click", function(){
//         // console.log("click!");
//         if(toggle6 === false){
//             toggle6 = true;
//             console.log(`Box6: ${toggle6}`);
//             baloon1Timeline.play();
//             baloon2Timeline.play();
//             baloon3Timeline.play();
//             bdToungTimeline.play();
//             lEarTimeline.play();
//             rEarTimeline.play();

//         } else {
//             toggle6 = false;
//             console.log(`Box6: ${toggle6}`);
//             baloon1Timeline.pause();
//             baloon2Timeline.pause();
//             baloon3Timeline.pause();
//             bdToungTimeline.pause();
//             lEarTimeline.pause();
//             rEarTimeline.pause();
//         }
//     });

// // Emoji 7 *************************************************************************

// let box7 = document.getElementById("box7");

// let lHand = "#l-hand";
// let lHandTimeline = gsap.from(lHand,{
//     duration: 1,
//     rotate: -30,
//     // repeat: -1,
//     // yoyo: true,
//     paused: true,
// });

// let rHand = "#r-hand";
// let rHandTimeline = gsap.from(rHand,{
//     duration: 1,
//     rotate: 40,
//     // repeat: -1,
//     // yoyo: true,
//     paused: true,
// });

// let plate = "#plate";
// let plateTimeline = gsap.to(plate,{
//     duration: 1,
//     // rotate: 10,
//     y: -100,
//     // repeat: -1,
//     // yoyo: true,
//     paused: true,
// });


// let toungFood = "#toung-food";
// let toungFoodTimeline = gsap.to(toungFood,{
//     duration: 1,
//     scaleY: 0.7,
//     y: -2,
//     repeat: -1,
//     yoyo: true,
//     paused: true,
// });


// let toggle7 = false;
//     console.log(`Box7: ${toggle7}`);

//     box7.addEventListener("click", function(){
//         // console.log("click!");
//         if(toggle7 === false){
//             toggle7 = true;
//             console.log(`Box7: ${toggle7}`);
//             lHandTimeline.play();
//             rHandTimeline.play();
//             plateTimeline.play();
//             toungFoodTimeline.play();
//         } else {
//             toggle7 = false;
//             console.log(`Box7: ${toggle7}`);
//             lHandTimeline.reverse();
//             rHandTimeline.reverse();
//             plateTimeline.reverse();
//             toungFoodTimeline.reverse();
//         }
//     });





// // Emoji 8 *************************************************************************

// let box8 = document.getElementById("box8");

// let background = "#background";
// let backgroundTimeline = gsap.from(background,{
//     duration: 5,
//     fill: "#c6c34f",
//     // y: -100,
//     paused: true,
// });

// let table = "#table";
// let tableTimeline = gsap.fromTo(table,{
//     // duration: 2,
//     fill: "#ea8553",
//     // y: -100,
//     // paused: true,
//  },{
//     duration: 5,
//     fill: "#130202",
//     // y: -100,
//     paused: true,
// });


// let gunHands = "#gun-hands";
// let gunHandsTimeline = gsap.from(gunHands,{
//     duration: 4,
//     y: 100,
//     paused: true,
// });

// let gun = "#gun";
// let gunTimeline = gsap.fromTo(gun,{
//     duration: 2,
//     rotate: 1,
//     // y: 100,
//     // paused: true,
// },{
//     duration: 2,
//     rotate: -1,
//     // y: 100,
//     // paused: true,
//     repeat: -1,
//     yoyo: true,
// });

// let toggle8 = false;
//     console.log(`Box8: ${toggle8}`);

//     box8.addEventListener("click", function(){
//         // console.log("click!");
//         if(toggle8 === false){
//             toggle8 = true;
//             console.log(`Box8: ${toggle8}`);
//             backgroundTimeline.play();
//             tableTimeline.play();
//             gunHandsTimeline.play();
//             gunTimeline.play();
//         } else {
//             toggle8 = false;
//             console.log(`Box8: ${toggle8}`);
//             backgroundTimeline.reverse();
//             tableTimeline.reverse();
//             gunHandsTimeline.reverse();
//             gunTimeline.reverse();
//         }
//     });

// // Icon 1 *************************************************************************

// gsap.set("#min",{
//     transformOrigin: "50% 100%",
//     });

//     gsap.fromTo("#min",{
//      rotate: -360,   
//     }
//     ,{
//     duration: 40,
//     rotate: 360,
//     repeat: -1,
//     ease: "none",
//     // ease: "none",
//     });


//     gsap.set("#sec",{
//     transformOrigin: "50% 100%",
//     });

//     gsap.fromTo("#sec",{
//     //  rotate: -,   
//     }
//     ,{
//     duration: 10,
//     rotate: 360,
//     repeat: -1,
//     ease: "none",
//     // ease: "none",
//     });

//     gsap.set("#hour",{
//         transformOrigin: "50% 100%",
//         y: 5,
//         x: 2,
//         });
    
//         gsap.fromTo("#hour",{
//         //  rotate: -,   
//         }
//         ,{
//         duration: 40,
//         rotate: 360,
//         repeat: -1,
//         ease: "none",
//         // ease: "none",
//         });


// // Icon 2 *************************************************************************

// gsap.set("#mainCirc",{
//     transformOrigin: "center",
//     dropShadow: "8",
//     });

// gsap.to("#mainCirc",{
//     duration: 15,
//     rotate: 360,
//     repeat: -1,
//     ease: "none",
//     });




// gsap.set("#centerCirc",{
//     transformOrigin: "center",
//     });

//     gsap.to("#centerCirc",{
//         duration: 5,
//         rotate: 360,
//         repeat: -1,
//         ease: "none",
//         });




// gsap.set("#circ1",{
//     transformOrigin: "center",
//     });

//     gsap.to("#circ1",{
//         duration: 10,
//         rotate: 360,
//         repeat: -1,
//         ease: "none",
//         });

// gsap.set("#circ2",{
//     transformOrigin: "center",
//     });
//     gsap.to("#circ2",{
//         duration: 10,
//         rotate: 360,
//         repeat: -1,
//         ease: "none",
//         });

// gsap.set("#circ3",{
//     transformOrigin: "center",
//     });
//     gsap.to("#circ3",{
//         duration: 10,
//         rotate: 360,
//         repeat: -1,
//         ease: "none",
//         });

// gsap.set("#circ4",{
//     transformOrigin: "center",
//     })
//     gsap.to("#circ4",{
//         duration: 10,
//         rotate: 360,
//         repeat: -1,
//         ease: "none",
//         });

// gsap.to("#background-i2",{
//     duration: 1,
//     fill: "red",
//     repeat: -1,
//     yoyo: true,
//     ease: "none",
//     });
//     gsap.to("#background-i2",{
//         duration: 1,
//         fill: "blue",
//         repeat: -1,
//         yoyo: true,
//         ease: "none",
//         });


// // Icon 3 *************************************************************************

// gsap.set("#music",{
//     transformOrigin: "center",
//     y: 55,
//     opacity: 0,
//     });

//     gsap.to("#music",{
//         duration: 10,
//         y: -160,
//         opacity: 4,
//         repeat: -1,
//         // ease: "none",
//         });

//     gsap.set("#off",{
//         transformOrigin: "center",
//         opacity: 0,
//         });

//     gsap.set("#led",{
//         fill: "#00FF00",
//         });

//     gsap.to(".uuid-663b5d7e-2b50-4583-ab35-6cca2171dd2b",{
//         transformOrigin: "center",
//         duration: .2,
//         scale: 1.1,
//         repeat: -1,
//         yoyo: true,
//         ease: "none",
//         });



// // Icon 4 *************************************************************************

// gsap.set("#bulb",{
//     transformOrigin: "center",
// });
// gsap.fromTo("#bulb",{
//     fill: "#efefef",
// },{
//     duration: 1,
//     fill: "#f4ff69",
//     repeat: -1,
//     yoyo: true,
//     ease: "none",
//     tweenChanges: false,
// });

// gsap.from("#highlight",{
//     duration: 1,
//     opacity: 0,
//     repeat: -1,
//     yoyo: true,
// });

// gsap.from("#pull",{
//     duration: 1,
//     scaleY: 0.7,
//     repeat: -1,
//     yoyo: true,
// });
