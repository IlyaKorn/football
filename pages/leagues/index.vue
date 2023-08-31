<template>
  <div class="leagues wrapper">
    <h1 class="leagues__title">Leagues</h1>
    <form v-if="countries.length" class="leagues__form">
      <h2 class="leagues__subtitle">Please, select a country:</h2>
      <Select
          :options="countries"
          valueType="name"
          @selected="getLeaguesByCountry($event.name)"
      />
      <ul class="leagues__list">
        <League
            v-for="item in leagues"
            :key="item.id"
            :league="item"
        />
      </ul>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useIndexStore } from '@/store'

export default {
  name: 'Leagues',

  computed: {
    ...mapState(useIndexStore, ['leagues', 'countries'])
  },

  methods: {
    ...mapActions(useIndexStore, ['getLeaguesByCountry']),
  }
}
</script>

<style lang="scss" scoped>
  @use '@/assets/styles/components/leagues.scss';
</style>