console.log('Welcome to Holberton School, what is your name?');

const args = process.argv;
const name = args[2];

console.log(name);

console.log('Your name is:', name)

process.on('exit', (code) => {
   console.log('This important software is now closing');
});
