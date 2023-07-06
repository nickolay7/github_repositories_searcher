import Main from "@/pages/main";
import {createRouter, createWebHistory} from "vue-router";
import RepositoriesPage from "@/pages/repositoriesPage.vue";
import RepositoryPage from "@/pages/repositoryPage.vue";


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/repos',
        component: RepositoriesPage
    },
    {
        path: '/repos/:id',
        component: RepositoryPage
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;
