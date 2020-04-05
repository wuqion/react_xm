import Loadable from 'react-loadable'
import Loading from '../compoments/Loading'

const ArticleList = Loadable({
    loader: () => import('./Article'),
    loading:Loading
  });
  const Dashboard = Loadable({
    loader: () => import('./Dashboard'),
    loading:Loading
  });

  const Login = Loadable({
    loader: () => import('./Login'),
    loading:Loading
  });

  const NotFound = Loadable({
    loader: () => import('./NotFound'),
    loading:Loading
  });

  const Settings = Loadable({
    loader: () => import('./Settings'),
    loading:Loading
  });

  const ArticleEdit = Loadable({
    loader: () => import('./Article/Edit'),
    loading:Loading
  });

  export {
    ArticleList,
    Dashboard,
    Settings,
    NotFound,
    Login,
    ArticleEdit
  }

