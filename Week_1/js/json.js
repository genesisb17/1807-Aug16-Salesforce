let person = {
    name: 'Bob',
    age: 40,
    school: 'Idiots Prep'
};

//method to turn JS object into JSON
let jsonStr = JSON.stringify(person);

//method to turn JSON into JS object
let parsed = JSON.parse(jsonStr);