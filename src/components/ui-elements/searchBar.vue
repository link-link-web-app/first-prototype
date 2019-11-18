<template>
  <div class="search-window">
    <div class="search-window__bar">
      <div class="search-container">
        <img src="../../assets/icons/search.png" alt="">
      </div>
      <input
        ref="autocomplete"
        v-model="searchQuery"
        placeholder="Search events, locations, dates"
      >
    </div>
    <!-- <div class="search-window__dropdown">
      <div>{{ searchQuery }}</div>
    </div> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchQuery: '',
      }
    },

    mounted() {
    //   // Google Places Form Autocomplete (Need to integrate with "events")
    //   this.autocomplete = new google.maps.places.Autocomplete(
    //     (this.$refs.autocomplete),
    //     {types: ['geocode']}
    //   );
    //   this.autocomplete.addListener('place_changed', () => {
    //     let place = this.autocomplete.getPlace();
    //     let ac = place.address_components;
    //     let lat = place.geometry.location.lat();
    //     let lon = place.geometry.location.lng();
    //     let city = ac[0]["short_name"];
    //
    //     console.log(`The user picked ${city} with the coordinates ${lat}, ${lon}`);
    //   });
    }
  }
</script>
