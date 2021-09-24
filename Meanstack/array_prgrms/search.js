//arr=[10,11,12,13,14,11] search for 15 in this array ele fount or not fount
arr=[10,11,12,13,14,11]
var element=14,flag=0;

for(let num of arr){
    flag+=1
    break;
}
if(flag==0){
    console.log("element not found")
}
else{
    console.log("element is found")
}