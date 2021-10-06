class student{
    setStudent(stu_name,roll_no,course){
        this.stu_name=stu_name,
        this.roll_no=roll_no,
        this.course=course

    }
    printStudent(){
        console.log(this.stu_name,this.roll_no,this.course);
    }
    
}

var stu1=new student();
stu1.setStudent("jeevan",33,"meanstack")
stu1.printStudent()

var stu2=new student();
stu2.setStudent("asha",21,"fullstack")
stu2.printStudent()

