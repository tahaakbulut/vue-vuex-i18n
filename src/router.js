import Vue from 'vue';
import MovieList from "./components/movies/MovieList";
import MovieAdd from "./components/movies/MovieAdd";
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: MovieList
    },
    {
        path: "/movie-add",
        component: MovieAdd
    },
    // {
    //     path: "*",
    //     redirect: '/'
    // }
]

export const router = new VueRouter({
    mode: "history",
    routes
})