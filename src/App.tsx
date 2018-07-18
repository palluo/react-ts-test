import React from 'react'
import { Route, Switch } from 'react-router-dom'
import routers from 'routers'
// import login from 'widgets/login'
// import main from 'widgets/main'
import 'libs/component/style'

const App = () => {
    return (
        // <Switch>
        //     <Route exact path="/" name="login" component={login} />
        //     <Route path="/main" name="login" component={main} />
        // </Switch>
        <Switch>
            {
                routers.map((r, key) => (
                    <Route component={r.component}
                        exact={!!r.exact}
                        key={key}
                        path={r.path}
                    />
                ))
            }
        </Switch>
    )
}

export default App