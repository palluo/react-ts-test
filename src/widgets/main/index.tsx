import { createMap } from 'actions/main'
// import { bindActionCreators } from 'redux'
import { initApp } from 'common/main'
import React from 'react'
import { connect } from 'react-redux'
import './style/index.less'

interface IProps {
  mapCtrl: object,
  createMap:(domNode:object)=>void,
}

const mapStateToProps = (state) => {
  return {...state.mian} 
}

const mapDispatchToProps = (dispatch) => {
  return {
    createMap: (domNode) => {
      dispatch(createMap(domNode))
    }
  }
}
// @connect(
//     state => ({ ...state.main}),
//     dispatch => bindActionCreators({ createMap }, dispatch)
// )

class Main extends React.Component<IProps>{
  public static defaultProps = {
    isShow : true,
}
  constructor(props){
    super(props)
    this.state = {
    }
  }
  public componentDidMount() {
    if (!this.props.mapCtrl) {
      initApp()
     // this.props.createMap(this.refs.mapView)
    }
  }

  public render() {
    return (
      <div className='app'>
        <div className='popup'/>
        <div id='container' className='container'>
        {/* {(!this.props.component)?'':<this.props.component/>} */}
        </div>
        {/* <div ref={this.mapView} className='mapView'/> */}
        <div  className='mapView'/>
      </div>
    )
    
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main) 
