const { execSync } = require('child_process');
const path = require('path');

// Check if there are changes in the database schema
const checkCommand = 'npm run typeorm -- migration:run -c';
let hasChanges;
try {
  execSync(checkCommand, { stdio: 'ignore' });
  hasChanges = false; // If there are no errors, there are no changes in the schema
} catch (error) {
  hasChanges = true; // If there is an error, there are changes in the schema
}

if (hasChanges) {
  // Generate a timestamp
  const timestamp = new Date().toISOString().replace(/[-T:.Z]/g, '');

  // Define the migration name with the timestamp
  const migrationName = `Migration${timestamp}`;

  // Build the command
  const command = `npm run typeorm -- migration:generate -n "${migrationName}"`;

  try {
    // Execute the command
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error('Error generating migration:', error);
    process.exit(1);
  }
} else {
  console.log(
    'No changes in database schema were found - cannot generate a migration.',
  );
}
