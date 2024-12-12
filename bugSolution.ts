function greeter(person: string): string {
  return "Hello, "+ person;
}

let user = ["Jane Doe", "John Smith"];

// Iterate over the array and call greeter for each element
for (const name of user){
    console.log(greeter(name));
}

//Alternative Solution
function greeterArray(person: string[]): string {
    return "Hello, " + person.join(", ");
  }
  console.log(greeterArray(user));