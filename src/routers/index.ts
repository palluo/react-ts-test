import Loadable from 'react-loadable'
import login from './login'
import main from './main'

const config = [
    ...(login(Loadable)),
    ...(main(Loadable))
]

export default config