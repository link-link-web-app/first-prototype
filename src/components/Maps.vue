<template>
  <div class="">
    <GmapMap
      v-bind:center="{lat:10, lng:10}"
      v-bind:zoom="7"
      map-type-id="terrain"
      style="width: 500px; height: 300px;"
    >
      <GmapMarker
        v-bind:key="index"
        v-for="(m, index) in markers"
        v-bind:position="m.position"
        v-bind:clickable="true"
        v-bind:draggable="true"
        @click="center=m.position"
      />
    </GmapMap>
  </div>
</template>

<script>
require("dotenv").config();
import * as VueGoogleMaps from 'vue2-google-maps'
export default {
  data() {
    return {
      center: { lat: -3.350235, lng: 111.995865 },
      mapTypeId: "terrain",
      markers: [
        { position: { lat: -0.48585, lng: 117.1466 } },
        { position: { lat: -6.9127778, lng: 107.6205556 } }
      ]
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vue-map-container {
  height: 450px;
  max-width: 992px;
  width: 100%;
}

</style>

<!-- AIzaSyDZrAywcnCcnhBPLkbvoQTw9Lca9bZ928Q  -->
