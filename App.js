let fruit=[{
    nm:'abc', ts:'good'
},{
    nm:'xyz', ts:'best'
}];
let b=fruit.map((e)=>{
    console.log('map',`${e.nm} is ${e.ts}.`);
})

for(let i=0; i<fruit.length; i++){
    console.log(`${fruit[i].nm} is ${fruit[i].ts}`)
}

let no= 20;
console.log(`${no} + 2 = ${no+2}`);

console.log('        star    tend  '.trim())
// --------------------------------------------------------------
console.log( '--------------' )

let a = Symbol();
let obj = {};
obj[a] = 123;
let bt= 123;
console.log( typeof obj[a], typeof a)
console.log(typeof bt)
console.log( '--------------' )

// ------------------------------------------------------------------
let no1= 6;
let no2= 65.6589;
console.log(typeof no1, typeof no2)
console.log(Number.isInteger(no1), Number.isInteger(no2))
// ------------------------------------------------------------------
console.log( '--------------' )

let score= 2;

// after increament- first render and then increament
console.log( score++ )//2
console.log( score )//3
console.log( score-- )//3
console.log( score )//2

//before increament- first increament and then render

console.log( score )//2
console.log( ++score )//3
console.log( score )//3
console.log( --score )//2
console.log( '--------------' )

// --------------------------------------------------------------------------
console.log("max Value that can JS handle: ", Number.MAX_VALUE )

console.log ( 'sanju' * 3 )// NaN- Not a Number
console.log( typeof NaN )// Number
console.log( '--------------' )

// ------------------------------------------------------------------------
// conversion between Number and String

console.log( '10' * 10 )//100 number
console.log( '10' + 10 )//1010 string
//convert
//string to number
console.log( Number( '11' ))//done
console.log( Number( 'String' ) )//NaN
console.log( +'10' )//done

//convert no to string
console.log( String(10) )//done
console.log( 10..toString() )//done

let cno = 23;
console.log( cno.toString() )//done
console.log( '--------------' )

// ----------------------------------------------------------------

let n1= 10.242342;
let n2= 22.123456;
console.log ( n1.toFixed(3) +' , '+ n2.toFixed(2) )//10.242 , 22.12

console.log( parseInt('10') )//10
console.log( parseInt('10.123') )//10

console.log( parseFloat('12') )//12
console.log( parseFloat('10.123') )//10.123

console.log( parseInt('sanju'), parseFloat('sanju') )//NaN NaN
console.log( '--------------' )
//----------------------------------------------------------------------

console.log(true)//true
console.log(!true)//false

console.log(!0) //true
console.log(!!0)//false

console.log( 'hi' && "hello" && 1 )//1 last true value
console.log( 'hi' && 0 && '' )// 1st falsy value

console.log( 'hi' || "hello" || 1 )//1st True value
console.log( "returns true val if any otherwise empty", '' || 0 || "" )// returns true val if any otherwise empty
console.log( '' || "hey" || 0 )

console.log( '--------------' )
//------------------------------------------------------------------------
let colors = [{nm:'green'},{nm: 'yellow'},{nm: 'white'},{nm: 'black'}];
console.log(colors);
console.log( colors[1] )

for( let i=0; i< colors.length; i++ ){
    console.log(colors[i].nm)
}

for( let it of colors ){
console.log(it.nm)
}
console.log("----");

let players = [ 'sachin', 'dhoni', 'saurav' ];

let as= players.map((v)=>{
    console.log(v);
})
console.log( '--------------' )
// ---------------------------------------------------------------------

function ixia(){
    console.log('ixia')
}
ixia();
//----------------------------------------------------------------------
let color = function (){
    console.log('shkdbhb');
}
color();
//----------------------------------------------------------------------
var word = 'ram';
let myStuff = (word) =>{
    console.log('bhbfhb', word)
}
myStuff(word);
//----------------------------------------------------------------------

var fun = function san(){
    return 'sanju';
}
console.log(fun)

//-----------------------------------------------------------------
var tot = 0;

let bts = (...tp) =>{
    // var tp = new Array();
    // var bts = (tp) =>{
    
        for (var ts of tp ){
        tot += ts;
    }
    return tot / tp.length;
} 
console.log(bts(1,2,3,4))

//------------------------------------------------------------------

function setVal (par){
    console.log(`hi ${par}`);
}

function sayHi (clbk){
    clbk('sanju');
}

sayHi(setVal);

var num = [201,304,154,12,111];

console.log(num.sort())
console.log(num.sort((a,b)=> a-b))

//----------------------------------------------------------------------

let heroes = ['Ironman', 'Spidey', "superman", 'batty'];

heroes.map((hero)=>{
    console.log(hero)
})


heroes.forEach((hero)=>{
    console.log(hero);
})

console.log('----------18/09/2019-----------------------')

