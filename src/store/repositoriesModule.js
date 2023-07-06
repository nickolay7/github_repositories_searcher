import axios from 'axios';

export const repositoriesModule = {
    state: () => ({
        loading: false,
        repositories: [],
        searchQuery: '',
        currentPage: 1,
        limit: 10,
        total_pages: 0,
    }),
    getters: {
        getRepoById(state, id) {
            return state.repositories.find((r) => r.id === id);
        },
    },
    mutations: {
        nextPage(state) {
            if (state.currentPage !== state.total_pages) {
                state.currentPage += 1;
            }
        },
        prevPage(state) {
            if (state.currentPage !== 1) {
                state.currentPage -= 1;
            }
        },
        setSearchQuery(state, payload) {
            state.searchQuery = payload;
        },
        setRepositories(state, payload) {
            state.repositories = payload;
        },
        setLoading(state, payload) {
            state.loading = payload;
        },
        setPage(state, payload) {
            state.currentPage = payload;
        },
        setLimit(state, payload) {
            state.limit = payload;
        },
        setTotalPages(state, payload) {
            state.total_pages = payload;
        }
    },
    actions: {
        async fetchRepositories({state, commit}) {
            try {
                commit('setLoading', true);
                const response = await axios.get('https://api.github.com/search/repositories', {
                    params: {
                        q: state.searchQuery,
                        page: state.currentPage,
                        per_page: state.limit,
                    }
                });

                if (response.status !== 200) {
                    throw new Error('Cannot find repositories!');
                }

                const totalPages = Math.ceil(response.data.total_count / state.limit);

                commit('setTotalPages', totalPages);
                commit('setRepositories', response.data.items);
                console.log(response)
            } catch(e) {
                return e.message;
            } finally {
                commit('setLoading', false);
            }
        }
    },
    namespaced: true,
}
