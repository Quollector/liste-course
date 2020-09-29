// Animation grid
gsap.timeline({
    repeat: -1,
    yoyo: true,
    defaults: {
        delay: 0.25,
        scaleX: 1.25,
        scaleY: 1.25,
        duration: 0.5 //Durée par défaut
    }
})
    .to('.pomme', {})
    .to('.pizza', {})
    .to('.salade', {})
    .to('.fraise', {})
    .to('.burger', {})
    .to('.pasteque', {})
    .to('.poulet', {})
    .to('.raisin', {})
    .to('.poivron', {});

// Animation formulaire
gsap.registerPlugin(ScrollTrigger);
    
gsap.to('.formulaire', {
    duration: 1,
    scrollTrigger:{
        start: '25% 75%',
        end: '75%',
        trigger: '.wrapper-formulaire',
        toggleActions: 'restart none none reverse'
    },
    opacity: 1
})

// Animation crayon
gsap.timeline({
    scrollTrigger:{      
        start: 'top bottom',
        end: '50% 50%',
        trigger: '.wrapper-formulaire',
        scrub: true
    },
    
})
.to('.crayon', {x: '900%', transform: 'rotate(-35deg)'})
.to('.wrapper-formulaire', {backgroundColor: '#fdf1ec'}, '<')