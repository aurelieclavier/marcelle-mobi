import Vue from 'vue'

export const state = () => ({

  itineraries: { sections: [{ geojson: { coordinates: [] } }] },


})

export const getters = ({

  latLngs: state => state.itineraries.sections[0].geojson.coordinates

})

export const mutations = {
  'SET'(state, payload) {
    for (const key in payload) Vue.set(state, key, payload[key])


  },
  SET_ITINERARIES(state, payload) {
    payload.sections[0].geojson.coordinates.map(x => x.reverse())
    state.itineraries = payload;
  }


}

export const actions = {

  async fetchItineraries({ commit }) {
    const itineraries = await this.$axios.$get(
      "http://marcelle-mobi-api.herokuapp.com/itineraries/calculate?departure_address=metro%20dromel&arrival_address=12%20impasse%20abeille&mode=bike"


    )

    commit("SET_ITINERARIES", itineraries);
  },
}

