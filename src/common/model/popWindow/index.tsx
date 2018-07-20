import React, { Component } from 'react'
import { Widget, Position, WidgetContainerPosition, Thems, AppThems, WidgetThems, SetWidgetThems }
from 'common/module/privilegeParam'
import { AppGlobals } from 'common/module/appGlobals'
import { setDomPosition } from 'common/utils/domUtil'
import { pxToRem } from 'common/utils/styleUtil'
import './style/index.less'

class IProps {
    widgetCom: any
    privilegeConfig: Widget
    parentDom: any
}
interface IState {
    widgetContainerPosition: WidgetContainerPosition,
    thems: Thems,
    widgetThems: WidgetThems

}

class ContainerWindow extends Component<IProps, IState> {
    public static defaultProps = {
    }
    constructor(props) {
        super(props)
        const position: Position = this.props.privilegeConfig.position
        const thems: Thems = this.props.privilegeConfig.thems
        this.state = {
            widgetContainerPosition: {
                ...position,
                position: 'absolute',
            },
            thems: thems,
            widgetThems : {
                backgroundColor: thems.backgroundColor,
                color: thems.color,
                width: position.width,
                height: position.height,
                fontFamily: thems.fontFamily
            }
        }
    }
    public render() {
        setDomPosition(this.props.parentDom.style, this.state.widgetContainerPosition)
        const setWidgetThems: SetWidgetThems = new SetWidgetThems ()
        const appThems: AppThems = AppGlobals.appPrivilege.appBase.appThems
        setWidgetThems.width = pxToRem(this.state.widgetContainerPosition.width)
        setWidgetThems.height = pxToRem(this.state.widgetContainerPosition.height)
        setWidgetThems.backgroundColor = this.state.thems.backgroundColor ? this.state.thems.backgroundColor
        : appThems.themsColor
        setWidgetThems.color = this.state.thems.color ? this.state.thems.color
        : appThems.color
        setWidgetThems.fontFamily = this.state.thems.fontFamily ? this.state.thems.fontFamily
        : appThems.fontFamily
        return (
            <div className="dgp-containerWindow-container">
                <this.props.widgetCom configStyle={setWidgetThems} />
            </div>
        )
    }

}
export default ContainerWindow