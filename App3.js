console.log('----------App3.js-----------------------')
// let today = new Date;

// console.log("day",today.getDay()+1)
// console.log('year', today.getFullYear());
// console.log("month", today.getMonth() + 1);
// console.log('date', today.getDate())


// {/* <script type = "text/javascript" > 
//     // JavaScript program to illustrate  
//     // calculation of no. of days between two date  
  
//     // To set two dates to two variables 
//     var date1 = new Date("06/30/2019"); 
// var date2 = new Date("07/30/2019"); 
  
// // To calculate the time difference of two dates 
// var Difference_In_Time = date2.getTime() - date1.getTime(); 
  
// // To calculate the no. of days between two dates 
// var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
  
// //To display the final no. of days (result) 
// document.write("Total number of days between dates  <br>"
//                + date1 + "<br> and <br>" 
//                + date2 + " is: <br> " 
//                + Difference_In_Days); 
  
// </script>  */}
// // console.log(today)
// // console.log( today.getDay());
// // let myDOB = new Date('oct 19 1997');
// // console.log(myDOB)
// // console.log( today.getFullYear())
// // let pyear = today.getFullYear();
// // let age = Math.abs(myDOB - today);
// // console.log(age) 

// var dob = '19971019';
// var year = Number(dob.substr(0, 4));
// var month = Number(dob.substr(4, 2));
// var day = Number(dob.substr(6, 2));
// // var today = new Date;
// console.log('today',today)
// console.log(today)
// console.log( today.getDate(), today.getMonth()+1, today.getFullYear())
// console.log( today.getMonth());
// var age = today.getFullYear() - year;
// var monage = ( ( today.getMonth() ) - month );
// // var dayage = today.getDay() - day;
// var calDate = today.getDay() - day;
// // var dateage = calDate / 24 * 3600 * 1000;
// // var dateage = today.getDate() - day;

// if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
//   age--;
// }
// console.log('----------------')
// console.log('year',age);
// console.log('month',Math.abs(monage + 1))
// console.log('day',calDate)

// console.log('----------------')
// console.log('year',year);
// console.log('month',Math.abs(month))
// console.log('date',day)


// var date1 = new Date('10/19/1997');
// var date2 = new Date();
// var dating =  date2.getDate() - date1.getDate();

// console.log('----------------')

// if(date2.getMonth() === 3 || 5 || 8 || 10 ){
//     console.log("30 days")
// }else
// if( date2.getMonth() === 0 || 2 || 4  || 6 || 7 || 9 || 11 ){
//     console.log(31 - date2.getDate() )
// }else if( date2.getMonth() == 1 && date2.getFullYear() / 4 == 0 ){
//     console.log("29 days")
// }else{
//     console.log("28 days")
// }

// var diffDays = 31 - dating;
// console.log(diffDays)
// console.log('diffdays',diffDays, '1',date1, '------',date2)


var NowDate = new Date();
var BirthDate = new Date('10/19/1997');

console.log('Current Month',NowDate.getMonth() +1 );
console.log('Current Date',NowDate.getDate() );
console.log('Current Year',NowDate.getFullYear() );

console.log('---------------------------------');

console.log('Birth Date Month',BirthDate.getMonth() +1 );
console.log('Birth Date Date',BirthDate.getDate() );
console.log('Birth Date Year',BirthDate.getFullYear() );

console.log('---------------------------------');

var age = NowDate.getFullYear() - BirthDate.getFullYear();
var monage = NowDate.getMonth() - BirthDate.getMonth();
var calDate = NowDate.getTime() - BirthDate.getTime();
var dateage = calDate / 24 * 3600 * 1000;

if (NowDate.getMonth() < BirthDate.getMonth() || (NowDate.getMonth() == BirthDate.getMonth() && NowDate.getDate() < BirthDate.getDay())) {
  age--;
}


console.log('Year- ',age)
console.log('month- ',(11 - Math.abs(monage + 1)))
console.log('Days- ',dateage)

console.log("cur time",NowDate.getTime())
console.log("birth time",BirthDate.getTime())

console.log(calDate / (3600 * 24 * 1000))

console.log('----------App3.js(End)-----------------------')
console.log('----------(Start)-----------------------')


