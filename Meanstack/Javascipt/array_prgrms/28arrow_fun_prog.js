var accounts=[
    [1000,"ram","savings",50000,true],
    [1001,"ravi","current",40000,true],
    [1002,"nikil","savings",5000,false],
    [1003,"jain","current",34000,false],
    [1004,"ajesh","savings",55000,true]
]

// sort the users wrt balance
    var balance=accounts.sort((item1,item2)=>item1[3]-item2[3]).map(item=>item[3])
    console.log(balance);
// print details of acno=1004
    var ac_details=accounts.filter(item=>item[0]=="1004")
    console.log(ac_details);

// is there any person with balance < 2000
var is_any_per=accounts.some(item=>item[3]<2000)
console.log(is_any_per);

// print name of users with in_active account
    var in_active=accounts.filter(item=>item[4]='false').map(item=>item[1])
    console.log(in_active);
// print details of user with max balance
    var max_balance=accounts.reduce((item1,item2)=>item1[3]>item2[3]?item1[3]:item2[3])
    console.log(max_balance);

// print details of users with acc_type as savings anad balance > 25000
var sav_bal=accounts.filter(item=>item[2]=='savings').filter(item=>item[3]>25000)
console.log(sav_bal);