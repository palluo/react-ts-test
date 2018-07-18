import React, { Component } from 'react'
import { AppGlobals } from 'common/module/appGlobals'
import './style/index.less'
// import { render } from 'react-dom'
class IProps {
    sysName: string = ''
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
            <div className="dgp-hrader-container">
                <div className="sysName" >{
                    this.props.sysName}
                </div>
            </div>
        )
    }

}
// render(<Header sysName="系统" />, document.getElementById('container'))
export default Header