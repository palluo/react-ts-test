import { AppGlobals } from 'common/module/appGlobals'
import { Widget } from 'common/module/privilegeParam'

export const getChildrenWidget = (parentId: string) => {
    let childrenWidgets: object[] = []
    const toolWidgets: Widget[] = AppGlobals.appPrivilege.widgetPool.widgets
    const groupWidgets: Widget[] = AppGlobals.appPrivilege.widgetPool.groups
    toolWidgets.map(function (item, index) {
        if (item.containerId === parentId) {
            childrenWidgets.push(item)
        }
    })
    groupWidgets.map(function (item, index) {
        if (item.containerId === parentId) {
            childrenWidgets.push(item)
        }
    })
}