navigator.geolocation.getCurrentPosition(getcoords);

function getcoords(position){
   console.log(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`)
}

// if(window.Notification){
// Notification.requestPermission()
//    .then( function () {
//       if(Notification.permission === 'granted'){
//          new Notification("hello from notification")
//       }
//    })
// }

let notify = new Notification('hey from JS', {
   body:'this is Javascript testing',
   icon: './2091_ziggy/img/01-item.jpg'
} )

if(window.Notification){
   Notification.requestPermission()
      .then( function () {
         if(Notification.permission === 'granted'){
            notify
         }
      })
   }

   setTimeout(() => {
      notify.close();
   }, 2000);

   notify.addEventListener('click', clickEv);
   var no = false;
   function clickEv(){
      let no = true;
      var tagi = '';
     var goog = document.querySelector('#goog');
     if( no === true ){
      window.open('https://www.google.com/');
      // window.location = 'https://www.google.com/';
      //   tagi = tagi + `<a href="https://www.google.com/" target="_blank">Google</a>`
      //   goog.innerHTML = tagi;
     }else{
      console.log(flase,'hai bhai')

     }
   }