<!-- Landing page (using mapbox) -->
<template>
  <MglMap
    container     = "mapbox-container"
    :accessToken  = "accessToken"
    :mapStyle     = "mapStyle"
    :center       = "center"
    @load         = "onMapLoad"
  >
  </MglMap>

</template>

<script>

  import MapboxStyle from "../assets/mapbox/style.json"

  import Mapbox from "mapbox-gl"
  import { MglMap, MglMarker } from "vue-mapbox"

  export default {
    components: {
      MglMap,
      MglMarker
    },
    name: "Landing",
    data() {
      return {
      // MAP SETTINGS (move to JSON?)
        accessToken: "pk.eyJ1Ijoib25saW5rZXJzIiwiYSI6ImNrMWQyOHV6MDAzcnIzbm9laDdna213MWYifQ.-9uLdEhCUfIYP3ot-u5zeg",
        mapStyle:     MapboxStyle,
        // https://docs.mapbox.com/help/glossary/style-url/
        // https://studio.mapbox.com/
        center:       [49.261, 0],
      }
    },

    created() {
      this.mapbox = Mapbox;
    },

    methods: {
      onMapLoad(event) {
        // console.log("Map loaded!");
        this.map = event.map;
        this.$store.map = event.map;
        this.$emit('mapLoad');
      }
    }
  };
</script>
