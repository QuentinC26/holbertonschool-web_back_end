import { createUser, uploadPhoto } from './utils.js';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
  .then((regroupall) => { console.log(`${regroupall[0].body} ${regroupall[1].firstName} ${regroupall[1].lastName}`)})
  .catch((error) => { console.log('Signup system offline')})
}
