<template>
  <div>
    <gmap-map
      ref       = "gmap"
      :center   = "center"
      :zoom     = "15"
      :options  = "mapOptions"
      style = "position: absolute; width:100%;  height:100%;"
    >
      <gmap-marker
        v-for = "(m, index) in markers"

        :key        = "index"
        :position   = "m.position"
        @click      = "center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
import mapStyle from '@/assets/styles/mapStyle'

export default {
  data() {
    return {
      // Defaults Center to UBC
      center:       { lat: 49.261, lng: -123.25 },
      mapTypeId:    "terrain",
      mapOptions:   {
        // CUSTOM FUNCTIONAL CONTROLS
        disableDefaultUI:   true,
        keyboardShortcuts:  false,
        clickableIcons:     true,

        // CUSTOM VIEW CONTROLS
        minZoom: 14,
        restriction: {
          latLngBounds: {
            north: 49.312836,
            south: 49.198554,
            west: -123.298689,
            east: -123.094845
          },
          strictBounds: true,
        },

        // FURTHER DESIGN CUSTOMIZATIONS
        styles: mapStyle,
        draggableCursor:  '',
        draggingCursor:    '',

      },
      mapStyle:     "position: absolute; width:100%;  height:100%;",
      markers:      [],
      places:       [],
      currentPlace: null,

    };
  },

  mounted() {
    // Wait for google maps API to load
    this.$gmapApiPromiseLazy().then(() => {
      // Automatically try to determine user location on mount
      this.geolocate();
      console.log("Map Loaded!");
    })

    console.log(this.mapStyle);
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
