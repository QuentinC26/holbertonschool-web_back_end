export default function getFullResponseFromAPI(success) {
  let ThePromise = new Promise(function(Resolve, Reject) {
  
  if (success === true) {
    Resolve();
  } else {
    Reject();
  }
  });

  return ThePromise.then(
    function(value) {
      let NewDict = { 
        status: 200, 
        body: 'Success'
      }
      return NewDict;
    },
    function(error){
      throw new Error('The fake API is not working currently')
    }
  )
}

// this code is ok for Holberton but this code is most adapted for the exercice 

// export default function getFullResponseFromAPI(success) {
//  return new Promise((resolve, reject) => {
//    if (success) {
//      resolve({ status: 200, body: 'Success' });
//    } else {
//      reject(new Error('The fake API is not working currently'));
//    }
//   });
// }
