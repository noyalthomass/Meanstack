var products=[
    [100,"oreo",40,50],
    [101,"fifty-fifty",20,60],
    [102,"borbourne",40,0],
    [103,"treat",30,10],
    [104,"arrowroot",30,0],
    [105,"moms-magic",45,10]
    ]
//some

//can i purchase item for<10rs? boolean true or false

var is_avl=products.some(pro=>pro[2]<10)
console.log(is_avl);

//less than 30
var is_avl=products.some(pro=>pro[2]<30)
console.log(is_avl);