import Vue from 'vue'

export const state = () => ({
  pseudo: ''
})

export const mutations = {
  SET_LOGIN(state, newPseudo) {
    state.pseudo = newPseudo;
  }
}

export const actions = {
  async setPseudo({ commit }, pseudo) {
    commit('SET_LOGIN', pseudo);
  },
}
