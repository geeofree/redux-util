import { createAction } from 'state/utils'

const getUserId = (id) => ({ id })

export default {
  fetch: createAction('FETCH_USER', getUserId),
  remove: createAction('REMOVE_USER', getUserId)
}