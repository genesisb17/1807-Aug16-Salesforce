let person = {
    name: "Brent",
    age: 50,
    school: "USF"
}

//JSON Things: Characters, commas, [], {}, ',

let personStr = JSON.stringify(person); //JS Object => JSON
let parsed = JSON.parse(personStr); // JSON => JS Object