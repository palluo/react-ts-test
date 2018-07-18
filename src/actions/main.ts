import MapView from 'esri/views/MapView'
import EsriMap from 'esri/Map'

export const CREATE_MAP = 'CREATE_MAP'
export const INIT_APP = 'INIT_APP'
export const ADD_WIDGET_CONTAINER = 'ADD_WIDGET_CONTAINER'

export const createMap = (domNode) => {
  return {
    type: CREATE_MAP,
    mapCtrl: new MapView({
      container: domNode,
      map: new EsriMap({ basemap: 'streets' })
    })
  }
}
export const initApp = () => {
  return {
    type: INIT_APP
  }
}

export const addWidgetContainer = (widget: Object) => {
  return {
    type: ADD_WIDGET_CONTAINER,
    widget: widget
  }
}
