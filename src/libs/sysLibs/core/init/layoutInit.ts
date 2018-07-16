import { createLoadableComp } from 'common/utils/containerUtil'
import { put } from 'redux-saga/effects'
// import { ADD_WIDGET } from 'actions/main'
export const initLayout = (widgetOnScreenLayout: Object, widgetPool: Object) => {
    initWidgte(widgetOnScreenLayout)
}

const initWidgte = (widgetOnScreenLayout: any) => {
    let widgets: any[] = widgetOnScreenLayout.widgets
    for (let i = 0, iLength = widgets.length; i < iLength; i++) {
        const widgetUrl = widgets[i].uri
        let comWidget = createLoadableComp(widgetUrl)
        putADDWidget(comWidget)
    }
}

function putADDWidget(comWidget) {
    console.log(comWidget)
    put({ type: 'ADD_WIDGET', widget: comWidget })
}