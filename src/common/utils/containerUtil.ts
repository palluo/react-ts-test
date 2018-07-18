import Loadable from 'react-loadable'
import Loading from 'widgets/loading'
import { AppGlobals } from 'common/module/appGlobals'

const createLoadableComp = url => Loadable({
  loader: () => import(`widgets/${url}`),
  loading: Loading
})

// const createLoadableComp = async (url: string) =>  {
//   await import(`widgets/${url}`).then(mod => {
//     return Promise.resolve(mod)
//   })
// }

const getWidgetContainerByid = (id: string) => {
  let widget: any = null
  AppGlobals.loadWidgetContainers.forEach(function (v, k) {
    if (v.props.privilegeConfig.id === id) {
      widget = v.widget
    }
  })
  return widget
}

const getWidgetToolByid = (id: string) => {
  let widget: any = null
  AppGlobals.loadWidgetTools.forEach(function (v, k) {
    if (v.props.privilegeConfig.id === id) {
      widget = v.widget
    }
  })
  return widget
}

export { createLoadableComp, getWidgetContainerByid, getWidgetToolByid };