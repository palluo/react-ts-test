import { CREATE_MAP, ADD_WIDGET_CONTAINER } from 'actions/main'

const main = (state = {} , action) => {
  switch (action.type) {
    case CREATE_MAP:
      return { ...state, mapCtrl: action.mapCtrl }
    case ADD_WIDGET_CONTAINER:
    let newState = { ...state, lastWidgetContainer: action.widget }
    return newState
    default:
      return state
  }
}

export default main;