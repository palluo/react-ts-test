import Loadable  from 'react-loadable'
import Loading from 'widgets/loading'

const createLoadableComp = url =>  Loadable({
  loader: () => import(`widgets/${url}`),
  loading: Loading
});

export  { createLoadableComp };