<template>
  <div class="popular-window">
    <div class="eventCard"><span class="card-title--large">&nbspEvents Nearby</span></div>
    <div class="popular-window__container">
      <EventCard :eventInfo="events[0]" />
      <EventCard :eventInfo="events[2]" />
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
    }
  }
</script>
