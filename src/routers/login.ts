
import Loading from 'widgets/loading'
export default function (loadable) {
    return [{
        name: 'login',
        path: '/',
        exact: true,
        component: loadable({
            loader: () => import('widgets/login'),
            loading: Loading
        })
    }]

}