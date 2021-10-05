var expenses=[12000,13000,14000,15000,11000,25000,17000]
let total=0;
for(let amount of expenses){
    total+=amount
}
console.log(total/expenses.length);