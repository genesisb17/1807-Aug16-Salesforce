function printShape(shape, height, character){
    shape = shape.toLowerCase();
    switch(shape){
      case "triangle":
          for(i = 1; i <= height; i++) console.log(character.repeat(i));
          break;
      case "square":
          for(i = 1; i <= height; i++) console.log(character.repeat(height));
          break;
      case "diamond":
          var n = 1;
          var space = height-1/2;
          for(i = 1; i < height; i++){
              if(i <= (height - 1)/2){
                  console.log(" ".repeat(space) + character.repeat(n));
                  n += 2;
                  space--;
              }
              if(i >= (height - 1)/2){
                console.log(" ".repeat(space) + character.repeat(n));
                n -= 2;
                space++;
            }
          }
          break;
      default:
    }
}
console.log("\nDiamond\n")
printShape("Diamond", 5, "*");
console.log("\nTriangle\n")
printShape("Triangle", 5, "*");
console.log("\nSquare\n")
printShape("Square", 5, "*");