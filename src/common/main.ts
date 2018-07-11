import { getService } from 'common/utils/serviceUtil'
const initApp = () => {
    const option = {
        url: './privilege.json'
    }
    getService(option).then((respone) => {
        // console.log(respone)
    })
}

export { initApp }