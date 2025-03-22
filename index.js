console.log("hello world");

//arithmetic operators
let num1 = 45;

let num2 = 15;
console.log(num1 + num2);

//comparision operators
let num3 =10;
 let num4 = 20;
 console.log(num3 == num4);  
 console.log(num3 === num4);  // means that equal value  and data type
 console.log(num3 !== num4);  // != it means if any one condition is true the give output is true
   
 console.log(num1 > num2);
 console.log(num1 < num2);
 console.log(num1 <=  num2)
 console.log(num1 >=  num2)


 let a = 80;
 a -= +15;
 console.log(a)

 let b = 80;
 b = -15;
 console.log(b)


let c = 80;
 a %= 15;
 console.log(c)

 //increment operators
 let d= 80;
 //d++;
 //console.log(d)
 console.log(d++,++d,d, d, d, d++, d++,d++, d, ++d, ++d, ++d, d++,d++)
//80 82 82 82 82 82 83 84 85 86 87 88 88 89

 let e=43;
 console.log(e, e++, --e, e--, e++, e, e++, ++e, --e, --e, e++);
 //43 43 43 43 42 43 43 45 44 43 43


//DAY3

let f = 77;
console.log(f, f++, f--, f++, --f, --f, --f, ++f,  ++f, f++, f, f, f++, f--);
//77 77 78 77 77 76 75 76 77 77 78 78 78 79

// logical operators

//&& (and), ||(or), !(not)

let g= 80;
let h= 90;
 //let res = g>h && g< h;  // and operators
//let res = g > h   ||  g < h;   //or operator

//let res = g >= h   ||  g >= h;   //comparing and logical operator

//let res = g != h   ||  g >= h;  

let res = (g != h )  ==  g >= h;  
 console.log(res)
 console.log(! true) //not operators


 // Conditional Ternary Operators

 let x = 80;
 let y = 90;
  console.log(x > y ? "This is correct" : "This is incorrect");
  
  // ques.1 Take two numbers and print the addition of thr numbers ; input= 2 5 outpot =7

  let numa = 5;
  let numb = 2;
   console.log(numa + numb)


   // ques 2. Given a four digit number N ,print its first digit, input= 4567 output=4
   let N = 4567; 
//  let firstDigit = N.toString()[0]; 
//  console.log(firstDigit); // Output the first digit

 let ans = N / 1000;
 console.log(Math.floor(ans));
  
//Decision making
  let n =50;
//   if( n> 10){
//     console.log('n is greater than 10');
//   }else if (n == 10){
//     console.log('n is  equal to 10');
//   }
// else{
//     console.log("n is less than")
// }
if( n> 10 || n >=10){
        console.log('n is greater than 10 and equal');
      }
    else{
    console.log("n is less than")
 }
    

