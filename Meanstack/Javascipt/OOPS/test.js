class student{
    setStudent(stu_name,roll_no,gender){
        this.stu_name=stu_name,
        this.roll_no=roll_no,
        this.gender=gender
    }
    setPrint(){
        console.log(this.stu_name,this.roll_no,this.gender);
    }
}

var stu1=new student;
stu1.setStudent("ramu",11,"male")
stu1.setPrint()