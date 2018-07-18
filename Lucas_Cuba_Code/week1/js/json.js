//javascript object

let person = {
    name: "Lucas",
    age: 24,
    school: 'Liberty University'
};
//processing JS object into JSON with JSON.stringify()
let jsonStr = JSON.stringify(person);
//parsing back to a JS object
let parsed = JSON.parse(jsonStr)
//JSON has character, commas, [], {}, and any characters that can appear in the individual strings

/**HTTP notes here
 * 
 * Methods - 
 * 
 * GET requests a representation of a specified resource
 * POST used to submit an entity to the specified resource, often causing change on the server
 * PUT updates data
 * DELETE delete specified resource
 * HEAD request headers, simiiar to GET
 * CONNECT establishes a route
 * PATCH partial modification
 * 
 * Safe - read only no other operations
 * Idempotent - update once, no other effects
 * 
 * Status codes - indicate result of the HTTP request
 * 1XX - informational
 * 2XX - success
 * 3XX - redirection
 * 4XX - client error
 * 5XX - server error
 */