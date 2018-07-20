import { Privilege } from 'common/module/privilegeParam'
export class AppGlobals {
    static appInfo: {
        serverUrl: string
        spitialServerUrl: string
        proxyUrl: string
        exportDataUrl: string
        systemName: string
        mapWkid: string
    }
    static isNewPrivilege: boolean = false
    static baseFintSize: number = 15
    static appPrivilege: Privilege
    static loadWidgetContainers: any[] = []
    static loadWidgetTools: any[] = []
}