<template>
  <li v-if="!isDetail" class="league">
    <NuxtLink class="league__link" :to="`/leagues/${league.league.id}`">
      <div class="league__content">
        <img :src="league.league.logo" class="league__img" width="30" height="30" alt="Логотип лиги">
        <h3 class="league__title">{{ getLeagueTitle }}</h3>
      </div>
    </NuxtLink>
  </li>

  <div v-else class="league-detail wrapper">
    <div class="league-detail__header">
      <img :src="league.league.logo" class="league-detail__img" width="100" height="100" alt="Логотип лиги">
      <h3 class="league-detail__title">{{ getLeagueTitle }}</h3>
    </div>

    <ul class="league-detail__seasons">
      <li
          v-for="season in reverse"
          :key="league.seasons.year"
          class="league-detail__season"
      >
        <Icon class="league-detail__icon" symbol="ball" />

        <Icon
            :class="['league-detail__icon-marker', { 'league-detail__icon-marker--current': season.current }]"
            symbol="circle"
        />

        <div class="league-detail__season-period">
          <div class="league-detail__season-period-info">
            <span class="league-detail__season-start">
              <span class="league-detail__season-title">Start:</span>
              {{ season.start }}
            </span>
            <span
                v-if="!season.current"
                class="league-detail__season-end"
            >
              <span class="league-detail__season-title">End:</span>
              {{ season.end }}
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'League',

  props: {
    league: {
      type: Object,
      required: true,
      default: () => {}
    },

    isDetail: {
      type: Boolean,
      required: false,
      default: () => false
    }
  },

  computed: {
    getLeagueTitle () {
      return `${this.league.league.name} (${this.league.country.name})`
    },

    reverse () {
      return this.league.seasons.reverse()
    }
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/components/league.scss';
</style>