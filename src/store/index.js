import Vuex from 'vuex';
import Vue from 'vue';

import { User } from './modules/User';
import { Questions } from './modules/Questions';

Vue.use(Vuex);

export const store = new Vuex.Store({
	modules: {
		Questions,
		User
	}
});
