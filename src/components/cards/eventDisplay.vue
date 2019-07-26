<template>
  <div class="eventCard">
    <b-card
      :title="eventInfo.pub.name"
      :img-src="eventInfo.mediaLink.cover"
      :img-alt="eventInfo.mediaLink.host[0]"
      img-top
    >
      <b-card-text>
        <div class="eventCard_text">
          {{ eventInfo.pub.time }}, {{ eventInfo.pub.date }}
        </div>
        <div class="eventCard_text">
          {{ eventInfo.pub.venue }}
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
  }
</script>
