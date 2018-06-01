export function createReducer(state, handlers) {
  if (typeof handlers !== 'object') {
    throw new Error('`handlers` argument is not an object')
  }

  return (state=state, action) => {
    const handler = handlers[action.type]
    if (handler) return handler(state, action)
    console.warn(`'${action.type}' was not handled. Returning 'state' with no changes.`)
    return state
  }
}

export function createAction(type, callback) {
  return (...args) => ({ type, ...callback(...args) })
}