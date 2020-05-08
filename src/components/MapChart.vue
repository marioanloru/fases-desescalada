<template>
  <!--<highcharts :constructor-type="'mapChart'" :options="mapOptions" class="map"></highcharts>-->
  <!--<iframe style="height: 80vh; width: 100vh; border-style: none;" src="https://datawrapper.dwcdn.net/rHaXv/11/"></iframe>-->
  <div>
    <h3>Fases en las que entrará cada zona y provincia de España el Lunes 11</h3>
    <img style="max-width: 85%" src="../assets/mapa-espana.png">


  </div>
</template>

<script>

export default {
  methods: {
    track () {
      this.$ga.page('/')
    }
  },
  data () {
    return {
      mapOptions: {
        chart: {
          map: 'myMapName'
        },
        title: {
          text: 'Fases de la desescalada por provincias'
        },
        /*  subtitle: {
          text: 'Source map: <a href="http://code.highcharts.com/mapdata/custom/world.js">World, Miller projection, medium resolution</a>'
        },  */
        mapNavigation: {
          enabled: true,
          buttonOptions: {
            alignTo: 'spacingBox'
          }
        },
        colorAxis: {
          min: 0,
          step: 1,
          max: 3,
          title: 'Fase'
        },
        series: [{
          name: 'Fase',
          states: {
            hover: {
              color: '#BADA55'
            }
          },
          dataLabels: {
            enabled: true,
            format: '{point.name}'
          },
          allAreas: false,
          data: [
            ['es-pm', 0],
            ['es-va', 0],
            ['es-le', 0],
            ['es-me', 0],
            ['es-p', 0],
            ['es-s', 0],
            ['es-na', 0],
            ['es-ce', 0],
            ['es-cu', 0],
            ['es-vi', 0],
            ['es-ss', 0],
            ['es-gr', 0],
            ['es-mu', 0],
            ['es-bu', 0],
            ['es-sa', 0],
            ['es-za', 0],
            ['es-hu', 0],
            ['es-m', 0],
            ['es-gu', 0],
            ['es-sg', 0],
            ['es-se', 0],
            ['es-t', 0],
            ['es-te', 0],
            ['es-v', 0],
            ['es-bi', 0],
            ['es-or', 0],
            ['es-l', 0],
            ['es-z', 0],
            ['es-gi', 0],
            ['es-ab', 0],
            ['es-a', 0],
            ['es-av', 0],
            ['es-cc', 0],
            ['es-to', 0],
            ['es-ba', 0],
            ['es-co', 0],
            ['es-h', 0],
            ['es-c', 0],
            ['es-ma', 0],
            ['es-po', 0],
            ['es-lo', 0],
            ['es-so', 0],
            ['es-al', 0],
            ['es-b', 0],
            ['es-ca', 0],
            ['es-o', 0],
            ['es-cs', 0],
            ['es-cr', 0],
            ['es-j', 0],
            ['es-lu', 0],
            ['es-tf', 0],
            ['es-gc', 0]
          ]
          
        }]
      }
    }
  }
}
</script>
 <style scoped>
.map {
  min-height: 80vh;
  min-width: 80vw;
}
 </style>
