console.log('sanjay');

// confirm("vsjdvjsv sjgdsyhg")

// if ( confirm("Are you sure ?") ){
//     console.log("OK clicked")
// }else{
//     console.log("Cancel was clicked")
// }

// let name = prompt();
// console.log(name)


// // location.reload();
// window.addEventListener('online', (event) => {
//     console.log("You are now connected to the network.");
// });
// window.addEventListener('offline', (event) => {
//     console.log("You are not connected to the network.");
// });
// window.ononline = (event) => {
//     console.log("The network connection has been lost.arsdtjh");
//   };

var doc = document.querySelector('#contact');
console.log(doc)

var Submiting = doc.addEventListener('submit',submit);

 function submit(e){
    e.preventDefault();

    let name = document.querySelector('#name').value;
    console.log(name)

    let em = document.querySelector('input#email').value;
    if(em === 'sanju@gmail.com'){
        var textA = document.querySelector('textarea#message').value;
    }else {alert("this is not Authorized email.")}
    console.log(em);
    console.log(textA);
    alert('You Submited a  Form.');
 }

