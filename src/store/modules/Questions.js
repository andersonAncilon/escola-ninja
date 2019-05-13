export const Questions = {
	state: {
		selectedAxis: null
	},
	getters: {
		selectedAxis: (state) => state.selectedAxis
	},
	mutations: {
		setSelectedAxis: (state, payload) => (state.selectedAxis = payload)
	},
	actions: {}
};
