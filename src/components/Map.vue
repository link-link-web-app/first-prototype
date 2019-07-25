<template>
  <div>
    <h1 class="center">Welcome to the App!</h1><br/>
    <gmap-map
      :center = "center"
      :zoom   = "14"
      style   = "width:100%;  height:600px;"
    >
      <gmap-marker
        v-for = "(m, index) in markers"

        :key        = "index"
        :position   = "m.position"
        :clickable  = "true"
        :draggable  = "true"
        @click      = "center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>


<script>
export default {
  data() {
    return {
      // Defaults to UBC
      // Need to find a way to limit this range
      center:       { lat: 49.261, lng: -123.25 },
      mapTypeId:    "terrain",
      markers:      [],
      places:       [],
      currentPlace: null
    };
  },

  // Automatically try to determine user location on mount
  mounted() {
    this.geolocate();
  },

  methods: {
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Need to implement bootstrap vue for further designing -->
<style scoped>
.center { text-align: center }
</style>
