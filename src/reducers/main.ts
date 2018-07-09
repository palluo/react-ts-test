import { CREATE_MAP } from 'actions/main'

const map = (state = {}, action) => {

  switch (action.type) {
    case CREATE_MAP:

      return {...state, mapCtrl:action.mapCtrl}

    default:
      return state
  }
}

export default map;