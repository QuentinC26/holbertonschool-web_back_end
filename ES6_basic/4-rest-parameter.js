export default function returnHowManyArguments(...args) {
  returnHowManyArguments = 0;
  for(let arg of args) {
    returnHowManyArguments = returnHowManyArguments + arg;
  }
  return returnHowManyArguments;
}
