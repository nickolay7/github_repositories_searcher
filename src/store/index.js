import {createStore} from "vuex";
import {repositoriesModule} from "@/store/repositoriesModule";
import createPersistedState from "vuex-persistedstate";

const dataState = createPersistedState({
    paths: ['currentPage', 'searchQuery', 'repositories'],
})

export default createStore({
    modules: {
        repositories: repositoriesModule,
    },
    plugins: [dataState],
});