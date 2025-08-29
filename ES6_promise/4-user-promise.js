export default function signUpUser(firstName, lastName) {
  return new Promise(function(Resolve, Reject) { 
    Resolve()
    Reject()
  })
  .then((viewall) => {
    return {
        firstName,
        lastName,
    }
 })
}

// code plus adapté :
// export default function signUpUser(firstName, lastName) {
//  return Promise.resolve({firstName, lastName,})
// }
