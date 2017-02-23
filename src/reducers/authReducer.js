const initialState = {
  email: null,
  uid: null
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_USER':
      return {email: action.email, uid: action.uid}
    default:
      return state
  }
}
