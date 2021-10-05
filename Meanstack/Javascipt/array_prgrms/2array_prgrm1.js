var arr = [2, 3, 4, 5, 6, 7, 8]  //o/p-[1,2,3,7,8,9]
let sum = 0;
var op=[]

//if num<5 mapp into-1 else num>5 map num+1
for (let num of arr) {
    //if (num < 5) {
    //    op.push((num-1))
    //}
    //else if(num>5) {
    //    op.push((num+1))
    //}
    //else{
    //    op.push(num)
    //}
    num<5?op.push((num-1)):num>5?op.push((num+1)):op.push(num)
}
console.log(op);

