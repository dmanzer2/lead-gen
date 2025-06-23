import { exec } from 'child_process';

// Start the Next.js dev server without forcing a specific port
const nextDev = exec('next dev');

nextDev.stdout.on('data', (data) => {
  console.log(data.toString());

  // Extract the port from the server output
  const match = data.match(/url: http:\/\/localhost:(\d+)/);
  const port = match ? match[1] : '3000';

  // Open the browser
  exec(`npx opn http://localhost:${port}`);
});

nextDev.stderr.on('data', (data) => {
  console.error(data.toString());
});
