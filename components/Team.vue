<template>
  <li v-if="!isDetail" class="team">
    <NuxtLink class="team__link" :to="`/teams/${team.team.id}`">
      <div class="team__content">
        <img :src="team.team.logo" class="team__img" width="30" height="30" alt="Логотип лиги">
        <h3 class="team__title">{{ getteamTitle }}</h3>
      </div>
    </NuxtLink>
  </li>

  <div v-else class="team-detail wrapper">
    <div class="team-detail__header">
      <img :src="team.team.logo" class="team-detail__img" width="100" height="100" alt="Логотип лиги">
      <h3 class="team-detail__title">{{ getteamTitle }}</h3>
    </div>

    <ul class="team-detail__seasons">
      <li
          v-for="season in reverse"
          :key="team.seasons.year"
          class="team-detail__season"
      >
        <Icon class="team-detail__icon" symbol="ball" />

        <Icon
            :class="['team-detail__icon-marker', { 'team-detail__icon-marker--current': season.current }]"
            symbol="circle"
        />

        <div class="team-detail__season-period">
          <div class="team-detail__season-period-info">
            <span class="team-detail__season-start">
              <span class="team-detail__season-title">Start:</span>
              {{ season.start }}
            </span>
            <span
                v-if="!season.current"
                class="team-detail__season-end"
            >
              <span class="team-detail__season-title">End:</span>
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
  name: 'team',

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
    }
  },

  computed: {
    getteamTitle () {
      return `${this.team.team.name} (${this.team.country.name})`
    },

    reverse () {
      return this.team.seasons.reverse()
    }
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/components/team.scss';
</style>