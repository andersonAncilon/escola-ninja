import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home';
import NotFound from '../views/NotFound';
import Login from '../views/Login';
import Register from '../views/Register';
import QuestionsList from '../views/QuestionsList';
import TheAxis from '../components/container/TheAxis';
import TheAxisContent from '../components/container/TheAxisContent';
import Painel from '../views/Painel.vue';
import MyPanel from '../components/base/MyPanel.vue';
import MyQuestionCreate from '../components/base/MyQuestionCreate';

Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history',
	routes: [
		{ path: '*', component: NotFound },
		{ path: '/', component: Home },
		{ path: '/login', component: Login },
		{ path: '/cadastro', component: Register },
		{
			path: '/questoes',
			component: QuestionsList,
			children: [
				{
					path: '',
					name: 'eixo',
					component: TheAxis,
				},
				{ path: ':conteudo', component: TheAxisContent },
			],
		},
		{
			path: '/painel',
			component: Painel,
			children: [{ path: '', component: MyPanel }, { path: 'criarQuestao', component: MyQuestionCreate }],
		},
	],
});
