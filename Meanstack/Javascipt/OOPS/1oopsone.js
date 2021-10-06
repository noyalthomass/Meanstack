//object oriented programming

//class-plan,design pattern,blue print,template
//object-
//reference-to control object

class Person{
    setPerson(name,gender,age){
        //setPerson()=>intializing instance variable
        this.name=name,
        this.gender=gender,
        this.age=age
        //this.name,this.age,this.gender)=>instance variable
        //this=>point to current object
    }
    printPerson(){
        console.log(this.name,this.age,this.gender);
        //for printing inside class using this
    }
    
}
//setPerson and setPrint= methods(inside class)(inside function- fuction )

//var refname=new classname()

var obj1=new Person();
obj1.setPerson("ram","male",22)
obj1.printPerson()
console.log(obj1.name);
//for printing outside class using refname

var obj2=new Person();
obj2.setPerson("arjun","male",21)
obj2.printPerson()


//javascript engin(js to machine code)-chakra,spidermonkey,v8

//by using constructor method
//class Person{
 //   constructor(name,gender,age){
  //      this.name=name,
  //      this.gender=gender,
   //     this.age=age
   // }
   // printPerson(){
   //     console.log(this.name,this.age,this.gender);
   // }
    
//}
//var obj1=new Person("ram","male",22);
//obj1.printPerson()


