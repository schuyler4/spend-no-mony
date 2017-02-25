import itemReducer from './itemReducer'
import * as actions from '../actions'

const initialState = {
  title: '',
  description: '',
  photoPath: '',
  userEmail: '',
  userId: '',
  interests: []
}

describe('item reducer', () => {
  it('should have a default state', () => {
    const newState = itemReducer(undefined, { type: 'nothing' })

    expect(newState.title).toBe('')
    expect(newState.description).toBe('')
    expect(newState.photoPath).toBe('')
    expect(newState.userEmail).toBe('')
    expect(newState.userId).toBe('')
    expect(newState.interests.length).toBe(0)
  })
})
