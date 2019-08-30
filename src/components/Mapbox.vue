<template>
  <MglMap
    container="map-test"
    :center.sync="center"
    :accessToken="accessToken"
    :mapStyle="mapStyle"
  >
    <MglMarker
      :coordinates.sync="markerCoordinates"
      color='green'
    />
    <MglGeojsonLayer
      type="fill"
      :sourceId="sourceId"
      :layerId="layerId"
      :source="geojson"
      @click="handleClick"
    />
  </MglMap>
</template>

<script>
import {
  MglMap,
  MglMarker,
  MglGeojsonLayer
} from 'vue-mapbox'

export default {
  name: 'Mapbox',
  components: {
    MglMap,
    MglMarker,
    MglGeojsonLayer
  },
  data() {
    return {
      accessToken: 'pk.eyJ1Ijoia3JheXRhcHMiLCJhIjoiY2p6dzllcXozMHloODNubG1xc2xiMjNuNyJ9.IbZO7IC9weNLAjgXUuGZ6w',
      mapStyle: 'mapbox://map_style',
      geojson: { /* … some geojson */},
      layerId: 'firstLayer',
      sourceId: 'firstSource',
      markerCoordinates:'[50, 50]',
    }
  }
}
</script>
