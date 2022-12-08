// import config from '~/config';

// //Layout
// import { HeaderOnly } from '~/layouts';
import { useContext, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layout
import LayoutSidebar from '~/layouts/LayoutSidebar';
import LayoutAdmin from '~/layouts/LayoutAdmin';
import LayoutNoneHeader from '~/layouts/LayoutNoneHeader';

//Pages
import Home from '~/pages/Home';
import ProductDetail from '~/pages/ProductDetail';
import Cart from '~/pages/Cart';
import UserInfor from '~/pages/UserInfor';
import Order from '~/pages/Order';
import { HomeAdmin } from '~/pages/Admin/Home';
import { ProductAdmin } from '~/pages/Admin/Product';
import AddProduct from '~/pages/Admin/AddProduct';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Search from '~/pages/Search';
import CreatePost from '~/pages/CreatePost';
import InformationPost from '~/pages/InformationPost';
import Information from '~/pages/Information';
import Notifications from '~/pages/Notifications';
import PostDetail from '~/pages/PostDetail';
// import { UserAdmin } from '~/pages/Admin/User';
// import { CategoryAdmin } from '~/pages/Admin/Category';

const publicRoutes = [
    { path: '/', component: Home, layout: LayoutSidebar },
    { path: '/login', component: Login, layout: LayoutNoneHeader },
    { path: '/search', component: Search, layout: LayoutSidebar },
    { path: '/create_post', component: CreatePost, layout: LayoutSidebar },
    { path: '/information', component: InformationPost, layout: LayoutSidebar },
    { path: '/notifications', component: Notifications, layout: LayoutSidebar },
    { path: '/post_detail', component: PostDetail, layout: LayoutSidebar },
    // { path: '/product_detail/:id', component: ProductDetail },
    // { path: '/cart', component: Cart },
    // { path: '/account', component: UserInfor, layout: LayoutSidebar },
    // { path: '/order', component: Order, layout: LayoutSidebar },
    { path: '/admin', component: HomeAdmin, layout: LayoutSidebar },
    { path: '/admin/product', component: ProductAdmin, layout: LayoutSidebar },
    { path: '/admin/add_product', component: AddProduct, layout: LayoutSidebar },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
