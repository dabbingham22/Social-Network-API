import db from '../config/connection.js';
import { User, Thought } from '../models/index.js';
import cleanDB from './cleanDB.js';
import { getRandomUsername, getRandomArrItem, getRandomEmail } from './data.js';

try {
  await db();
  await cleanDB();

  // Create empty array to hold the users
  const users = [];

  // Loop 20 times -- add users to the users array
  for (let i = 0; i < 3; i++) {
    // Get some random thought objects using a helper function that we imported from ./data
    const thoughts = [getRandomArrItem(Thought)];
    const username = getRandomUsername();
    const email = getRandomEmail();

    users.push({
      username,
      thoughts,
      email,
    });
  }

  // Add users to the collection and await the results
  const userData = await User.create(users);

  // Add user to the collection and await the results
  await User.create({
    username: 'markDankberg',
    email: 'dankman@dank.com',
    thoughts: [...userData.map(({ _id }: { [key: string]: any }) => _id)],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
} catch (error) {
  console.error('Error seeding database:', error);
  process.exit(1);
}

