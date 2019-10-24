<template>
  <div
    class   = "map-components-wrapper"
  >
    <Map
      :class    = "{modalOpen: modalOpen}"
      @mapLoad  = "loadMap"
    />
    <EventContainerPopular
      :class    = "{modalOpen: modalOpen}"
      v-if      = "loaded"
      :events   = "events"
      @openCard = "openCard"
    />

    <SearchBar
      :class    = "{modalOpen: modalOpen}"
      v-if      = "loaded"
    />

    <ExploreBar
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
      <EventCardPopup
      :eventInfo  = "events[modalFocus]"
      @trigger    = "triggerModal"
      />
    </div>

  </div>
</template>

<script>
  // temporary event data
  import events from '@/assets/js/eventData'

  import Map from '@/components/map/MapBox'
  import ExploreBar from '@/components/ui-elements/exploreBar'
  import EventContainerPopular from '@/components/event-components/eventContainerPopular'
  import SearchBar from '@/components/ui-elements/searchBar'

  import EventCardPopup from '@/components/event-components/eventCardPopup'

  export default {
    name: 'Landing',
    components: {
      ExploreBar,
      EventContainerPopular,
      SearchBar,
      EventCardPopup,
      Map
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
