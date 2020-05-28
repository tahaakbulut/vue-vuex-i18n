import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
    movies: []
}
const getters = { // state içindeki bilgileri istediğimiz page içine çekmemizi sağlıyor.
    getMovieList(state) {
        return state.movies
    }
}
const mutations = {
    updateMovieList(state, movie) {
        state.movies.push(movie)
    },
    removeMovie(state, movieId) {
        const index = state.movies.findIndex(item => item.id == movieId)
        index > -1 && state.movies.splice(index, 1)
    },
    changeStar(state, data) {
        state.movies.find(item => item.id == data.id).star = data.star
    },
    sortMovie(state, params) {
        const shortMovie = state.movies.sort((a, b) => params == "down" ? a.star - b.star : b.star - a.star)
        state.map = shortMovie
    }
}

const actions = { // async işlemleri yapmamızı sağlıyor.
    initApp({ commit }) { // DB'den data çekiliyor
        Vue.http.get("https://vue-vuex-i18n.firebaseio.com/movies.json")
            .then((response) => {
                for (const movId in response.body) {
                    response.body[movId].id = movId;
                    commit('updateMovieList', response.body[movId])
                    // gelen response, state'i güncellemesi için Mutation'a update function ile gönderiliyor. 
                }
            });
    },
    addMovie({ commit }, payload) {
        return Vue.http.post("https://vue-vuex-i18n.firebaseio.com/movies.json", payload)// DB'ye save edilen data gönderiliyor
            .then((response) => {
                payload.id = response.body.name; //dönen key kaydedilen dataya id olarak atanıyor.
                commit('updateMovieList', payload);
                // gelen response, state'i güncellemesi için Mutation'a update function ile gönderiliyor. 
            })
    },
    changeStar({ commit }, payload) {
        if (payload.newStar > 0 && payload.newStar < 11) {
            Vue.http.put(`https://vue-vuex-i18n.firebaseio.com/movies/${payload.movieId}/star.json`, payload.newStar)
                .then((res) => {
                    commit('changeStar', { star: res.body, id: payload.movieId })
                })
        }

    },
    deleteMovie({ commit }, payload) {
        Vue.http.delete(`https://vue-vuex-i18n.firebaseio.com/movies/${payload}.json`)
            .then(() => {
                commit('removeMovie', payload);
            })
    },
    sortMovie({ commit }, params) {
        commit('sortMovie', params);
    }
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});

export default store;