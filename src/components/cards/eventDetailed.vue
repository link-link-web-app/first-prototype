<template>
  <div>
    <b-card
      :title="eventInfo.pub.name"
      :img-src="eventInfo.mediaLink.cover"
      :img-alt="eventInfo.mediaLink.host[0]"
      img-top
      style="max-width: 15rem;"
      class="mb-2"
    >
      <b-card-text>
        <div>{{ eventInfo.pub.time }}, {{ eventInfo.pub.date }}</div>
        <div>{{ eventInfo.puyb.venue }}</div>
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
