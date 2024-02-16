var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "0% 95%",
    end: "50% 50%",
    scrub: true,
    // markers: true,
  },
});
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "0% 95%",
    end: "50% 50%",
    scrub: true,
    markers: true,
  },
});

tl.to("#fenta-can", { top: "120%", left: "8%", duration: 4 },"orange");
// tl2.to("#fenta-can", {top:"204%", left:"30%",  duration: 2})
tl2.to("#single-orange", { top: "110%", left: "30%", duration: 2 },"orange");
tl2.to("#full-orange", { top: "150%", left: "5%", duration: 2 },"orange");
tl2.to("#multiple-leaf", { top: "80%", left: "0%", duration: 2  },"orange");
tl2.to("#single-leaf", { top: "180%", left: "70%", duration: 2 },"orange");


var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".three",
      start: "0% 95%",
      end: "50% 50%",
      scrub: true,
      markers: true,
    },
  });

tl3.from('#sprite-card1', {top: "50%", left: "-50%", duration: 2},"cans");
tl3.from('#sprite-card2', {top: "50%", right: "-50%", duration: 2},"cans");
tl3.from('.sprite-lemon1', {top: "0%", left: "-50%", duration: 2 ,},"cans");
tl3.from('.sprite-lemon2', {top: "0%", left: "50%", duration: 2 ,},"cans");
tl3.to('#fenta-can', {top: "204%", left: "30%", duration: 2},"cans");
tl3.to('#single-orange', {top: "204%", left: "35%", duration: 2},"cans");