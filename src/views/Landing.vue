<template>
  <div
    class   = "map-components-wrapper"
  >
    <!-- <Mapbox
      :class    = "{modalOpen: modalOpen}"
      @mapLoad  = "loadMap"
    /> -->
    <Map
      :class    = "{modalOpen: modalOpen}"
      @mapLoad  = "loadMap"
    />
    <PopularEventsWindow
      :class    = "{modalOpen: modalOpen}"
      v-if      = "loaded"
      :events   = "events"
      @openCard = "openCard"
    />

    <SearchBar
      :class    = "{modalOpen: modalOpen}"
      v-if      = "loaded"
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

  import Map from '@/components/Map'
  import Mapbox from '@/components/Mapbox'
  import ExploreWindow from '@/components/ui/exploreWindow'
  import PopularEventsWindow from '@/components/ui/popularEventsWindow'
  import SearchBar from '@/components/ui/searchBar'

  import EventDetailed from '@/components/cards/eventDetailed'

  export default {
    name: 'Landing',
    components: {
      ExploreWindow,
      PopularEventsWindow,
      SearchBar,
      EventDetailed,
      Map,
      Mapbox
    },
    data() {
      return {
        windowHeight: 0,
        windowWidth: 0,
        events: events,

      // Boolean whether map is loaded
        loaded: false,

      // Map state
        modalOpen: false,
        modalFocus: 0,

      };
    },

    methods: {
      loadMap: function() {
        setTimeout(() => {this.loaded = true}, 2000);
        // Remove when needed (or add animations)
      },
      triggerModal: function() {
        this.modalOpen = !this.modalOpen;
      },
      openCard: function(id) {
        this.triggerModal();
        this.modalFocus = id;
      }
    },

    mounted() {
      window.addEventListener('resize', () => {
        this.windowHeight = window.innerHeight;
        this.windowWidth = window.innerWidth;
        console.log("nigga", window.innerWidth, " x ", window.innerHeight);
      })
    }
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
