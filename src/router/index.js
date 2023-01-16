import Vue from "vue";
import Router from 'vue-router';
import Home from '@/components/Home';
import Login from '@/components/auth/Login';
import Profile from '@/components/auth/Profile';
import AddFood from '@/components/food/AddFood';
import SideBar from '@/pages/layout/SideBar';
import ListFood from '@/components/food/ListFood';
import AddUser from '@/components/customer/Add';
import Table from '@/components/tables/Table';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/profile',
      component: Profile
    },
    // {
    //   path: '/food/create',
    //   component: AddFood
    // },
    {
      path: '/dashboad',
      // redirect: '/dashboad/home',
      component: SideBar,
      children: [
        {
          path: 'food/create',
          name: 'AddFood',
          component: AddFood
        },
        {
          path: 'food',
          component: ListFood
        },
        {
          path: 'customer/create',
          component: AddUser
        },
        {
          path: 'table',
          component: Table
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/home'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});