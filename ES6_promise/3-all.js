import { createUser, uploadPhoto } from './utils.js';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
  .then((regroupall) => { regroupall.body, regroupall.firstname, regroupall.lastname })
}
