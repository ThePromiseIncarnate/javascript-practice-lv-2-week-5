// Lesson: Fetching Pokémon Data with Async/Await

// Objective: 
// By the end of this lesson, you will be able to use `fetch` with `async/await` to retrieve data from an API. 
// You will practice accessing different Pokémon and logging specific details like name, height, weight, and other attributes.


// INSTRUCTIONS:
// In this exercise, you'll practice fetching data from the Pokémon API using `async/await`.
// You will write functions that retrieve data for specific Pokémon and log details such as name, height, and weight.
// Two examples will be provided, followed by five exercises for you to complete.
// In the final exercise, you will also process an array of data retrieved from the API.


// EXAMPLE 1: Fetch and Log the Name and Height of Bulbasaur

async function getBulbasaurData() {
  const url = 'https://pokeapi.co/api/v2/pokemon/1'; // Bulbasaur's ID is 1
  const response = await fetch(url);
  const data = await response.json();
  console.log('Name:', data.name);
  console.log('Height:', data.height);
}

// Call the function to fetch and log Bulbasaur's name and height
getBulbasaurData();


// EXAMPLE 2: Fetch and Log the Name and Weight of Charmander

async function getCharmanderData() {
  const url = 'https://pokeapi.co/api/v2/pokemon/4'; // Charmander's ID is 4
  const response = await fetch(url);
  const data = await response.json();
  console.log('Name:', data.name);
  console.log('Weight:', data.weight);
}

// Call the function to fetch and log Charmander's name and weight
getCharmanderData();


// EXERCISE 1: Fetch and Log the Name and Base Experience of Squirtle

// INSTRUCTIONS:
// Create a function called `getSquirtleData` that fetches data for Squirtle (ID: 7).
// Log Squirtle's name and base experience to the console.

// TODO: Write your function here to fetch and log Squirtle's name and base experience

async function getSquirtleData() {
  const url = 'https://pokeapi.co/api/v2/pokemon/7';
  const response = await fetch(url);
  const data = await response.json();
  console.log('Name:', data.name);
  console.log('Base Experience:', data.base_experience);
}

getSquirtleData();

// EXERCISE 2: Fetch and Log the Name and Types of Pikachu

// INSTRUCTIONS:
// Create a function called `getPikachuData` that fetches data for Pikachu (ID: 25).
// Log Pikachu's name and types to the console. (Hint: `data.types` is an array.)

// TODO: Write your function here to fetch and log Pikachu's name and types

async function getPikachuData() {
  const url = 'https://pokeapi.co/api/v2/pokemon/25';
  const response = await fetch(url);
  const data = await response.json();
  console.log('Name:', data.name);
  console.log('Types:', data.types[0].type.name);
}

getPikachuData();

// EXERCISE 3: Fetch and Log the Name and Weight of Jigglypuff

// INSTRUCTIONS:
// Create a function called `getJigglypuffData` that fetches data for Jigglypuff (ID: 39).
// Log Jigglypuff's name and weight to the console.

// TODO: Write your function here to fetch and log Jigglypuff's name and weight

async function getJigglypuffData() {
  const url = 'https://pokeapi.co/api/v2/pokemon/39';
  const response = await fetch(url);
  const data = await response.json();
  console.log('Name:', data.name);
  console.log('Weight:', data.weight);
}

getJigglypuffData();

// EXERCISE 4: Fetch and Log the Name, Height, and Weight of Meowth

// INSTRUCTIONS:
// Create a function called `getMeowthData` that fetches data for Meowth (ID: 52).
// Log Meowth's name, height, and weight to the console.

// TODO: Write your function here to fetch and log Meowth's name, height, and weight

async function getMeowthData() {
  const url = 'https://pokeapi.co/api/v2/pokemon/52';
  const response = await fetch(url);
  const data = await response.json();
  console.log('Name:', data.name);
  console.log('Height:', data.height);
  console.log('Weight:', data.weight);
}

getMeowthData();

// EXERCISE 5: Fetch and Log the Name and Abilities of Eevee

// INSTRUCTIONS:
// Create a function called `getEeveeData` that fetches data for Eevee (ID: 133).
// Log Eevee's name and abilities to the console. (Hint: `data.abilities` is an array. Log each ability separately.)

// TODO: Write your function here to fetch and log Eevee's name and abilities

async function getEeveeData() {
  const url = 'https://pokeapi.co/api/v2/pokemon/133';
  const response = await fetch(url);
  const data = await response.json();
  console.log('Name:', data.name);
  for (i=0; i<data.abilities.length; i++) {
    console.log(`Ability: ${data.abilities[i].ability.name}`);
  }
}

getEeveeData();

// Summary:
// These exercises help you practice using `fetch` and `async/await` to interact with a RESTful API, specifically the Pokémon API.
// You learned how to access and manipulate data returned from an API, which is a crucial skill in modern web development.
// After completing these exercises, try experimenting with fetching data for other Pokémon or accessing different properties!
