import { Post } from '../../utils/Api';

import router from '../../router';

import { logged, unlogged } from '../../constants/userOptions';
export const User = {
	state: {
		user: JSON.parse(window.sessionStorage.getItem('user')),
		loading: false,
		userOptions: window.sessionStorage.getItem('user') ? logged : unlogged
	},
	getters: {
		user: (state) => state.user,
		loading: (state) => state.loading,
		userOptions: (state) => state.userOptions
	},
	actions: {
		register: async (context, payload) => (context.user = null),

		auth: async (context, payload) => {
			context.commit('changeLoading');
			try {
				await Post('auth/authenticate', payload).then((res) => {
					context.commit('saveUser', res.data.user);
					context.commit('changeLoading');
					res.data.user.flag === 'student' ? router.push('/questoes') : router.push('/painel');
				});
			} catch (err) {
				alert('Usuário ou senha inválidos');
				context.commit('changeLoading');
			}
		},

		logof: (context) => {
			context.commit('logout');
			window.sessionStorage.clear();
			router.push('/');
		}
	},
	mutations: {
		saveUser: (state, payload) => {
			state.user = payload;
			state.userOptions = logged;
			window.sessionStorage.setItem('user', JSON.stringify(state.user));
		},
		changeLoading: (state) => {
			state.loading = !state.loading;
		},
		logout: (state) => {
			state.user = null;
			state.userOptions = unlogged;
		}
	}
};
