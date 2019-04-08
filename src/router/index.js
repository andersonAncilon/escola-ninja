import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home';
import NotFound from '../views/NotFound';
import Login from '../views/Login';
import Register from '../views/Register';
import QuestionsList from '../views/QuestionsList';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '*', component: NotFound },
        { path: '/', component: Home },
        { path: '/login', component: Login },
        { path: '/cadastro', component: Register },
        { path: '/questoes', component: QuestionsList },
    ]
});