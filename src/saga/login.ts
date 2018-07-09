import { API } from 'common/config'
import { getService } from 'common/utils/serviceUtil'
import { call, fork, take} from 'redux-saga/effects'


function* login(userName, password, onSuccess) {
    const encryptionPassword = yield call(getLoginEncryption, password)
    const obj = {
        loginName:userName,
        password:encryptionPassword,
    }
    const userInfo = yield call (logincheck, obj)
    if (userInfo) {
        yield call (onSuccess)
        // yield put(loginSuccee(userInfo))
    } 
}

function* getLoginEncryption  (password)  {
    const obj = {
        url: API.loginEncryption+password,
        serviceName: '获取加密密码',
        method: 'get'
    }
    const response = yield call (getService, obj)
    if (response.code === 200) {
        const encryptionPassword = response.data
        return encryptionPassword
    }
}


function* logincheck (data)  {
    const obj = {
        url: API.loginControllerLogin,
        serviceName: '获取加密密码',
        method: 'post',
        data:data
    }
    const response =  yield call (getService, obj)
    if (response.code === 200) {
        return response.data
    }else{
        return null
    }
}

export function* watchLogin() {
    while (true) {
        const action = yield take('LOGIN')
        yield fork(login, action.userName, action.password, action.onSuccess)
    }
}
