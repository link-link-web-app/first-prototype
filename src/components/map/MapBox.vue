<!-- Landing page (using mapbox) -->
<template>
  <MglMap
    container     = "mapbox-container"
    :accessToken  = "accessToken"
    :mapStyle     = "mapStyle"
    :center       = "defaultMapStyle.center"
    :zoom         = "defaultMapStyle.zoom"
    @load         = "onMapLoad"
  >
    <MglMarker  v-for = "m,i in eventData" :coordinates  = "eventData[i].priv.coordinates">
      <MglPopup>
        <div>
          <div>{{eventData[i].pub.name}}</div>
        </div>
      </MglPopup>
    </MglMarker>
  </MglMap>

</template>

<script>
  // import street themed style.json
  import MapboxStyle from "@/assets/js/mapbox/style.json"

  // import events
  import eventData from '@/assets/js/eventData.js'


  import Mapbox from "mapbox-gl"
  import { MglMap, MglMarker, MglPopup } from "vue-mapbox"

  export default {
    components: {
      MglMap,
      MglMarker,
      MglPopup,
      eventData
    },
    name: "Map",
    data() {
      return {
      // MAP SETTINGS (move to JSON?)
        accessToken: "pk.eyJ1Ijoib25saW5rZXJzIiwiYSI6ImNrMWQyOHV6MDAzcnIzbm9laDdna213MWYifQ.-9uLdEhCUfIYP3ot-u5zeg",
        mapStyle:     MapboxStyle,
        // https://docs.mapbox.com/help/glossary/style-url/
        // https://studio.mapbox.com/
        defaultMapStyle: {
          center:       [-123.221412, 49.258983],
          zoom:         12,
        },
        eventData:    eventData,
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
