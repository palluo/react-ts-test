import React, { Component } from 'react'
import { AppGlobals } from 'common/module/appGlobals'
import './style/index.less'

class IProps {
     sysName: string = ''
}
class Header extends Component<IProps> {
    public static defaultProps = {
        sysName: AppGlobals.appInfo.systemName
    }
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    public render() {
        return (
            <div className="container">
                <div className="sysName" >{this.props.sysName}</div>
            </div>
        )
    }

}

export default Header