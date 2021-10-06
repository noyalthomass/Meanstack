class bank{
    createAccount(per_name,acc_no,acc_type,min_bal){
        this.per_name=per_name
        this.acc_no=acc_no,
        this.acc_type=acc_type,
        this.balance=min_bal
    }
    deposit(amount){
        this.balance+=amount
        console.log(`your account ${this.acc_no}has been credited with amount ${amount} 
        now available balance is ${this.balance}`);
    }
    withdrwal(amount){
        
        if(this.balance>amount){
            this.balance-=amount;
            console.log(`your account ${this.acc_no} has been debited with amount ${amount}
             now available balance is ${this.balance}`);
        }
        else{
            console.log("insufficient balance");
        }
    }
}


var account1=new bank();
account1.createAccount("ram",100008,"savings",10000)
account1.withdrwal(9500)