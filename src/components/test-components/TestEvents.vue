<template lang="html">
  <div class="events">
    This file will list all the events for testing purposes.

    <div v-for="post in posts">
      <p>
        <span><b>{{ post.title }}</b></span><br />
        <span>{{ post.description }}</span>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'posts',
  data() {
    return {}
  }
}
</script>

<style lang="css" scoped>
</style>
