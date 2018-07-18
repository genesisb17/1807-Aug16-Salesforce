let person = {
    name: "jonathan", 
    age: 20,
    school: 'Rockford University'

}

// Method to turn JS object --> JSON 
let jsonStr = JSON.stringify(person); 



let parsed = JSON.parse(jsonStr);

