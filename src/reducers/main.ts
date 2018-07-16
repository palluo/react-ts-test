import { CREATE_MAP, ADD_WIDGET } from 'actions/main'

export class IProps {
  mapCtrl: {}
  createMap: (domNode: object) => void
  initApp: () => void
  widget: any
}

// const initState = {
//   mapCtrl: {},
//   createMap: (domNode: object) => {},
//   initApp: () => {},
//   widget: {}

// }
const main = (state = {} , action) => {
  switch (action.type) {
    case CREATE_MAP:
      return { ...state, mapCtrl: action.mapCtrl }
    case ADD_WIDGET:
      return { ...state, widget: action.widget }
    default:
      return state
  }
}

export default main;