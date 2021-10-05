var employee={id:1000,emp_name:"ram",design:"developer",salery:25000}

//object define {}
//key,value pairs
//values are accesed by using corresponding key
//hydrate cheyyan in use cheyyanm
console.log(employee["emp_name"]);

//updating a value
//update emp salery as 30000
employee["salery"]=30000
console.log(employee);

//check  for gnder key
console.log("gender" in employee);

//add new key value pair gender:male
employee["gender"]="male"
console.log(employee);