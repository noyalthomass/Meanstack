var employees = [
    [1000, "ram", 15000, "hr", 1990, 2000],
    [1001, "ravi", 25000, "hr", 1989, 2005],
    [1002, "akhil", 30000, "developer", 2000, 2010],
    [1003, "nikil", 35000, "developer", 2010, 2015],
    [1004, "ajesh", 35000, "mrkt", 1991, 2010],
    [1005, "tom", 40000, "ba", 1990, 2015],
    [1006, "jack", 32000, "ba", 2001, 2010],
]
//map
//var emp_name=employees.map((emp=>emp[1]))
//console.log(emp_name);

//print developer details---filter
//var developers=employees.filter(emp=>emp[3]=="developer")
//console.log(developers);

//print names of ba output["tom","jack"]-using map and filter
//var analyst=employees.filter(emp=>emp[3]=="ba").map((emp=>emp[1]))
//console.log(analyst);

//print names odf developer

//var dev_name=employees.filter(emp=>emp[3]=="developer").map((emp=>emp[1]))
//console.log(dev_name);

//print developer names exp>6yrs

//var exp=employees.filter(emp=>emp[3]=="developer").filter(emp=>(emp[5]-emp[4])>6).map((emp=>emp[1]))
//console.log(exp);

//add bonus of 5000rs for developer

//var emp_bonus=employees.filter(emp=>emp[3]=="developer").map(emp=>emp[2]+5000)
//console.log(emp_bonus);
