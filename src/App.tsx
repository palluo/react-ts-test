import React from 'react'
import { Route, Switch } from 'react-router-dom'
import routers from 'routers'
import 'libs/component/style'

const App = () => {
    return (
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