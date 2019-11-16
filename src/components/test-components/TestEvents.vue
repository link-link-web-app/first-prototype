<template lang="html">
  <div class="events">
    This file will list all the events for testing purposes.

    <div v-for="event in events">
      <p>
        <span><b>{{ event.title }}</b></span><br />
        <span>{{ event.description }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import TestEventService from '../../clients/js/services/eventService';

export default {
  name: 'events',
  data() {
    return {
      events: []
    }
  },
  mounted() {
    this.fetchEvents();
  },
  methods: {
    async fetchEvents() {
      const response = await TestEventService.fetchEvents();
      this.posts = response.data;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
