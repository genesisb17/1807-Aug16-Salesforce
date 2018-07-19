let person = {
    name: 'Greg',
    age: null,
    school: 'Valparaiso University'
}

let jsonStr = JSON.stringify(person); // method to turn JS object to JSON
let parsed = JSON.parse(jsonStr);
