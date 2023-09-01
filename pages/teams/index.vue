<template>
  <div class="teams wrapper">
    <div class="teams__logotypes">
      <img
          v-for="img in teamLogotypes"
          class="team__logo"
          :src="`/img/teams/${img}.png`"
          :key="img"
          width="40"
          height="40"
          alt="Team logo"
      >
    </div>
    <h1 class="teams__title">Teams</h1>
    <form v-if="countries.length" class="teams__form">
      <h2 class="teams__subtitle">Please, select a country:</h2>
      <Select
          :options="countries"
          valueType="name"
          @selected="getLeaguesByCountry($event.name)"
      />

      <h2 class="teams__subtitle">Please, select a league:</h2>
      <Select
          v-if="leagues"
          :options="getLeagues"
          valueType="name"
          @selected="selectedLeagueId = $event.id"
      />

      <h2 class="teams__subtitle">Please, select a season:</h2>
      <Select
          v-if="leagues"
          :options="getLeagueSeasons"
          valueType="year"
          @selected="getTeamsByParams(selectedLeagueId, $event.year)"
      />
      <ul class="teams__list">
        <Team
            v-for="item in teams"
            :key="item.id"
            :team="item"
        />
      </ul>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useIndexStore } from '@/store'

export default {
  name: 'Teams',

  data () {
    return {
      selectedLeagueId: null,
      teamLogotypes: [
        'arsenal',
        'barcelona',
        'borusia-dortmund',
        'chelsea',
        'milano',
        'manchester-city',
        'manchester-united',
        'paris-saint-germain',
        'real-madrid',
        'valencia'
      ]
    }
  },

  computed: {
    ...mapState(useIndexStore, ['leagues', 'teams', 'countries', 'teams']),

    getLeagues () {
      return this.leagues.map(el => el.league)
    },

    getLeagueSeasons () {
      if (this.selectedLeagueId) {
        return this.leagues.find(el => el.league.id === this.selectedLeagueId).seasons.reverse()
      }
      return []
    }
  },

  methods: {
    ...mapActions(useIndexStore, ['getLeaguesByCountry', 'getTeamsByParams'])
  }
}
</script>

<style lang="scss" scoped>
.teams__logotypes {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.team__logo:not(:last-child) {
  margin-right: 12px;
}

.teams__title {
  text-align: center;
  margin-bottom: 14px;
}

.teams__subtitle {
  margin-bottom: 14px;
}

.teams__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 14px;
}

.teams__list {
  width: 100%;
}
</style>