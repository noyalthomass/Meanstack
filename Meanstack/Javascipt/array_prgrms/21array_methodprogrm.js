var products=[
    [100,"oreo",40,50],
    [101,"fifty-fifty",20,60],
    [102,"borbourne",40,0],
    [103,"treat",30,10],
    [104,"arrowroot",30,0],
    [105,"moms-magic",45,10]
    ]

    //print number of items in shop
    //print number of available items
    //print all product names only


//print all product names only
//var pro_name=products.map((pro=>pro[1]))
  //  console.log(pro_name);
   
  //print number of available items
 // var total_pro=products.filter((prod=>prod[3]))
    //  console.log(total_pro.length);

//print number of items in shop
for(let pro of products){
    var total_pro=products.filter((pro=>pro[2]+=total_pro))
   total_pro++;
}
console.log(total_pro);

//print number of available items
let aval_stock=0
for(let item of products){
    if(item[3]>0)
    aval_stock++;
}
console.log(aval_stock);