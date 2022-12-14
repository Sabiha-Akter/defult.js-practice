class student {
    constructor(sname, sid){
        this.Id = sid;
        this.Name = sname;
        this.Class = "Ten";
        this.School = "Bourgati High School";
    }
}
const student1 = new student("Mahia", 10);
const student2 = new student("Hanjala", 12);
const student3 = new student("Sade", 13);
console.log(student1, student2, student3);