//var arr=[2,3,4,5,6,7]
//decending order
//var nums=arr.sort((num1,num2)=>num2-num1)
//console.log(nums);

//var products=[
 //   [100,"oreo",40,50],
  //  [101,"fifty-fifty",20,60],
  //  [102,"borbourne",40,0],
  //  [103,"treat",30,10],
  //  [104,"arrowroot",30,0],
   // [105,"moms-magic",45,10]
  //  ]

    //sort the product stock wise decending
//var stock_wise=products.sort((item1,item2)=>item2[3]-item1[3])
//console.log(stock_wise);

//sort decending price
//var price=products.sort((item1,item2)=>item2[2]-item1[2])
//console.log(price);


//decending price


var employees = [
    [1000, "ram", 15000, "hr", 1990, 2000],
    [1001, "ravi", 25000, "hr", 1989, 2005],
    [1002, "akhil", 30000, "developer", 2000, 2010],
    [1003, "nikil", 35000, "developer", 2010, 2015],
    [1004, "ajesh", 35000, "mrkt", 1991, 2010],
    [1005, "tom", 40000, "ba", 1990, 2015],
    [1006, "jack", 32000, "ba", 2001, 2010],
]

//asen,dec wrt exp&saler

//asending order salery
//var emp_sal=employees.sort((emp1,emp2)=>emp1[2]-emp2[2])
//console.log(emp_sal);

//decending order sal
//var exp_sal=employees.sort((emp1,emp2)=>emp2[2]-emp1[2])
//console.log(exp_sal);

//dev wrt sal
//var dev_sal=employees.filter(emp=>emp[3]=="developer").map(emp=>emp[2]).sort((emp1,emp2)=>emp1[3]-emp2[3])
//console.log(dev_sal);

//asendiing order wrt exp
var emp_exp=employees.sort((emp1,emp2)=>(emp1[5]-emp1[4])-(emp2[5]-emp2[4]))
console.log(emp_exp);