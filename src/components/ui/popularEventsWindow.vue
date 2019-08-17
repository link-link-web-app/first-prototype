<template>
  <div class= "popular-window"
       v-if = "showWindow">
    <div class="eventCard "><span class="card-title--large">&nbspEvents Nearby</span></div>
    <div class="popular-window__container">
      <EventCard
        :eventInfo    = "events[0]"
        :showPictures = "showPictures"
        :showRatings  = "showRatings"
        @openCard     = "openCard"
      />
      <EventCard
        :eventInfo  = "events[2]"
        :showPictures = "showPictures"
        :showRatings  = "showRatings"
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
    data() {
      return {
        showPictures: true,
        showRatings: true,
        showWindow: true,
      }
    },
    props: {
      events: Array,
      wWidth: Number,
      wHeight: Number,
    },
    methods: {
      openCard(id) {
        this.$emit('openCard', id)
      },
    },
    watch: {
      wWidth: function() {
        if(this.wWidth <= 700) {
          this.showWindow = false;
        }
        else this.showWindow = true;
      },
      wHeight: function() {
        if (this.wHeight <= 500) {
          this.showPictures = false;
          this.showRatings = false;
        }
        else if (this.wHeight <= 600) {
          this.showPictures = true;
          this.showRatings = false;
        }
        else {
          this.showPictures = true;
          this.showRatings = true;
        }
      }
    }
  }
</script>
<style lang="sass" scoped>
  // for overwrites
</style>
