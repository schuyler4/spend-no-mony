const initialState = {
  title: '',
  description: '',
  photoPath: '',
  userEmail: '',
  userId: '',
  interests: []
}

export default function itemReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_FIELD':
      if (action.field === title)
        return Object.assign({}, state, {
          title: action.text
        })
      else if (action.field === description)
        return Object.assign({}, state, {
          description: action.text
        })
  }
}
