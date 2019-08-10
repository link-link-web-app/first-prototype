<template>
  <div
    class   = "map-wrapper"
  >
    <gmap-map
      ref       = "gmap"
      :class    = "{modalOpen: modalOpen}"
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

    <PopularEventsWindow
      :class    = "{modalOpen: modalOpen}"
      v-if      = "loaded"
      :events   = "events"
      @openCard = "openCard"
    />

    <SearchBar
      :class    = "{modalOpen: modalOpen}"
      v-if    = "loaded"
    />

    <ExploreWindow
      :class    = "{modalOpen: modalOpen}"
      v-if    = "loaded"
    />

    <div
      v-if  = "loaded && modalOpen"
      class = "eventCard--detailed"
    >
      <div
        class   = "background-blur"
        @click  = "triggerModal"
      ></div>
      <EventDetailed
      :eventInfo  = "events[modalFocus]"
      @trigger    = "triggerModal"
      />
    </div>

  </div>
</template>

<script>
  // temporary event data
  import events from '@/assets/eventData'

  import mapStyle from '@/assets/styles/mapStyle'
  import mapMarker from '@/assets/icons/pin.svg'

  import ExploreWindow from '@/components/ui/exploreWindow'
  import PopularEventsWindow from '@/components/ui/popularEventsWindow'
  import SearchBar from '@/components/ui/searchBar'

  import EventDetailed from '@/components/cards/eventDetailed'

  export default {
    name: 'gmap',
    components: {
      ExploreWindow,
      PopularEventsWindow,
      SearchBar,
      EventDetailed,
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

        pin: {
          url: mapMarker,
          size: {width: 40, height: 40, f: 'px', b: 'px',},
          scaledSize: {width: 40, height: 40, f: 'px', b: 'px',}
        },

      // Boolean whether map is loaded
        loaded: false,

      // Map state
        modalOpen: false,
        modalFocus: 0,

      // Google API Data

        // Markers take in an object { lat lng }
        markers:      [
          {
            position: { lat: 49.261, lng: -123.25 }
          }
        ],
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
      },
      triggerModal: function() {
        this.modalOpen = !this.modalOpen;
      },
      openCard: function(id) {
        this.triggerModal();
        this.modalFocus = id;
      }
    },
  };
</script>

<style lang="sass" scoped>
  .modalOpen
    filter: blur(2px)

  .background-blur
    background: #fff
    opacity: 0.5
    filter: blur(1px)
    position: absolute
    height: 100%
    width: 100%

</style>
