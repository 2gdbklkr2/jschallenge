//Challenge 1
 function check(num1, num2) {
   return ((num1 == 65 || num2 == 65) || (num1 + num2 == 65));
 }

 function challengeOne(){
   num1= document.getElementById("one").value,
   num2 = document.getElementById("two").value;

   window.alert(check(num1, num2));
 }
 //Challenge 2
 function triarea(side1,side2,side3) {
   var p = (side1+side2+side3)/2;
   var a = Math.sqrt(p*(p-side1)*(p-side2)*(p-side3));
     return a;
 }


 //Challenge 3
 function maxNum(){
   var first = document.getElementById('first').value;
   var second = document.getElementById('second').value;
   var third = document.getElementById('third').value;

       if(first>second && first>third)
     {
       window.alert(first+" is the largest");
     }
     else if(second>first && second>third)
     {
       window.alert(second+" is the largest");
     }
     else if(third>first && third>first)
     {
       window.alert(third+" is the largest");
     }
 }
 //Challenge 4
 function time_convert(num){
   var hours = Math.floor(num / 60);
   var minutes = num % 60;
   var time=hours + ":" + minutes;
   return time;
}
 function convert(){
   var number = document.getElementById("time").value;

   window.alert(time_convert(number));

 }




 //Challenge 5
 function start(){
   var tx = document.getElementById("tx").value,
     txt = document.getElementById("txt").value;

   comp(tx, txt);
 }

 function comp(tx, txt) {

   var res = [];
   var ans = document.getElementById("ans");

   for(var i = 0; i < tx.length; i++) {

           if (txt.indexOf(tx[i]) >= 0) {
             res.push(tx[i]);
           }
       }
         ans.innerHTML = res;
 }
