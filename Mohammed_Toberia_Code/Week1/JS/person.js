function Person(name, age){
    this.firstName = name;
    this.age = age;
}

var john = new Person("John", 30);

"My name is " + this.firstName + " and my age is " + this.age;

function runPerson(){
    let name = getElementById(person).value;
    let age = getElementById(person).value;
    document.getElementById("Pers").innerHTML = Person(name,age);
}