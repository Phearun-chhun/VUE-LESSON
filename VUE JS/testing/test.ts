class School{
    constructor(public color: string){};
}
class Student{
    constructor(public school: School){};
    paintSchool(color: string){
        this.school.color = color;
    }   
    printSchool(){
        console.log("My school color is " + this.school.color);
    }

};
let pnc = new School('green');
let phally = new Student(pnc);
let channary = new Student(pnc);
phally.paintSchool('red');
channary.paintSchool('blue');
phally.printSchool()
channary.printSchool()