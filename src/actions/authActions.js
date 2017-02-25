export function loginUser(email, uid) {
  return {
    type: 'LOGIN_USER',
    email,
    uid
  }
}

export function logoutUser() {
  return { type: 'LOGOUT_USER' }
}
