<template>
  <Team
      v-if='currentTeam'
      :team='currentTeam'
      :isDetail='true'
      :players='players'
  />
</template>

<script>

export default {
  data () {
    return {
      currentTeam: null,
      players: []
    }
  },

  created () {
    this.getTeam()
    this.getPlayers()
  },

  methods: {
    getTeam () {
      fetch(`https://v3.football.api-sports.io/teams?id=${this.$route.params.id}`, {...fetchSettings})
        .then(response => response.json())
        .then(res => {
          this.currentTeam = res.response[0]
        })
        .catch(err => {
          console.error(err);
        })
    },

    getPlayers () {
      fetch(`https://v3.football.api-sports.io/players/squads?team=${this.$route.params.id}`, {...fetchSettings})
        .then(response => response.json())
        .then(res => {
          console.log(res)
          this.players = res.response[0].players
        })
        .catch(err => {
          console.error(err);
        })
    }
  }
}
</script>