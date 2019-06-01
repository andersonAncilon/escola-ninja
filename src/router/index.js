import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home';
import NotFound from '../views/NotFound';
import Login from '../views/Login';
import Register from '../views/Register';
import QuestionFilter from '../views/QuestionFilter';
import TheAxis from '../components/container/TheAxis';
import TheAxisContent from '../components/container/TheAxisContent';
import Painel from '../views/Painel.vue';
import QuestionList from '../views/QuestionList.vue';
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
			component: QuestionFilter,
			children: [
				{
					path: '',
					name: 'eixo',
					component: TheAxis,
				},
				{
					path: 'eixo/:conteudo',
					component: TheAxisContent,
				},
			],
		},
		{ path: '/listagem/:conteudo', name: 'listagem', component: QuestionList },
		{
			path: '/painel',
			component: Painel,
			children: [{ path: '', component: MyPanel }, { path: 'criarQuestao', component: MyQuestionCreate }],
		},
	],
});
