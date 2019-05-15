import { Post } from '../../utils/Api';

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
			await Post('auth/authenticate', payload).then((res) => {
				context.commit('saveUser', res.data.user);
				context.commit('changeLoading');
			});
		}
	},
	mutations: {
		saveUser: (state, payload) => {
			state.user = payload;
			alert(state.user.email);
		},
		changeLoading: (state) => {
			state.loading = !state.loading;
		}
	}
};
