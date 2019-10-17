<template>
  <div class="eventCard">
    <b-card
      :img-src="eventInfo.mediaLink.cover"
      :img-alt="eventInfo.mediaLink.host[0]"
      img-top
    >
      <div class="badge-display-popular mb-2">
        <b-badge pill variant="light">{{ eventInfo.eventTags.host[0] }}</b-badge>
        <b-badge pill variant="light">{{ eventInfo.eventTags.host[1] }}</b-badge>
        <b-badge pill variant="light">{{ eventInfo.eventTags.host[2] }}</b-badge>
      </div>
      <b-card-text>
        <h4
          class   = "card-title"
          @click  = "openCard"
        >{{ eventInfo.pub.name }}</h4>
        <!-- <div class="eventCard_text">
          {{ eventInfo.pub.time }}, {{ eventInfo.pub.date }}
        </div>
        <div class="eventCard_text">
          {{ eventInfo.pub.venue }}
        </div> -->
        <div class  = "eventCard_location">
          <img src="../../assets/icons/location.png" alt="" class="location-icon">
          <p class="eventCard_locationText">{{ eventInfo.pub.venue }}</p>
        </div>
        <div class  = "eventCard_rating">
          <ul>
            <li v-for="n in eventInfo.pub.rating">
              <img src="../../assets/icons/star.png" alt="">
            </li>
            <li v-for = "n in (5 - eventInfo.pub.rating)">
              <img src="../../assets/icons/star-hollow.png" alt="">
            </li>
          </ul>
        </div>
      </b-card-text>

    </b-card>
  </div>
</template>

<script>
  export default {
    name: "EventCard",
    props: {
      eventInfo: Object,
    },
    methods: {
      openCard() {
        this.$emit('openCard', this.eventInfo.priv.id)
      }
    }
  }
</script>
