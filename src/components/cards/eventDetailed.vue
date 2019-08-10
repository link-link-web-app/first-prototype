<template>
  <div>
    <b-card
      :img-src="eventInfo.mediaLink.cover"
      :img-alt="eventInfo.mediaLink.host[0]"
      style="color: white; background: black;"
      img-top
      class="mb-2"
    >
      <div class="img-display">
        <img
          v-if  = "eventInfo.mediaLink.host[0]"
          :src  = "eventInfo.mediaLink.host[0]"/>
        <img
          v-if  = "eventInfo.mediaLink.host[1]"
          :src  = "eventInfo.mediaLink.host[1]"/>
        <img
          v-if  = "eventInfo.mediaLink.host[2]"
          :src  = "eventInfo.mediaLink.host[2]"/>
        <span
          class = "img-add"
          v-if  = "eventInfo.mediaLink.host.length + eventInfo.mediaLink.users.length - 3 > 0"
        > +{{ eventInfo.mediaLink.host.length + eventInfo.mediaLink.users.length - 3 }} </span>
      </div>
      <div class="badge-display mb-2">
        <b-badge pill variant="light">{{ eventInfo.eventTags.host[0] }}</b-badge>
        <b-badge pill variant="light">{{ eventInfo.eventTags.host[1] }}</b-badge>
        <b-badge pill variant="light">{{ eventInfo.eventTags.host[2] }}</b-badge>
      </div>
      <b-card-text>
        <h4 class="card-title">{{ eventInfo.pub.name }}</h4>
        <div class="card-location">
          <img src="../../assets/icons/location.png" alt="" class="location-icon">
          <p class="eventCard_locationText">{{ eventInfo.pub.venue }}</p>
        </div>
        <br />
        <div card-body-description>{{ eventInfo.pub.time }}, {{ eventInfo.pub.date }}</div>
        <div>{{ }}</div>
      </b-card-text>

      <b-button
        v-if="eventInfo.ticketLink !== null"
        :href="eventInfo.ticketLink"
        target="_blank"
        variant="primary"
      >Buy tickets!</b-button>
    </b-card>
  </div>
</template>

<script>
  export default {
    name: "eventDetailedDisplay",
    props: {
      eventInfo: Object
    },
    trigger: function() {
      this.$emit('trigger');
    }
  }
</script>

<style lang="sass" scoped>
.background-blur
  background: white
  opacity: 0.7
  height: 100%
  width: 100%
  position: fixed
  z-index: 0
</style>
