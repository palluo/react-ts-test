import { getService } from 'common/utils/serviceUtil'
import { AppGlobals } from 'common/module/appGlobals'
import { RequestParam } from 'common/module/requestParam'

const getAppConfig = () => {
    let option: RequestParam = new RequestParam()
    option.url = './appConfig.json'
    option.isHttp = false

    getService(option).then((appInfo: any) => {
        let serverUrl = appInfo.serverUrl
        let spitialServerUrl = appInfo.spitialServerUrl
        if (serverUrl.substr(serverUrl.length - 1, serverUrl.length) !== '/') {
            serverUrl = serverUrl + '/'
        }
        if (spitialServerUrl.substr(spitialServerUrl.length - 1, spitialServerUrl.length) !== '/') {
            spitialServerUrl = spitialServerUrl + '/'
        }
        AppGlobals.appInfo = appInfo
    })
}

export { getAppConfig }