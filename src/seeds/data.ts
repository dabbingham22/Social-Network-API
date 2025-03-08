const usernames = [
    "Alex", "Jordan", "Taylor", "Morgan", "Chris", "Sam", "Jamie", "Casey", "Drew", "Pat",
    "Riley", "Cameron", "Quinn", "Skyler", "Jessie", "Blake", "Avery", "Dakota", "Harper", "Phoenix",
    "Logan", "Charlie", "Elliot", "Rowan", "Finley", "Sage", "Emerson", "Toby", "Shay", "Reese"
  ];
  
  const thoughtDetails = [
    "I love coding!", 
    "JavaScript is awesome.", 
    "TypeScript makes things safer.", 
    "Debugging is like solving a puzzle.", 
    "React is so powerful.", 
    "I need more coffee...", 
    "Just deployed my first app!", 
    "Learning never stops.", 
    "Node.js is cool.", 
    "Consistency is key.",
    "Functional programming is fascinating.", 
    "Clean code is happy code.", 
    "Error messages are my arch-nemesis.", 
    "Pair programming boosts creativity.", 
    "REST APIs make the world go round.", 
    "GraphQL is the future.", 
    "I broke production... again.", 
    "Coding at 2 AM hits different.", 
    "Promises and async/await are life-savers.", 
    "Unit tests bring me peace.",
    "Design patterns are like secret weapons.",
    "Git rebase still scares me.", 
    "Kubernetes feels like magic.", 
    "Containers make deployment easier.",
    "Scrum meetings could be emails.",
    "AI is changing the game.", 
    "Cloud computing is the way forward.", 
    "Microservices simplify scaling.", 
    "Data structures are crucial.", 
    "Algorithms fuel performance."
  ];
  
  // Get a random item given an array
  export const getRandomArrItem = (arr: any) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random full name
  export const getRandomUsername = () =>
    `${getRandomArrItem(usernames)} ${getRandomArrItem(usernames)}`;
  
  // Function to generate random assignments that we can add to student object.
  export const getRandomThoughts = (int: number) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtText: getRandomArrItem(thoughtDetails),
      });
    }
    return results;
  };
  