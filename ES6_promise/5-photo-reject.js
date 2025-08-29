export default function uploadPhoto(filename) {
  return new Promise(function(Resolve, Reject) {
    if (filename) {
      Resolve()
    } else {
      Reject()
    }
  })
  .catch((error) => { console.log(`${filename} cannot be processed`)})
}
