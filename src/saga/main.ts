import { INIT_APP } from 'actions/main'
import { fork, take, put, call } from 'redux-saga/effects'
import { getService } from 'common/utils/serviceUtil'
import { RequestParam } from 'common/module/requestParam'
import { AppGlobals } from 'common/module/appGlobals'
import lodash from 'lodash'
import { ADD_WIDGET } from 'actions/main'
import { createLoadableComp } from 'common/utils/containerUtil'

function* init() {
    let option: RequestParam = new RequestParam()
    option.url = './privilege.json'
    option.isHttp = false
    const privilege = yield call(getService, option)
    yield call(initConfig, privilege)
}

function* initConfig(config) {
    AppGlobals.appPrivilege = lodash.cloneDeep(config)
    yield call(initLayout, config.widgetOnScreen, config.widgetPool)
}

function* initLayout(widgetOnScreenLayout: Object, widgetPool: Object) {
    yield call(initWidgte, widgetOnScreenLayout)
}

function* initWidgte(widgetOnScreenLayout: any) {
    let widgets: any[] = widgetOnScreenLayout.widgets
    for (let i = 0, iLength = widgets.length; i < iLength; i++) {
        const widgetUrl = widgets[i].uri
        let comWidget = createLoadableComp(widgetUrl)
        yield put({ type: ADD_WIDGET, widget: comWidget })
    }
}

export function* watchInitApp() {
    while (true) {
        yield take(INIT_APP)
        yield fork(init)
    }
}