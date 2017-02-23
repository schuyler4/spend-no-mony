export function loginUser(email, uid) {
  return {
    type: 'LOGIN_USER',
    email,
    uid
  }
}
