new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    easing: 'easeInOutCubic',
    anchors: ['section1'],
    navigationPosition: 'left',
  
    

    /* This part is for titles, happens each section. When leave origin or dest animation is triggered*/ 
    onLeave: (origin,destination,direction) =>{

        /* const = reference to a value, in this case the destination section */  
        const section = destination.item;

        /* Gets the h1 from each section*/
        const title = section.querySelector('h1');

        /*Creates a timeline (tl) and then a starting position and end position for y & opacity*/
        const tl = new TimelineMax({delay: 0.4});
        tl.fromTo(title,0.3,{y:'30', opacity:0}, {y:0, opacity:1});

        /*Section in js starts at 0, not 1. This is 1st dest, s1. This tells it to select all i1
        if(destination.index === 0){
            const i1 = document.querySelectorAll('.i1');
            const description = document.querySelector('.description');
        takes i1, gives duration of .5s ad moves it from 80% - 0%
            tl.fromTo(i1, 0.6, {x:'80%'}, {x:'0%'})

           /*THIS WILL FADE 
            .fromTo(i1, 0, {opacity: 0}, {opacity: 1}) 
         
       
        }*/

        
    }

 
})