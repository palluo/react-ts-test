import React, { Component } from 'react'
import './style/index.less'

class IProps {
     widgetNames: string[]
     configStyle: any
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
            <div className="dgp-commonToolBar-container" style={this.props.configStyle}>
            </div>
        )
    }

}

export default Header