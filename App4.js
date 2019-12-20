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
    // if(em === 'sanju@gmail.com'){
    //     var textA = document.querySelector('textarea#message').value;
    // }else {alert("this is not Authorized email.")}
    var textA = document.querySelector('textarea#message').value;
    console.log(em);
    console.log(textA);
    
    localStorage.setItem('name', name)
    alert(localStorage.getItem('name'));
 }

 
// var ajaxs = document.querySelector('#ajaxs');
// console.log(ajaxs)

// document.querySelector('button#a').addEventListener('click', function(){
//    fetch("360Science_Gravimetric Analysis.pdf")
//    .then(response => response.text())
//    .then(text => console.log( text ))
//    .catch( error => console.log(error))
// });

// let uid = 1;

// document.querySelector('button#b').addEventListener('click', function(){
//     fetch(`https://jsonplaceholder.typicode.com/todos/${uid}`)
//     .then(response => response.json())
//     .then(text => console.log( text ))
//     .catch( error => console.log(error))
//  });


//  let post = {
//     title: 'some thing wanna update',
//     body: 'some body',
//     userId: 99
//  }
 
// document.querySelector('button#c').addEventListener('click', function(){
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify(post),
//         headers:{
//             'Content-Type' : 'application/json'
//         }
//     })
//     .then(response => response.json())
//     .then(json => console.log( json ))
//     .catch( error => console.log(error))
//  });



//  let updatePost = {
//     title: 'some thing wanna update',
//     body: 'some body',
//     userId: 1,
//     id: 1
//  }
 
// document.querySelector('button#d').addEventListener('click', function(){
//     fetch('https://jsonplaceholder.typicode.com/posts/1', {
//         method: 'PUT',
//         body: JSON.stringify(updatePost),
//         headers:{
//             'Content-Type' : 'application/json'
//         }
//     })
//     .then(response => response.json())
//     .then(json => console.log( json ))
//     .catch( error => console.log(error))
//  });



 
// document.querySelector('button#e').addEventListener('click', function(){
//     fetch('https://jsonplaceholder.typicode.com/posts/1', {
//         method: 'DELETE',
//     })
//     .then(response => console.log( response.json()))

//  });

// localStorage.setItem("name", 'sanjay');

// console.log(localStorage.getItem('name'))


