import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import VueAnalytics from 'vue-analytics'
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
Vue.use(VueAnalytics, {
  id: ['UA-165876127-1', 'UA-165876127-2'],
  checkDuplicatedScript: true
})

new Vue({
  el: '#app',
  render: h => h(App)
})
