import axios from "axios";

export default {
    namespaced: true,
    getters: {
      authenticated (state) {
          return state.token
      }
    },
    state:{
        token: null,
        user: null
    },
    mutations: {
        SET_TOKEN (state, token){
            state.token = token
        }
    },
    actions: {
        async signIn ({ dispatch },submitEvent) {
            this.email = submitEvent.target.elements.email.value
            this.password = submitEvent.target.elements.password.value
            let response = await axios({
                    method: 'post',
                    url: 'api/auth/login',
                    data: {
                        email: this.email,
                        password: this.password
                    }
                })
            dispatch('attempt',response.data.token)
            },
        async attempt ({ commit },token){
            commit('SET_TOKEN',token)
        },

        signOut ({ commit }) {
            return axios.post('api/auth/logout').then(() => {
                commit('SET_TOKEN',null)
            })
        }
    }
}