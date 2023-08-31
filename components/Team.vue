<template>
  <li v-if="!isDetail" class="team">
    <NuxtLink class="team__link" :to="`/teams/${team.team.id}`">
      <div class="team__content">
        <img :src="team.team.logo" class="team__img" width="30" height="30" alt="Логотип лиги">
        <h3 class="team__title">{{ getTeamTitle }}</h3>
      </div>
    </NuxtLink>
  </li>

  <div v-else class="team-detail wrapper">
    <div class="team-detail__header">
      <img :src="team.team.logo" class="team-detail__img" width="100" height="100" alt="Логотип лиги">

      <div class="team-detail__title-info">
        <h3 class="team-detail__title">{{ getTeamTitle }}</h3>
        <p class="team-detail__founded">Founded: {{ team.team.founded }}</p>
      </div>
    </div>

    <div class="team-detail__main">
      <div class="team-detail__club">
        <img class="team-detail__club-image" :src="team.venue.image" alt="Stadium's photo">
        <p class="team-detail__figcaption">{{  team.venue.address }}</p>
      </div>
    </div>

    <div class="team-detail__structure">
      <ul class="team-detail__players">
        <li v-for="player in players" class="team-detail__player" :key="player.id">
          <img class="team-detail__player-image" :src="player.photo" alt="Player's photo">
          <div class="team-detail__player-info">
            <h4 class="team-detail__player-name">{{ player.name }}</h4>
            <p class="team-detail__player-age">Age: {{ player.age }}</p>
            <p class="team-detail__player-number">Number: {{ player.number }}</p>
            <p class="team-detail__player-position">Position: {{ player.position }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Team',

  props: {
    team: {
      type: Object,
      required: true,
      default: () => {}
    },

    isDetail: {
      type: Boolean,
      required: false,
      default: () => false
    },

    coaches: {
      type: Array,
      required: false,
      default: () => []
    },

    players: {
      type: Array,
      required: false,
      default: () => []
    }
  },

  computed: {
    getTeamTitle () {
      return `${this.team.team.name} (${this.team.team.country})`
    },

    reverse () {
      return this.team?.seasons.reverse()
    }
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/components/team.scss';
</style>