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
