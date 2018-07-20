import React, { Component } from 'react'
import { AppGlobals } from 'common/module/appGlobals'
import './style/index.less'
// import { render } from 'react-dom'
class IProps {
    sysName: string = ''
    configStyle: any
}
class Header extends Component<IProps> {
    static defaultProps = {
        sysName: AppGlobals.appInfo.systemName
    }
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className="dgp-header-container" style={this.props.configStyle}>
                <div className="sysName" >{
                    this.props.sysName}
                </div>
            </div>
        )
    }

}
// render(<Header sysName="系统" />, document.getElementById('container'))
export default Header