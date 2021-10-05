var employees = [
    [1000, "ram", 15000, "hr", 1990, 2000],
    [1001, "ravi", 25000, "hr", 1989, 2005],
    [1002, "akhil", 30000, "developer", 2000, 2010],
    [1003, "nikil", 35000, "developer", 2010, 2015],
    [1004, "ajesh", 35000, "mrkt", 1991, 2010],
    [1005, "tom", 40000, "ba", 1990, 2015],
    [1006, "jack", 32000, "ba", 2001, 2010],
]
//print number of employee
//console.log(employees.length);

//print no.of devolpers
//var developer_count=0;
//for(let employee of employees){
//   if(employee[3]=="developer"){
//      developer_count++

//  }
//}
//console.log("developers=",developer_count)\

//print exp of each employee

//for (let employee of employees){
//    console.log("exp",employee[5]-employee[4]);
//}


//print highest salery
var total=0;
for (let employee of employees){
    if(employee[2]>total){
        total=employee[2];   
    }
}
console.log("highest salery=",total);


//lowest salery
//print name of employee who is taking highest salery
var total=0;
var em_name=0;
for (let employee of employees){
    if(employee[2]>total){
        total=employee[2];
        em_name=employee[1];  
    }
}
console.log("highest salery=",em_name,total);
//print name of highest exp employee
var total = 0;
var emp_name=0;

for (let employee of employees) {
    if (total < (employee[5] - employee[4])) {
        total = (employee[5] - employee[4]);
        emp_name=employee[1];
        
    }
}
console.log("Highest Experience=",emp_name,total);

//print total sum of salery group by developers
