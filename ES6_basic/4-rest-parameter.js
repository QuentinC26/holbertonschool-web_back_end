export default function returnHowManyArguments(...args) {
  let sum = 0;
  for(let arg of args) {
   sum = sum + arg;
  }
  return sum;
}
