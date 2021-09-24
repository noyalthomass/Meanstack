//num=15; if num is divisible by 3 print fiz.if num divisible by 3 print buz,if num divisible by 15 print fizbus

//var num=15;
//if(num%15==0){
//    console.log("fizzbuss");
//}
//if else(num%5==0){
//    console.log("buss");
//}
//if else(num%3==0){
//    console.log("fizz");
//}

or

var num=15;
var res="";

if (num%3==0) {
    res+="fizz";
}
if (num%5==0) {
    res+="buss";
}
console.log(res);