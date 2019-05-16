import { Post } from '../../utils/Api';

import router from '../../router';

export const User = {
	state: {
		user: null,
		loading: false
	},
	getters: {
		user: (state) => state.user,
		loading: (state) => state.loading
	},
	actions: {
		register: async (context, payload) => (context.user = null),

		auth: async (context, payload) => {
			context.commit('changeLoading');
			try {
				await Post('auth/authenticate', payload).then((res) => {
					context.commit('saveUser', res.data.user);
					context.commit('changeLoading');
					router.push('/questoes');
				});
			} catch (err) {
				alert('Usuário ou senha inválidos');
				context.commit('changeLoading');
			}
		},

		logof: (context) => {
			context.commit('logout');
			alert('Entrei');
		}
	},
	mutations: {
		saveUser: (state, payload) => {
			state.user = payload;
		},
		changeLoading: (state) => {
			state.loading = !state.loading;
		},
		logout: (state) => (state.user = null)
	}
};
