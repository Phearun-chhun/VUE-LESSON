var School = /** @class */ (function () {
    function School(color) {
        this.color = color;
    }
    ;
    return School;
}());
var Student = /** @class */ (function () {
    function Student(school) {
        this.school = school;
    }
    ;
    Student.prototype.paintSchool = function (color) {
        this.school.color = color;
    };
    Student.prototype.printSchool = function () {
        console.log("My school color is " + this.school.color);
    };
    return Student;
}());
;
var pnc = new School('green');
var phally = new Student(pnc);
var channary = new Student(pnc);
phally.paintSchool('red');
channary.paintSchool('blue');
phally.printSchool();
channary.printSchool();
