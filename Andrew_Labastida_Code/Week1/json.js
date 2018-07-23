let person = {
    name: 'Genesis',
    age: null,
    school: 'Duke University',
    skills: ['Java', 'JS', 'earing a lot']
}

let jsonStr = JSON.stringify(person); //method to turn JS object --> JSON

let parsed = JSON.parse(jsonStr);

let json = ""

let pikachu = {
    forms:[
        {
            url: "http://pokeapi.com/api/v2/pokemon-form/25/",
            name: "pikachu"
        }
    ]
}