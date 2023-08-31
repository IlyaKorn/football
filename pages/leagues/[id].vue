<template>
  <League v-if="currentLeague" :league="currentLeague" :isDetail="true" />
</template>

<script>
export default {
  data () {
    return {
      currentLeague: null
    }
  },

  // created () {
  //   fetch(`https://v3.football.api-sports.io/leagues?id=${this.$route.params.id}`, {
  //     'method': 'GET',
  //     'headers': {
  //       'x-rapidapi-host': 'v3.football.api-sports.io',
  //       'x-rapidapi-key': 'eea11af86c8f55004f6e8c8a77295fad'
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(res => {
  //       this.currentLeague = res.response[0]
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });
  // }
}
</script>

<style lang="scss" scoped>

</style>