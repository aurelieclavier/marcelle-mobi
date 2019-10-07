export const state = () => ({
  chargingStations: [],
  parkingStations: {},
  carPoolStations: [],
  // 43.43 ~ Marignane - 43.15 ~ La Ciotat
  // Longitudes 5.09 ~ Sausset les pins -  5.7 ~ Ceyreste

  bbox: "43.15,5.09,43.43,5.7",
  // bbox: "43.138572924273255,5.123748779296876,43.45142348523913,5.648345947265626",
  max: 500
})

export const mutations = {
  SET_CHARGING_STATIONS(state, chargingStations) {
    state.chargingStations = chargingStations;
  },
  SET_PARKING_STATIONS(state, parkingStations) {
    state.parkingStations = parkingStations.pois
  },
  SET_CAR_POOL_STATIONS(state, carPoolStations) {
    state.carPoolStations = carPoolStations.pois
  }

};

export const actions = {
  async fetchChargingStations({ commit }, { latitude, longitude }) {
    const chargingStations = await this.$axios.$get("https://api.openchargemap.io/v3/poi/", {
      params: {
        output: 'json', countrycode: 'FR', latitude, longitude, distanceunit: 'KM', verbose: false, camelcase: true, maxresults: 1000, distance: 25
      }
    });
    commit("SET_CHARGING_STATIONS", chargingStations);
  },


  async fetchParkingStations({ commit, state }) {
    const ParkingStations = await this.$axios.$get("https://uws2.mappy.net/data/poi/5.3/applications/parking", { params: { bbox: state.bbox, max: state.max, } })
    commit("SET_PARKING_STATIONS", ParkingStations)
  },

  async fetchCarPoolStations({ commit }) {
    const carPoolStations = await this.$axios.$get("https://search.mappy.net/search/1.1/find?extend_bbox=1&bbox=43.138572924273255,5.123748779296876,43.45142348523913,5.648345947265626&q=Aire%20de%20covoiturage%20marseille&favorite_country=250&language=FRE&loc_format=geojson&mid=3482934797&tagid=SPD_RESPONSE_SEARCH&abtest=NA&max_results=500")
    commit("SET_CAR_POOL_STATIONS", carPoolStations)
  }
}
