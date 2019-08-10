<template>
  <div class="eventCard mb-2">
    <b-card
      :img-src="eventInfo.mediaLink.cover"
      :img-alt="eventInfo.mediaLink.host[0]"
      img-top
    >
      <div class="badge-display mb-2">
        <b-badge pill variant="light">{{ eventInfo.eventTags.host[0] }}</b-badge>
        <b-badge pill variant="light">{{ eventInfo.eventTags.host[1] }}</b-badge>
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
        <div class="eventCard_location">
          <img src="../../assets/icons/location.png" alt="" class="location-icon">
          <p class="eventCard_locationText">{{ eventInfo.pub.venue }}</p>
        </div>
        <div>{{ }}</div>
      </b-card-text>

    </b-card>
  </div>
</template>

<script>
  export default {
    name: "eventSimpleDisplay",
    props: {
      eventInfo: Object
    },
    methods: {
      openCard() {
        this.$emit('openCard', this.eventInfo.priv.id)
      }
    }
  }
</script>
