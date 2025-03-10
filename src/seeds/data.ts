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

  const emails = [
    "john.doe@example.com",
    "jane.smith@email.com",
    "alex.johnson@domain.org",
    "emily.brown@company.net",
    "michael.wilson@webmail.com",
    "sarah.davis@service.io",
    "chris.martin@business.co",
    "laura.taylor@workplace.org",
    "daniel.anderson@techhub.dev",
    "olivia.thomas@startup.inc",
    "ryan.moore@enterprise.biz",
    "megan.white@corporate.com",
    "kevin.jones@industry.net",
    "ashley.miller@firm.org",
    "brian.clark@organization.io",
    "natalie.roberts@platform.dev",
    "jason.lee@consulting.co",
    "hannah.hall@creative.agency",
    "david.king@digital.solutions",
    "sophia.walker@global.inc",
    "justin.evans@network.biz",
    "rachel.adams@online.org",
    "tyler.baker@group.net",
    "katie.morris@support.io",
    "eric.carter@company.dev"
  ];
  
  // Get a random item given an array
  export const getRandomArrItem = (arr: any) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random username
  export const getRandomUsername = () =>
    `${getRandomArrItem(usernames)}`;

  // Gets a random email
  export const getRandomEmail = () => 
    `${getRandomArrItem(emails)}`;
  
  // Function to generate random thoughts that we can add to user object.
  export const getRandomThoughts = (int: number) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtText: getRandomArrItem(thoughtDetails),
      });
    }
    return results;
  };
  