// Landing page displays map in general (whether logged in or not logged in)

<template>
  <div>
    <div class="title-container">
      <div class="vh-center"><h5>Welcome to the Landing Page!</h5></div>
    </div>
    <div class="map-container">
      <GoogleMap />
    </div>
  </div>

</template>

<script>
  import GoogleMap from "@/components/Map";

  export default {
    name: "Landing",
    components: {
      GoogleMap
    }
  };
</script>
