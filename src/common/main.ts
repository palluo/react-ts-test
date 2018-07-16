import { getService } from 'common/utils/serviceUtil'
import { RequestParam } from 'common/module/requestParam'
const initApp = () => {
    let option: RequestParam = new RequestParam()
    option.url = './privilege.json'
    option.isHttp = false
    getService(option).then((respone) => {
        return respone
    })
}

export { initApp }