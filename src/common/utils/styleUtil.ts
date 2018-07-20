import { AppGlobals } from 'common/module/appGlobals'
export const pxToRem = (num: number | null) => {
    if (!AppGlobals.isNewPrivilege) {
        const remNum: number| null = (num) ? num / AppGlobals.baseFintSize : num
        return remNum ? remNum + 'rem' : null
    } else {
        return num ? num + 'rem' : null
    }
}