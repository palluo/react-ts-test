import { createMap, initApp } from 'actions/main'
// import { bindActionCreators } from 'redux'
import React from 'react'
import { connect } from 'react-redux'
import { IProps } from 'reducers/main'
import './style/index.less'

const mapStateToProps = (state) => {
  return { ...state.main }
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

   public render() {
    return (
      <div className="app">
        <div className="popup" />
        <div id="container" className="container">
          {(!this.props.widget) ? '' : <this.props.widget />}
        </div>
        <div ref="mapView" className="mapView" />
      </div>
    )

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)
