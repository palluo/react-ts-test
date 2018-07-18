import React, { Component } from 'react'
// import { AppGlobals } from 'common/module/appGlobals'
import './style/index.less'

class IProps {
    widget: any
    privilegeConfig: any
    parentDom: any
}
class IState {
    style: {
        position: any
        left: string | number
        right: string | number
        bottom: string | number
        top: string | number
    }
}
/**
 * 设置dom的样式
 * @param domStyle dom的style对象
 * @param newStyle 要设置的dom样式
 */
const setWidgetPosition = (domStyle: any, newStyle: any) => {
    domStyle.position = newStyle.position
    domStyle.left = newStyle.left ? newStyle.left + 'px' : null
    domStyle.right = newStyle.right ? newStyle.right + 'px' : null
    domStyle.bottom = newStyle.bottom ? newStyle.bottom + 'px' : null
    domStyle.top = newStyle.top ? newStyle.top + 'px' : null
}
class ContainerWindow extends Component<IProps, IState> {
    public static defaultProps = {
    }
    constructor(props) {
        super(props)
        const position = this.props.privilegeConfig.position
        this.state = {
            style: {
                position: 'absolute',
                left: position.left,
                right: position.right,
                bottom: position.bottom,
                top: position.top
            }
        }
    }
    public render() {
        setWidgetPosition (this.props.parentDom.style, this.state.style)
        return (
            <div className="dgp-containerWindow-container">
                <this.props.widget />
            </div>
        )
    }

}
export default ContainerWindow