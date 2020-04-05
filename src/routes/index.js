import {
    ArticleList,
    Dashboard,
    Settings,
    Login,
    NotFound,
    ArticleEdit
} from '../views';

export const adminRoutes = [
    {pathName:'/admin/article',compoment:ArticleList,exact:true},
    {pathName:'/admin/article/edit/:id',compoment:ArticleEdit},
    {pathName:'/admin/dashboard',compoment:Dashboard},
    {pathName:'/admin/settings',compoment:Settings},
    
];
export const mainRoutes = [
    {pathName:'/login',compoment:Login},
    {pathName:'/404',compoment:NotFound},
];