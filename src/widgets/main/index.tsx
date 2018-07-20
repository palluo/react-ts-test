import { createMap, initApp } from 'actions/main'
import React from 'react'
import { connect } from 'react-redux'
import { render } from 'react-dom'
import ContainerWindow from 'common/model/containerWindow'
import PopWindow from 'common/model/popWindow'
import { AppGlobals } from 'common/module/appGlobals'
import { getWidgetContainerByid, getWidgetToolByid } from 'common/utils/containerUtil'
import './style/index.less'

interface IProps {
  mapCtrl: any
  createMap: (domNode: object) => void
  initApp: () => void
  widgetContainers: any[],
  widgteTools: any[],
  lastWidgetContainer: any,
  lastWidgetTool: any
}

const mapStateToProps = (state) => {
  return { ...state.main }
}
/**
 * 渲染组件
 * @param item 要渲染的组件
 * @param isTool 是否是工具组件
 * @param propsWidgets main中对应的组件数组
 */
const renderWidget = (item: any, isTool: boolean, propsWidgets: any[]) => {
  const newDom = document.createElement('div')
  newDom.id = item.privilegeConfig.id
  let container: any
  let comWidget: any
  if (isTool) {
    container = document.getElementById('popup')
    comWidget = <PopWindow widgetCom={item.widgetCom} privilegeConfig={item.privilegeConfig} parentDom={newDom}/>
    AppGlobals.loadWidgetTools.push(comWidget)
  } else {
    container = document.getElementById('container')
    comWidget = <ContainerWindow widgetCom={item.widgetCom}
     privilegeConfig={item.privilegeConfig} parentDom={newDom} />
    AppGlobals.loadWidgetContainers.push(comWidget)
  }
  container.appendChild(newDom)
  render(comWidget, document.getElementById(newDom.id))
  propsWidgets.push(comWidget)
}

const mapDispatchToProps = (dispatch) => {
  return {
    createMap: (domNode) => {
      dispatch(createMap(domNode))
    },
    initApp: () => {
      dispatch(initApp())
    },
    mapCtrl: null
  }
}
// @connect(
//     state => ({ ...state.main}),
//     dispatch => bindActionCreators({ createMap }, dispatch)
// )

class Main extends React.Component<IProps, any> {
  static defaultProps = {
    isShow: true,
    widgetContainers: [],
    widgteTools: []
  }
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount() {
    if (!this.props.mapCtrl) {
      this.props.initApp()
      this.props.createMap(this.refs.mapView)
    }
  }
  componentDidUpdate() {
    if (this.props.lastWidgetContainer) {
      const oldWidget = getWidgetContainerByid(this.props.lastWidgetContainer.privilegeConfig.id)
      if (!oldWidget) {
        renderWidget(this.props.lastWidgetContainer, false, this.props.widgetContainers)
      }
    }
    if (this.props.lastWidgetTool) {
      const oldWidget = getWidgetToolByid(this.props.lastWidgetTool.privilegeConfig.id)
      if (!oldWidget) {
        renderWidget(this.props.lastWidgetTool, false, this.props.lastWidgetTool)
      }
    }
  }

  public render() {
    return (
      <div className="app">
        <div className="popup" id="popup" />
        <div id="container" className="container"/>
        <div ref="mapView" className="mapView" />
      </div>
    )

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)
