import authReducer from './authReducer'
import * as actions from '../actions'

const initialState = {
  email: null,
  uid: null
}

describe('auth reducer', () => {
  it('should have a default state of null', () => {
    const newState = authReducer(undefined, { type: 'nothing' })

    expect(newState.email).toBe(null)
    expect(newState.uid).toBe(null)
  })

  it('should login a user with LOGIN_USER', () => {
    const email = 'bob@gmail.com'
    const uid = '57342957234985739827593247590'

    const newState = authReducer(initialState, actions.loginUser(email, uid))

    expect(newState.email).toBe(email)
    expect(newState.uid).toBe(uid)
  })

  it('should logout a user with LOGOUT_USER', () => {
    const loggedInState = {
      email: 'bob@gmail.com',
      uid: '57342957234985739827593247590'
    }

    const newState = authReducer(loggedInState, actions.logoutUser())

    expect(newState.email).toBe(null)
    expect(newState.uid).toBe(null)
  })
})
