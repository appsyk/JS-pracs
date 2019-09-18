console.log('----------age2.js(Start)-----------------------')

let today = new Date;

console.log('year', today.getFullYear());
console.log("month", today.getMonth() + 1);
console.log('date', today.getDate())

// var dob = '19971213';
// var year = Number(dob.substr(0, 4));
// var month = Number(dob.substr(4, 2));
// var day = Number(dob.substr(6, 2));

var dob = new Date('10/19/1997');
var year = dob.getFullYear();
var month = dob.getMonth();
var day = dob.getDate();
console.log(month + 1 )

var age = today.getFullYear() - dob.getFullYear();
var monage = today.getMonth() - dob.getMonth();
var dateage = today.getDate() - dob.getDate();

var dte = today.getTime() - dob.getTime();
var dte2 = dte / (1000 * 24 * 3600);
console.log("dte",dte2)

if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
  age--;
}
console.log('----------------')
console.log('year',age);
if( today.getMonth() < dob.getMonth()){
console.log('month-',(11 - monage))
}else{
    console.log('month-',(monage) + 1 )
}
console.log('day',dateage)

console.log('----------------')
console.log('year',year);
console.log('month',Math.abs(month) + 1 )
console.log('date',day)





console.log('----------age2.js(End)-----------------------')