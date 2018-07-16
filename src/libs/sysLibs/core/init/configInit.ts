import { initLayout } from 'libs/sysLibs/core/init/layoutInit'
import { AppGlobals } from 'common/module/appGlobals'
import lodash from 'lodash'
const initConfig = (config: any) => {
    AppGlobals.appPrivilege = lodash.cloneDeep(config)
    initLayout(config.widgetOnScreen, config.widgetPool)
}

export { initConfig }