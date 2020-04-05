import {
    Article,
    Dashboard,
    Settings,
    Login,
    NotFound,
} from '../views';

export const adminRoutes = [
    {pathName:'/admin/article',compoment:Article},
    {pathName:'/admin/dashboard',compoment:Dashboard},
    {pathName:'/admin/settings',compoment:Settings},
];
export const mainRoutes = [
    {pathName:'/login',compoment:Login},
    {pathName:'/404',compoment:NotFound},
];