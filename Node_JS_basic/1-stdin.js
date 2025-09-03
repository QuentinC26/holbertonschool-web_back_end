console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data.toString()}`.trim());
});

process.on('exit', () => {
  console.log('This important software is now closing');
});
