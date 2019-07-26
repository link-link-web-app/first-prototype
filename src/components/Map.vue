<template>
  <div>
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
        @click      = "center=m.position"
      ></gmap-marker>
    </gmap-map>

    <PopularEventsWindow
      v-if    = "loaded"
      :events = "events"
    />

    <SearchBar
      v-if    = "loaded"
    />

  </div>
</template>

<script>
  // temporary event data
  import events from '@/assets/eventData'

  import mapStyle from '@/assets/styles/mapStyle'
  import PopularEventsWindow from '@/components/ui/popularEventsWindow'
  import SearchBar from '@/components/ui/searchBar'

  export default {
    name: 'gmap',
    components: {
      PopularEventsWindow,
      SearchBar
    },
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

      // Boolean whether map is loaded
        loaded: false,

      // Google API Data

        markers:      [],
        places:       [],
        currentPlace: null,

        events: events,
      };
    },

    mounted() {
      // Wait for google maps API to load
      this.$gmapApiPromiseLazy().then(() => {
        console.log("Map Loaded!");
        this.loaded = true;
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
      }
    }
  };
</script>
