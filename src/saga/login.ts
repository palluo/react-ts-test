import { API } from 'common/config'
import { getService } from 'common/utils/serviceUtil'
import { call, fork, take } from 'redux-saga/effects'
import { RequestParam } from 'common/module/requestParam'
import { LOGIN } from 'actions/login'
// import createHistory from 'history/createHashHistory'

// const history = createHistory()
function* login(userName, password, onSuccess) {
    const encryptionPassword = yield call(getLoginEncryption, password)
    const obj = {
        loginName: userName,
        password: encryptionPassword,
    }
    const userInfo = yield call(logincheck, obj)
    if (userInfo) {
         yield call(onSuccess)
        // yield put(loginSuccee(userInfo))
        // history.pushState('/main')
    } else {
        alert('用户名或密码错误！')
    }
}

function* getLoginEncryption(password) {
    let parm: RequestParam = new RequestParam()
    parm.url = API.loginEncryption + password
    parm.method = 'get'
    parm.serviceName = '获取加密密码'
    const response = yield call(getService, parm)
    if (response.code === 200) {
        const encryptionPassword = response.data
        return encryptionPassword
    }
}

function* logincheck(data) {
    let parm: RequestParam = new RequestParam()
    parm.url = API.loginControllerLogin
    parm.method = 'post'
    parm.serviceName = '用户登陆'
    parm.data = data
    const response = yield call(getService, parm)
    if (response.code === 200) {
        return response.data
    } else {
        return null
    }
}

export function* watchLogin() {
    while (true) {
        const action = yield take(LOGIN)
        yield fork(login, action.userName, action.password, action.onSuccess)
    }
}
