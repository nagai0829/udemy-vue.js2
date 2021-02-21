import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Users from './views/Users.vue';
import UsersPost from './views/UsersPost.vue';
import HeaderHome from './views/HeaderHome.vue';
import HeaderUsers from './views/HeaderUsers.vue';
import UsersProfile from './views/UsersProfile.vue';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            components: {
                default: Home,
                header: HeaderHome
            }
        },
        {
            path: '/users/:id',
            components: {
                default: Users,
                header: HeaderUsers
            },
            props: {
                default: true,
                header: false;
            },
            children: [
                // 頭に/を付けないので注意
                { path: "posts", component: UsersPost },
                { path: "profile", component: UsersProfile, name: users - id - profile },
            ]
        },
        {
            path: "*",
            redirect: { path: "/" }
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            return {
                selector: "#next-user"
            };
        }
        return { x: 0, y: 0 };
    }
});