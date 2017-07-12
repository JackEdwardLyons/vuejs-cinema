// components
import Overview from '../components/Overview.vue';
import Detail   from '../components/Detail.vue';

export default [
    // Home page set to Overview
    { path: '/',      component: Overview, name: 'home' },
    { path: '/movie', component: Detail, name: 'movie' },
    // catch all other routes
    { path: '*', redirect: { name: 'home' } }
  ];
