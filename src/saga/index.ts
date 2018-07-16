import { all, fork } from 'redux-saga/effects'
import { watchLogin } from './login'
import { watchInitApp } from './main'

export default function* rootSaga() {
    yield all([fork(watchLogin), fork(watchInitApp)])
}