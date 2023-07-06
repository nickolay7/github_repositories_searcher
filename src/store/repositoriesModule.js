import axios from 'axios';

export const repositoriesModule = {
    state: () => ({
        loading: false,
        repositories: [],
        currentRepositoryById: null,
        searchQuery: '',
        currentPage: 1,
        limit: 10,
        total_pages: 0,
        currentPagPart: 1,
    }),
    getters: {
        getMinPart(state) {
            const perPart = 3;

            return perPart * state.currentPagPart - perPart;
        },
        getMaxPart(state) {
            const perPart = 3;

            return (perPart * state.currentPagPart) - 1;
        },
        pagesArray(state) {
            const res = [];
            for(let i = 1; i <= state.total_pages; i += 1) {
                res.push(i);
            }

            return res;
        },
        paginationArrayPart(state, getters) {
            return getters.pagesArray.filter(((part, idx) => idx >= getters.getMinPart && idx <= getters.getMaxPart));
        },
    },
    mutations: {
        nextPagPart(state) {
            const totalParts = Math.ceil(state.total_pages / state.limit);

            if (state.currentPagPart !== totalParts) {
                state.currentPagPart += 1;
            }
        },
        prevPagPart(state) {
            if (state.currentPagPart !== 1) {
                state.currentPagPart -= 1;
            }
        },
        setSearchQuery(state, payload) {
            state.searchQuery = payload;
        },
        setRepositories(state, payload) {
            state.repositories = payload;
        },
        setRepository(state, payload) {
            state.currentRepositoryById = payload;
        },
        deleteCard(state, id) {
            state.repositories = state.repositories.filter((repo) => repo.id !== id);
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
