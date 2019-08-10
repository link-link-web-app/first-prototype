// Landing page displays map in general (whether logged in or not logged in)

<template>
  <gmap-map
    ref       = "gmap"
    :center   = "center"
    :zoom     = "15"
    :options  = "mapOptions"
    :style    = "mapStyle"
  >
    <gmap-marker
      v-for = "(m, index) in markers"

      :key        = "index"
      :position   = "m.position"
      :icon       = "pin"
      @click      = "center=m.position"
    ></gmap-marker>
  </gmap-map>

</template>

<script>

  import mapStyle from '@/assets/styles/mapStyle'
  import mapMarker from '@/assets/icons/pin.svg'

  export default {
    name: "Landing",
    data() {
      return {
      // MAP SETTINGS (move to JSON?)
        // Defaults Center to UBC
        center:       { lat: 49.261, lng: -123.25 },
        mapTypeId:    "terrain",
        mapStyle:     "position: absolute; width:100%;  height:100%;",

        mapOptions:   {
          // CUSTOM FUNCTIONAL CONTROLS
          disableDefaultUI:   true,
          keyboardShortcuts:  false,
          clickableIcons:     true,
          // CUSTOM VIEW CONTROLS
          minZoom: 14,
          restriction: {
            latLngBounds: {
              north:  49.312836,
              south:  49.198554,
              west:   -123.298689,
              east:   -123.094845
            },
            strictBounds: true,
          },
          // FURTHER DESIGN CUSTOMIZATIONS
          styles: mapStyle,
          draggableCursor:  '',
          draggingCursor:    '',
        },

        pin: {
          url: mapMarker,
          size: {width: 40, height: 40, f: 'px', b: 'px',},
          scaledSize: {width: 40, height: 40, f: 'px', b: 'px',}
        },

        // Google API Data
        // Markers take in an object { lat lng }
        markers:      [
          {
            position: { lat: 49.261, lng: -123.25 }
          }
        ],
        places:       [],
        currentPlace: null,
      }
    },

    mounted() {
      // Wait for google maps API to load
      this.$gmapApiPromiseLazy().then(() => {
        console.log("Map Loaded!");
        this.$emit('mapLoad');
        // Automatically try to determine user location on mount
        // this.geolocate();
      })
    },

    methods: {
      geolocate: function() {
        navigator.geolocation.getCurrentPosition(position => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
        });
      },
    }


  };
</script>
