import { INIT_APP } from 'actions/main'
import { fork, take, put, call } from 'redux-saga/effects'
import { getService } from 'common/utils/serviceUtil'
import { RequestParam } from 'common/module/requestParam'
import { AppGlobals } from 'common/module/appGlobals'
import lodash from 'lodash'
import { addWidgetContainer } from 'actions/main'
import { createLoadableComp } from 'common/utils/containerUtil'
import { Privilege, Widget } from 'common/module/privilegeParam'
import { getClientWidth } from 'common/utils/getClientUtil'
import { Thems, SystemParameter, AppThems } from 'common/module/privilegeParam'
import { setAppThem } from 'common/utils/domUtil'

function* init() {
    const clientWidget: number = getClientWidth()
    yield call(getPrivilege, clientWidget)
}

function* getPrivilege(clientWidth: number) {
    let option: RequestParam = new RequestParam()
    let url = './privilege.json'
    const isLoadNew: boolean = true
    if (isLoadNew) {
        if (clientWidth > 1680) {
            url = './privilegeMax.json'
        } else if (clientWidth <= 1680 && clientWidth >= 1400) {
            url = './privilegeMid.json'
        } else {
            url = './privilegeMin.json'
        }
    }
    option.url = url
    option.isHttp = false
    let privilege: Privilege = yield call(getService, option)
    if (isLoadNew) {
        yield call(setAppThems, privilege.appBase)
    } else {
        privilege.appBase = {
            systemParameter: new SystemParameter(),
            appThems: new AppThems()
        }
        setOldWidgetThems(privilege.widgetOnScreen.widgets)
        setOldWidgetThems(privilege.widgetPool.widgets)
        setOldWidgetThems(privilege.widgetPool.groups)
    }
    yield call(initConfig, privilege)
}

function setOldWidgetThems(widgets: any) {
    widgets.map(function (item, key) {
        item.thems = new Thems()
    })
}
function* setAppThems(appBase: { appThems: AppThems, systemParameter: SystemParameter }) {
    const appThems = appBase.appThems
    AppGlobals.isNewPrivilege = true
    AppGlobals.baseFintSize = appThems.fontSize ? appThems.fontSize : 15
    AppGlobals.appInfo.systemName = appBase.systemParameter.systemName ? appBase.systemParameter.systemName : ''

    let htmlDom = document.getElementsByTagName('html')[0]
    setAppThem(htmlDom.style, appBase.appThems)
    let bodyDom = document.body
    setAppThem(bodyDom.style, appBase.appThems)
}
function* initConfig(config: Privilege) {
    AppGlobals.appPrivilege = lodash.cloneDeep(config) as Privilege
    yield call(initWidgteContainer, config.widgetOnScreen.widgets)
}

function* initWidgteContainer(widgets: Widget[]) {
    for (let i = 0, iLength = widgets.length; i < iLength; i++) {
        const widgetUrl = widgets[i].uri
        let widgetCom = yield createLoadableComp(widgetUrl)
        let widget = {
            widgetCom: widgetCom,
            privilegeConfig: widgets[i]
        }
        widget.widgetCom = widgetCom
        yield put(addWidgetContainer(widget))
    }
}

export function* watchInitApp() {
    while (true) {
        yield take(INIT_APP)
        yield fork(init)
    }
}