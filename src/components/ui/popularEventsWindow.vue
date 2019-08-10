<template>
  <div class="popular-window">
    <div class="eventCard "><span class="card-title--large">&nbspEvents Nearby</span></div>
    <div class="popular-window__container">
      <EventCard
        :eventInfo  = "events[0]"
        @openCard   = "openCard"
      />
      <EventCard
        :eventInfo  = "events[2]"
        @openCard   = "openCard"
      />
    </div>
  </div>
</template>

<script>
  import EventCard from "@/components/cards/eventDisplay"
  export default {
    name: "popularEventsWindow",
    components: {
      EventCard
    },
    props: {
      events: Array
    },
    methods: {
      openCard(id) {
        this.$emit('openCard', id)
      }
    }
  }
</script>
<style lang="sass" scoped>
  // for overwrites
</style>
