// modularityExample.js

// A simple utility function
function greet(name) {
    return `Hello, ${name}!`;
  }
  
  // A constant
  const appName = 'Modularity Demo';
  
  // Exporting them so they can be used elsewhere
  export { greet, appName };
  
  // userClass.js

class User {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      return `Hi, I'm ${this.name}, and I'm ${this.age} years old.`;
    }
  
    celebrateBirthday() {
      this.age += 1;
      return `Happy Birthday, ${this.name}! You are now ${this.age}.`;
    }
  }
  
  // Export the class
  export { User };

  // promiseExample.js

// A function that returns a Promise to simulate async work
function delayedMessage(message, delay) {
    return new Promise((resolve, reject) => {
      if (!message) {
        reject('No message provided');
      }
  
      setTimeout(() => {
        resolve(`Resolved after ${delay}ms: ${message}`);
      }, delay);
    });
  }
  
  // Export the function
  export { delayedMessage };

  // asyncExample.js

// Simulate a fetch with delay using Promise
function simulateFetch(data, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Fetched: ${data}`);
      }, delay);
    });
  }
  
  // Async function that awaits the simulated fetch
  async function fetchUserData() {
    const user = await simulateFetch('User Data', 1000);
    return user;
  }
  
  // Export both
  export { simulateFetch, fetchUserData };

  // mapExample.js

// Create a Map with some user data
const userMap = new Map();
userMap.set('name', 'Beulah');
userMap.set('age', 17);
userMap.set('location', 'Wonderland');

// Function to convert a Map to a plain object
function mapToObject(map) {
  const obj = {};
  for (let [key, value] of map.entries()) {
    obj[key] = value;
  }
  return obj;
}

// Export the map and utility
export { userMap, mapToObject };