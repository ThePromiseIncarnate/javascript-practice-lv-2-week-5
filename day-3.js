// Lesson: Fetching Data from Various Pokémon Endpoints with Async/Await

// Objective: 
// By the end of this lesson, you will be able to use `fetch` with `async/await` to retrieve data from various endpoints of the Pokémon API. 
// You will practice accessing different endpoints and logging specific details such as Pokémon names, berry information, and more.


// INSTRUCTIONS:
// In this exercise, you'll practice fetching data from various endpoints of the Pokémon API using `async/await`.
// Two examples will be provided to demonstrate how to access different endpoints, followed by five exercises for you to complete.


// EXAMPLE 1: Fetch and Log the Name of the First Pokémon

async function getFirstPokemonName() {
  const url = 'https://pokeapi.co/api/v2/pokemon/1'; // Fetching data for Bulbasaur, the first Pokémon
  const response = await fetch(url);
  const data = await response.json();
  console.log('First Pokémon Name:', data.name);
}

// Call the function to fetch and log the name of the first Pokémon
getFirstPokemonName();


// EXAMPLE 2: Fetch and Log the Name of the First Berry
// Note: use /berry to GET a berry object

async function getFirstBerryName() {
  const url = 'https://pokeapi.co/api/v2/berry/1'; // Fetching data for the first Berry
  const response = await fetch(url);
  const data = await response.json();
  console.log('First Berry Name:', data.name);
}

// Call the function to fetch and log the name of the first Berry
getFirstBerryName();


// EXERCISE 1: Fetch and Log the Name of the Second Pokémon

// INSTRUCTIONS:
// Create a function called `getSecondPokemonName` that fetches data for the Pokémon with ID 2 from the Pokémon API.
// Log the name of this Pokémon to the console.
// Note: use /api/v2/pokemon to GET a pokemon object

// TODO: Write your function here to fetch and log the name of the second Pokémon

async function getSecondPokemonName() {
  const url = 'https://pokeapi.co/api/v2/pokemon/2';
  const response = await fetch(url);
  const data = await response.json();
  console.log('First Pokémon Name:', data.name);
}

getSecondPokemonName();

// EXERCISE 2: Fetch and Log the Flavor of the First Berry

// INSTRUCTIONS:
// Create a function called `getFirstBerryFlavor` that fetches data for the first Berry from the Pokémon API.
// Log the flavor of this Berry to the console. (Hint: Berry data has a `flavors` property.)
// Note: use /api/v2/berry to GET a pokemon object

// TODO: Write your function here to fetch and log the flavor of the first Berry

async function getFirstBerryFlavor() {
  const url = 'https://pokeapi.co/api/v2/berry/1';
  const response = await fetch(url);
  const data = await response.json();
  console.log('First Berry Flavor:', data.flavors[0].flavor.name);
}

getFirstBerryFlavor();

// EXERCISE 3: Fetch and Log the Name and Effect of the First Ability

// INSTRUCTIONS:
// Create a function called `getFirstAbility` that fetches data for the first Ability from the Pokémon API.
// Log the name and effect of this Ability to the console.
// Note: use /api/v2/ability to GET an ability object

// TODO: Write your function here to fetch and log the name and effect of the first Ability

async function getFirstAbility() {
  const url = 'https://pokeapi.co/api/v2/ability/1';
  const response = await fetch(url);
  const data = await response.json();
  console.log('Ability:', data.name);
  console.log('Ability Effect:', data.effect_entries[1].effect);
}

getFirstAbility();

// EXERCISE 4: Fetch and Log the Name and Cost of the First Item

// INSTRUCTIONS:
// Create a function called `getFirstItem` that fetches data for the first Item from the Pokémon API.
// Log the name and cost of this Item to the console. (Hint: Item data has `cost` property.)
// Note: use /api/v2/item to GET an item object

// TODO: Write your function here to fetch and log the name and cost of the first Item

async function getFirstItem() {
  const url = 'https://pokeapi.co/api/v2/item/1';
  const response = await fetch(url);
  const data = await response.json();
  console.log('Item:', data.name);
  console.log('Cost:', data.cost);
}

getFirstItem();

// EXERCISE 5: Fetch and Log the Name of the First Type

// INSTRUCTIONS:
// Create a function called `getFirstType` that fetches data for the first Type from the Pokémon API.
// Log the name of this Type to the console.
// Note: use /api/v2/type to GET a type object

// TODO: Write your function here to fetch and log the name of the first Type

async function getFirstType() {
  const url = 'https://pokeapi.co/api/v2/type/1';
  const response = await fetch(url);
  const data = await response.json();
  console.log('Type:', data.name);
}

getFirstType();

// Summary:
// These exercises help you practice using `fetch` and `async/await` to interact with various endpoints of the Pokémon API.
// You learned how to access and manipulate data from different parts of the API, which is a crucial skill in modern web development.
// After completing these exercises, try experimenting with other endpoints or additional properties for further practice!

