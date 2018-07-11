
import Loading from 'widgets/loading'
export default function (loadable) {
    return [{
        name: 'main',
        path: '/main',
        exact: true,
        component: loadable({
            loader: () => import('widgets/main'),
            loading: Loading
        })
    }]

}