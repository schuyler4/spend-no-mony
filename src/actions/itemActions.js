export function changeInput(field, text) {
  return {
    type: 'CHANGE_FIELD',
    field,
    text
  }
}
