import config from '~/config';

//Layouts

import { HeaderOnly } from '~/layouts';

//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

//Public routes
const publicRoutes = [
    //Dùng cho các Router không cần đăng nhập vẫn xem được
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

//Private routes
const privateRoutes = [
    //Dùng cho các Router bắt buộc phải đăng nhập
];

export { publicRoutes, privateRoutes };
