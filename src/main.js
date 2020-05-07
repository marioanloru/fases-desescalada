import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
/*  import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'
import stockInit from 'highcharts/modules/stock'
import mapInit from 'highcharts/modules/map'
import addWorldMap from './js/worldmap' */

/*  stockInit(Highcharts)
mapInit(Highcharts)
addWorldMap(Highcharts)

Vue.use(HighchartsVue)  */

Vue.use(VueMeta);

new Vue({
  el: '#app',
  render: h => h(App)
})
