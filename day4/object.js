const PersonA = {
    name: "John Doe",
    age: 30,
    job : "Software Engineer"
}


//value access
console.log(PersonA.name); // Output: John Doe
console.log(PersonA.age); // Output: 30
console.log(PersonA.job); // Output: Software Engineer


//square brackets methods
console.log(PersonA["name"]); // Output: John Doe
console.log(PersonA["age"]); // Output: 30
console.log(PersonA["job"]); // Output: Software Engineer



personA["age"] = 31; // Update 




personB.__proto__ = PersonA; // Inherit properties from PersonA ..don't use this method in production code because it can lead to unexpected behavior and is not recommended. Instead, use Object.create() or class inheritance for better code structure and maintainability.