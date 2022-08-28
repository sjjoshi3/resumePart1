function student(name , age, marks){
    this.name = name;
    this.age = age;
    this.marks = marks;
};

var ram = new student("Ram" , 22 , 490);

console.log(ram.name);
console.log(ram.age);
console.log( ram.marks );