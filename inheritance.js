class parent {
    constructor (){
        this.FatherName = "Md.Sobahan Sarder";
    }
}
class child extends parent {
    constructor (name){
        super ();
        this.name = name;

    }
    getFullName(){
        return this.name + " " + this.FatherName;
    }
}
 
const baby = new child("Alif");
const baby2 = new child("Hamja");
console.log(baby.getFullName(), baby2.getFullName());