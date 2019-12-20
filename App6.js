var observer = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
        console.log('Element is fully visible in screen');
        var ani = document.querySelector('.second-section');
       
        ani.classList.replace('second-section', 'second-section1');
        // ani.classList.add('.second-section1');
        // ani.style.opacity('0');
        // var ani1 = document.querySelector('#one')
        // ani1.id.replace('#one', '#one1');

        // ani.classList.add('second-section1');
         console.log(ani,'dfdfdfdfdf')
        }
}, { threshold: [0.3] });

observer.observe(document.querySelector(".service-item"));


var observer = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
        console.log('Element is fully visible in screen');
        var ani = document.querySelector('.third-section');
       
        // ani.classList.replace('third-section', 'third-section1');
        ani.classList.add('third-section1');
        // ani.style.opacity('0');
         console.log(ani,'dfdfdfdfdf')
        }
}, { threshold: [0.4] });

observer.observe(document.querySelector(".third-section"));