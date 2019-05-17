import axios from 'axios';

export const Questions = {
	state: {
		selectedAxis: null,
		lastQuestion: {}
	},
	getters: {
		selectedAxis: (state) => state.selectedAxis,
		lastQuestion: (state) => state.lastQuestion
	},
	mutations: {
		setSelectedAxis: (state, payload) => (state.selectedAxis = payload),
		setLastQuestion: (state, payload) => (state.lastQuestion = payload)
	},
	actions: {
		sendQuestion: async (context) => {
			
		}
	}
};
