// Landing page displays map in general (whether logged in or not logged in)

<template>
  <div >
    <br/>
    <h4 class="center">Welcome to the Landing Page!</h4>
    <br/>
    <div class="map-container">
      <GoogleMap />
    </div>
  </div>

</template>

<script>
import GoogleMap from "../components/Map";

export default {
  name: "Landing",
  components: {
    GoogleMap
  }
};
</script>
