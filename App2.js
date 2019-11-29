let val = {
    nm: 'sanjay',
    age: 21,
    occupation: 'employee'
};

console.log("obj",val);

let personJSON = JSON.stringify(val);
console.log("stringify", personJSON)

let personObject = JSON.parse(personJSON)

console.log('JSON.parse',personObject)

//---------------------------------------------------
for( let i=0; i<=5; i++){
    console.log(Math.round(Math.random() * 10000))
    var a = (Math.ceil(Math.random() * 10000))
    var b = (Math.floor(Math.random() * 10000))
} 

console.log(`by ceil: ${a}, by floor: ${b}`)

// let shtyle = {
//     visibility: 'hidden',
//     height: '400px'
// }

// let precarica = [
// 				'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-yellow.png',
// 				'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-red.png',
// 				'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-pink.png',
// 				'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-green.png',
// 				'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-blue.png'
//             ];
//             // var ds = '';
//             var ds =  precarica.map((hr)=> {
//                 // console.log(hr)
//                 return `<img src='${hr}' alt="${hr}" class='pica' />`;
//             })
//             document.getElementById('mapi').innerHTML= ds;

console.log('----------18/09/2019-----------------------')
let patterns = /[sanjay]/;
console.log(patterns.test('sanjay'))
console.log(patterns.test('jaySan'))
console.log(patterns.test('SANJAY'))

let oat = /[Jj][Aa][Yy]/;

console.log(oat.test('jay'))
console.log(oat.test('ayj'))
console.log(oat.test('yaj'))

console.log('----------04/10/2019-----------------------')

function getNo(n){
    console.log( 'getNo', Math.floor(Math.random() * n));
    return Math.floor(Math.random() * n);
}

let food = ['mango','Apple','roti','beef','chicken']

let getMeat = new Promise((resolve, reject) => {
    let n = getNo(5);
    (n > 2) ? resolve(n) : reject(n);
}) ;

getMeat .then(result => console.log(`No meat ${food[result]}`))
.catch(result => console.log(`yes food ${food[result]}`))

function* exampleGenerator(){

}

function* fibonacci(a,b){
    let [prev, cur] = [a,b];
    while(true){
        [prev, cur] = [cur, prev+cur];
        yield cur;
    }
}

let seq = fibonacci(1,2);
console.log(seq.next())
console.log(seq.next())
console.log(seq.next())
console.log(seq.next())
console.log(seq.next())
console.log(seq.next())
console.log(seq.next())
console.log(seq.next())


console.log('----------04/10/2019-----------------------')


