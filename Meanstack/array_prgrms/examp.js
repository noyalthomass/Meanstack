var expenses=[12000,13000,14000,15000,11000,25000,17000]

//for(let i=0;i<expenses.length;i++){
    // console.log(expenses[i]);
   //}


   //print etra monthil above 15000 ayittnd

   //for (let amount of expenses){
   //   var res= amount>15000?"yes":"there is no higher expences"
   //}
   //console.log(res);


   ////print avg exp
   
   var total=0;
   for (let amount of expenses){
       total+=amount
       
   }
   console.log(total/expenses.length);