import React, { Component } from 'react'
// import { AppGlobals } from 'common/module/appGlobals'
import './style/index.less'

class IProps {
     widget: any
     privilegeConfig: {}
}
class PopWindow  extends Component<IProps> {
    public static defaultProps = {
    }
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    public render() {
        return (
            <div className="dgp-popWindow-container">
            <this.props.widget/>
            </div>
        )
    }

}
export default PopWindow