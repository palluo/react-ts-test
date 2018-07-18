import React, { Component } from 'react'
import './style/index.less'

class IProps {
     widgetNames: string[]
}
class Header extends Component<IProps> {
    public static defaultProps = {
    }
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    public render() {
        return (
            // tslint:disable-next-line:jsx-self-close
            <div className="dgp-commonToolBar-container">
            </div>
        )
    }

}

export default Header