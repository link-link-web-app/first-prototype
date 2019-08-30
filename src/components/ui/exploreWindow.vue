<template>
  <div class="explore-window">
    <div class="explore-window__button">
      <!-- <Explore /> -->
      <mq-layout mq="desktop">
        <h3 id="explore-text">EXPLORE</h3>
      </mq-layout>
      <Eclipse />
    </div>
    <div class="explore-window__block">
      <mq-layout mq="mobile">
        <ul>
          <li id="home-btn"><a href=""><img src="../../assets/icons/mobile-tab-icons/home.svg" alt=""></a></li>
          <li id="discover-btn"><a href=""><img src="../../assets/icons/mobile-tab-icons/globe.svg" alt=""></a></li>
          <li id="inbox-btn"><a href=""><img src="../../assets/icons/mobile-tab-icons/inbox.svg" alt=""></a></li>
          <li id="profile-btn"><a href=""><img src="../../assets/icons/mobile-tab-icons/user.svg" alt=""></a></li>
        </ul>
      </mq-layout>
    </div>
  </div>
</template>

<script>
  import Explore from '@/assets/icons/explore-text'
  import Eclipse from '@/assets/icons/explore-eclipse'

  export default {
    components: {
      Explore,
      Eclipse
    },
    props: {
      // plan to pass down the current page of the app, to be used as a v-if so a rect can be shown over the current page icon
    }
  }
</script>
