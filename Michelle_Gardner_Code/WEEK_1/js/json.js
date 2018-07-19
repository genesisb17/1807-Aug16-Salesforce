let person = {
    name: 'Michelle',
    age: 23,
    school: 'UMKC',
    skills: ['java', 'sleeping', 'eating']
}

// method to turn JS object to JSON
let jsonStr = JSON.stringify(person); 

let parsed = JSON.parse(jsonStr);

// characters, commas, [], {}, '', 