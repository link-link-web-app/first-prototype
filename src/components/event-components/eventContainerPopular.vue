<template>
  <div class= "popular-window">
    <div class="eventCard "><span class="card-title--large">&nbsp;Events Nearby</span></div>
    <div class="popular-window__container">
      <EventCard
        :eventInfo    = "events[0]"
        @openCard     = "openCard"
      />
      <EventCard
        :eventInfo  = "events[2]"
        @openCard   = "openCard"
      />
    </div>
  </div>
</template>

<script>
  import EventCard from "@/components/event-components/eventCard"
  export default {
    name: "EventContainerPopular",
    components: {
      EventCard
    },
    data() {
      return {
      }
    },
    props: {
      events: Array, // from Discover.vue
    },
    methods: {
      openCard(id) {
        this.$emit('openCard', id)
      },
    },
  }
</script>
<style lang="sass" scoped>
  // for overwrites
</style>
