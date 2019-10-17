<!-- Bottom tab on all the screens -->
<template>
  <div class="explore-window">
    <div class="explore-window__button">
      <!-- <Explore /> -->
      <mq-layout mq="desktop">
        <!-- "EXPLORE" text only shows up on desktop -->
        <h3 id="explore-text">EXPLORE</h3>
      </mq-layout>
      <Eclipse />
    </div>
    <div class="explore-window__block">
      <!-- these icons only show up on mobile -->
      <mq-layout mq="mobile">
        <ul>
          <li id="home-btn"><router-link v-bind:to="''"><img src="../../assets/icons/mobile-tab-icons/home.svg" alt=""></router-link></li>
          <li id="discover-btn"><router-link v-bind:to="''"><img src="../../assets/icons/mobile-tab-icons/globe.svg" alt=""></router-link></li>
          <li id="inbox-btn"><router-link v-bind:to="''"><img src="../../assets/icons/mobile-tab-icons/inbox.svg" alt=""></router-link></li>
          <li id="profile-btn"><router-link v-bind:to="''"><img src="../../assets/icons/mobile-tab-icons/user.svg" alt=""></router-link></li>
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
