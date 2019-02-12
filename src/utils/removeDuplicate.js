export const removeDuplicate = (state, item) => {
  return state.some(elem => elem.id === item.id)
}