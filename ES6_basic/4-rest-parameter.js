export default function returnHowManyArguments(...args) {
  for(let index = 0; index < args; index++) {
    index = index + 1
    return index
  }
}
