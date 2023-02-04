// import config from '~/config';

// //Layout
// import { HeaderOnly } from '~/layouts';
// import { useContext, useState } from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layout
import LayoutSidebar from '~/layouts/LayoutSidebar';
import LayoutAdmin from '~/layouts/LayoutAdmin';
import LayoutNoneHeader from '~/layouts/LayoutNoneHeader';

//Pages
import Home from '~/pages/Home';
import { HomeAdmin } from '~/pages/Admin/Home';
import { PostAdmin } from '~/pages/Admin/Post';
import { UserAdmin } from '~/pages/Admin/User';
import Login from '~/pages/Login';
import Search from '~/pages/Search';
import CreatePost from '~/pages/CreatePost';
import InformationPost from '~/pages/InformationPost';
import Information from '~/pages/Information';
import Notifications from '~/pages/Notifications';
import PostDetail from '~/pages/PostDetail';
import History from '../pages/History';
import Chat from '~/pages/Chat';
import Policy from '~/pages/Policy';

const publicRoutes = [
    { path: '/', component: Login, layout: LayoutNoneHeader },
    { path: '/home', component: Home, layout: LayoutSidebar },
    { path: '/login', component: Login, layout: LayoutNoneHeader },
    { path: '/search', component: Search, layout: LayoutSidebar },
    { path: '/create_post', component: CreatePost, layout: LayoutSidebar },
    { path: '/information', component: Information, layout: LayoutSidebar },
    { path: '/information_post', component: InformationPost, layout: LayoutSidebar },
    { path: '/notifications', component: Notifications, layout: LayoutSidebar },
    { path: '/post_detail', component: PostDetail, layout: LayoutSidebar },
    { path: '/history', component: History, layout: LayoutSidebar },
    { path: '/chat', component: Chat, layout: LayoutSidebar },
    { path: '/policy', component: Policy, layout: LayoutSidebar },
    { path: '/admin', component: HomeAdmin, layout: LayoutAdmin },
    { path: '/admin/post', component: PostAdmin, layout: LayoutAdmin },
    { path: '/admin/user', component: UserAdmin, layout: LayoutAdmin },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
