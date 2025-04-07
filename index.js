// main.js

import { greet, appName } from './tools.js';

console.log(`Welcome to ${appName}`);
console.log(greet('Beulah'));

// main.js

import { User } from './tools.js';

const user1 = new User('Beulah', 17);
console.log(user1.greet()); // Hi, I'm Beulah, and I'm 17 years old.
console.log(user1.celebrateBirthday()); // Happy Birthday, Beulah! You are now 18.

// main.js

import { delayedMessage } from './tools.js';

delayedMessage('Hello from a Promise!', 1500)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error('Promise rejected:', error);
  });

  // main.js

import { fetchUserData } from './tools.js';

(async () => {
  console.log('Starting fetch...');
  const result = await fetchUserData();
  console.log(result); // Fetched: User Data
})();

// main.js

import { userMap, mapToObject } from './tools.js';

console.log('Map contents:');
for (let [key, value] of userMap) {
  console.log(`${key}: ${value}`);
}

const plainObject = mapToObject(userMap);
console.log('Converted to object:', plainObject);