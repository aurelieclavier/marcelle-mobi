import Vue from 'vue'

export const state = () => ({
  pseudo: "ahdzkza"
})

export const mutations = {
  SET_LOGIN(state, newPseudo) {
    state.pseudo = newPseudo;
  }
}
