import  { WidgetContainerPosition, WidgetThems, AppThems } from 'common/module/privilegeParam'
import { pxToRem } from 'common/utils/styleUtil'
import { AppGlobals } from 'common/module/appGlobals'
/**
 * 设置dom的位置
 * @param domStyle dom的style对象
 * @param newStyle 要设置的dom位置
 */
export const setDomPosition = (domStyle: any, newStyle: WidgetContainerPosition) => {
    domStyle.position = newStyle.position
    domStyle.left =  pxToRem(newStyle.left)
    domStyle.right =  pxToRem(newStyle.right)
    domStyle.bottom =  pxToRem(newStyle.bottom)
    domStyle.top =  pxToRem(newStyle.top)
}

/**
 * 设置dom的Them
 * @param domStyle dom的style对象
 * @param newStyle 要设置的dom样式
 * @param isHtmlRoot 是否是html根节点
 */
export const setWidgetThem = (domStyle: any, newStyle: WidgetThems) => {
    domStyle.fontFamily = newStyle.fontFamily ? newStyle.fontFamily : null
    domStyle.backgroundColor = newStyle.backgroundColor ? newStyle.backgroundColor :
    AppGlobals.appPrivilege.appBase.systemParameter.themsColor
    domStyle.color = newStyle.color ? newStyle.color : null
    domStyle.width = newStyle.width ? newStyle.width + 'rem' : null
    domStyle.height = newStyle.height ? newStyle.height + 'rem' : null
}

/**
 * 设置dom的Them
 * @param domStyle dom的style对象
 * @param newStyle 要设置的dom样式
 * @param isHtmlRoot 是否是html根节点
 */
export const setAppThem = (domStyle: any, newStyle: AppThems) => {
    domStyle.fontFamily = newStyle.fontFamily ? newStyle.fontFamily : null
    domStyle.fontSize =  newStyle.fontSize ? newStyle.fontSize + 'px' : null
    domStyle.backgroundColor = newStyle.backgroundColor ? newStyle.backgroundColor :
    AppGlobals.appPrivilege.appBase.systemParameter.themsColor
    domStyle.color = newStyle.color ? newStyle.color : null
}