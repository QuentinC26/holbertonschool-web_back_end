import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignup(firstName, lastName, filename) {
  const results = await Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(filename),
  ]);

  return results.map(result => {
    if (result.status === 'rejected') {
      return { status: 'rejected', value: result.reason.toString() };
    }
    return result;
  });
}