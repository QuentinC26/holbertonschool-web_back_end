import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(filename)]
    .then(results =>
      results.map(result => {
        if (result.status === 'rejected') {
          // Changer la clé 'reason' en 'value' pour le test
          return { status: result.status, value: result.reason };
        }
        return result;
      })
  ));
}
