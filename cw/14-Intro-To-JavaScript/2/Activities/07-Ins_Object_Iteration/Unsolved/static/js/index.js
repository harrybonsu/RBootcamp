var userInfo = {
    name: "Eric",
    age: 32,
    location: "North America"
  };
  
  // Use `Object.values` and `forEach` to iterate through keys
  Object.keys(userInfo).forEach(key => console.log(keys));

  // Use `Object.keys` and `forEach` to iterate through keys
  Object.values(userInfo).forEach(value => console.log(values));
  
  // Use `Object.entries` and `forEach` to iterate through keys and values
 Object.entries(userInfo).forEach(([key, value])=> console.log(`key: ${keys} and valu: ${values}`));
 
  // Array of objects
  var users = [
    { name: "Eric", age: 32, location: "North America" },
    { name: "Sally", age: 23, location: "Europe" },
    { name: "Cassandra", age: 27, location: "North America" }];
  
  // Loop through array of objects then each object
  users.forEach((user) => {

  });
  