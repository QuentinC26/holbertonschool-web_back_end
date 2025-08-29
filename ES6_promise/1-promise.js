export default function getFullResponseFromAPI(success) {
  if (success === true) {
    let Promise = {
        status: 200,
        body: 'Success'
    };
    return `Promise { ${JSON.stringify(Promise)} }`
   } else {
    console.log('Promise {')
    return `  <rejected> Error: The fake API is not working currently
    ...
    ...
    `
  }
}
