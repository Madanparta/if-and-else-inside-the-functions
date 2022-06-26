// 1.TWO NUMBERS AND RETURN THE BIGGER.
// ANSWER.
// let fun = (a,b)=>{
//     let c = Math.max(a,b);
//     return c;
//   }
//   console.log(fun(10,56))

// 2.ODD AND EVEN NUMBER
// ANSWER.
// let oddEven = (a)=>{
//     if(a%2==0){
//       return 'ODD';
//     }else{
//       return 'EVEN';
//     }
//   }
// console.log(oddEven(22))


// 3.POSITIVE NUMBER AND NEGETIVE NUMBERS 
// ANSWER.
// let checkinNumber = (a)=>{
//     if(a>0)return "POSITIVE";return "NEGITIVE";
//   }
// console.log(checkinNumber(0))

// 4.DIVISIBLE BY 3 AND 5
// ANSWER
// let dividing=(a)=>{
//     if(a%3==0 || a%5==0)return "YES"; return "NO";
//   }
//   console.log(dividing(7))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 5.ABSOLUTE VALUE
// ANSWER.
// let obsoluteVlue =(n)=>{
//     let c = Math.abs(n);
//     if(n>0)return n;return c;
//   }
//   console.log(obsoluteVlue(-4))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 6.THIREE NUMBER FIND THE BIGEST.
// ANSWER.
// let bigInThree =(a,b,c)=>{
//     let takeABig = Math.max(a,b,c);
//     if(a>0 && b>0 && b>0)return (takeABig); return "sortu";
//   }
//   console.log(bigInThree(10,56,890));

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 7.FOUR NUMBER FIND BIGEST.
// ANSER.
// let bigInFour = (a,b,c,d)=>{
//     let forIntBig = Math.max(a,b,c,d);
//     if(a+b+c+d > 0)return (forIntBig);return ("Entering bellow number,")
//   }
//   console.log(bigInFour(67,45,90,00));

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 8.GIVEN THE THREE NUMBER FIND SECOUND SMALLEST NUMBER
// ANSWER.
// let secoundNum = (a,b,c)=>{
//     if(a>b && a>c)return b; return c;
//     if(b>a && b>c)return a; return b;
//     if(c>a && c>b)return a; return b;
//   }
//   console.log(secoundNum(12,43,22))
  
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 9.FINDING ANGLES.
// ANSWER.

// let angleOfTringle = (aBase,bLeft,cRight)=>{
//     // if(aBase+bLeft+cRight === 180){
//     //   return "VALID";
//       if(aBase == 60 && bLeft == 60 && cRight== 60 ){
//         let v= "VALID";
//         if(aBase+bLeft+cRight == 180 )return (v+" EQUILATERAL");
//       }
//       if(aBase <= 70 && bLeft <= 70 && cRight >= 40){
//         let u= "VALID";
//         if(aBase+bLeft+cRight == 180 )return (u+" ISOSCELES");
//       }
//       if(aBase <= 90 && bLeft <= 75 && cRight<= 45){
//         let y = "VALID";
//         if(aBase+bLeft+cRight == 180 )return (y+" SCALENE");
//       }
//       else{
//         let e= "NOT VALID";
//         return (e+" Do PROPER ANGLES..")
//       }
  
//   }
//   console.log(angleOfTringle(80,65,35))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 10.LEAP YEAR.
// ANSWER.
// let leapYear = (year)=>{
//     if(year%4==0){
//       if(year%100==0){
//         if(year%400==0){
//           return(year+" YES");
//         }else{
//           return(year+" NOT");
//         }
//       }else{
//         return (year+" YES");
//       }
//     }else{
//       return (year+" NOT");
//     }
//   }
//   console.log(leapYear(2056))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//11.REVERSE OR NOT.
// ANSWER.
// let reversEqual = (n)=>{
//     let a = Math.floor(n/100);
//     let b = Math.floor((n/10)%10);
//     let c = n%10;
//     if((a+""+b+""+c) == n){
//       return "YES";
//     }else{
//       return "NO";
//     }
//   }
// console.log(reversEqual(444))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 12.PRINTING WEEKS.
// ANSWER.

// let weekCal =(day)=>{
//     if(day>=0){
//       if(day==0)return "SUNDAY";
//       if(day==1)return "MONDAY";
//       if(day==2)return "TUESDAY";
//       if(day==3)return "WEDNESDAY";
//       if(day==4)return "THURSDAY";
//       if(day==5)return "FRIDAY";
//       if(day==6)return "SATURDAY";
//     }else{
//       return "PLEASE PUT CORRECT NUMBERS.."
//     }
//   }
//   console.log(weekCal(0))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 13.MARKS CALCULATING.
// ANSWER.
// let averageOfMarks =(a,b,c,d,e)=>{
//     let avr = (a+b+c+d+e)/5;
//     if(avr>=90)return "A gread";
//     if(avr>=80 && avr < 90)return "B gread";
//     if(avr>=70 && avr<80)return "C gread";
//     if(avr>=50 && avr<70)return "D gread"; return "FAILS"
// }
// console.log(averageOfMarks(100,89,90,98,94))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 14.DIVIDING SOME VALUE PRINT HELLO,WORLD,HELLOW WORLD.
// ANSWER.
// let dividing = (num)=>{
//     if(num%3==0 && num%5==0)return "Hello World";
//     if(num%3==0){
//       return "Hello";
//     }else if(num%5==0)return "Wold";
//   }
//   console.log(dividing(90))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 15.USING SWITCH CASE
// ANSWER.
// let switchCaseUsing=(no)=>{
//     switch(no%2==0){
//       case true :
//         return "EVEN";
//         break;
//       case false :
//         return "ODD";
//         break;
//       default:
//       return "do well";
//       break;
//     }
// }
// console.log(switchCaseUsing(3))