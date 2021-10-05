//var arr=[2,3,4,5,6]

//print even
//var evens=arr.filter(num=>num%2==0)
//console.log(evens);

//print >3
//var nums=arr.filter(num=>num>3)
//console.log(nums);

//var names=["ajay","arun","ravi"]

//var a_name=names.filter(name=>name[0]=='a')
//console.log(a_name);

//var arr=[2,3,4,5,6,7]
//print odd
//var odd_num=arr.filter(num=>num%2!=0)
//console.log(odd_num);

//map and filter 
//for even number square
//var arr=[2,3,4,5,6,7]

//var sqr=arr.filter(num=>num%2==0).map((num=>num**2))
//console.log(sqr);

var products=[
    [100,"oreo",40,50],
    [101,"fifty-fifty",20,60],
    [102,"borbourne",40,0],
    [103,"treat",30,10],
    [104,"arrowroot",30,0],
    [105,"moms-magic",45,10]
    ]

       //print outof stock products
    //var out_stock=products.filter(pro=>pro[3]==0).map(pro=>pro[1])
    //console.log(out_stock);

    //add offer 5rs for all prodducts whose stock 50 above
    //var pro_offer=products.filter(pro=>pro[3]>50).map(pro=>pro[2]-5,pro[1])
    //console.log(pro_offer);