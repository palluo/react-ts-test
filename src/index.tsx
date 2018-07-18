import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom'
import rootReducer from 'reducers'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootSaga from 'saga'
import App from './App';
import './index.less';
import registerServiceWorker from './registerServiceWorker'
import { getAppConfig } from 'common/init'
// import login from 'widgets/login'

// 创建saga middleware
const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
)
sagaMiddleware.run(rootSaga)

const render = Component =>
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <Component />
      </HashRouter>
    </Provider>,
    document.getElementById('root')
  );
getAppConfig()
render(App)
registerServiceWorker();