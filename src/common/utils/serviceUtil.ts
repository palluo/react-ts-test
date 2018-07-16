import axios from 'axios'
import lodash from 'lodash'
import { AppGlobals } from 'common/module/appGlobals'
import { RequestParam } from 'common/module/requestParam'

const getServiceByMethod = (options: RequestParam) => {
    const method = options.method || 'get'
    const cloneData = lodash.cloneDeep(options.data)
    const url = options.url || ''
    switch (method) {
        case 'get':
            return axios.get(url, {
                params: cloneData
            })
        case 'post':
            return axios.post(url, cloneData)
        case 'delete':
            return axios.delete(url)
        case 'put':
            return axios.put(url, cloneData)
        default:
            return axios(options)
    }
}
export const getService = (options: RequestParam) => {
    if (options) {
        const serviceName = options.serviceName || '未知服务'
        let url = options.url || ''
        if (options.isHttp && url.indexOf('//') === -1) {
            options.url = AppGlobals.appInfo.serverUrl + url
        }
        return getServiceByMethod(options).then((response) => {
            if (response.status === 200) {
                return Promise.resolve(response.data)
            } else {
                const service = '调用:(' + serviceName + ')服务异常' + url
                console.log(service)
                return Promise.resolve(service)
            }
        }, (err) => {
            const service = '调用:(' + serviceName + ')服务失败' + url
            const obj = {
                service: { service },
                message: err.message
            }
            console.log(obj);

            return Promise.reject(obj)
        }).catch((err) => {
            const service = '调用:(' + serviceName + ')服务异常' + url
            const obj = {
                service: { service },
                message: err.message
            }
            console.log(obj)
            return Promise.reject(obj)
        })
    } else {
        const message = '参数为null'
        console.log(message)
        return Promise.reject(message)
    }
}
