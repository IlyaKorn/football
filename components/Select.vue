<template>
  <div ref="select" :class="['select', {'select--reverse': isSelectOpen }]">
    <div
        :class="['select__value', {'select__value--placeholder': !value }]"
        @click="isSelectOpen = true"
    >
      {{ getValue }}
    </div>

    <ul v-if="isSelectOpen" class="select__list">
      <li
          v-for="option in options"
          class="select__option"
          @click="handleSelected(option)"
      >
        {{ option[valueType] }}
      </li>
    </ul>

    <Icon class="select__arrow" symbol="arrow" />
  </div>
</template>

<script>
export default {
  name: 'Select',

  props: {
    options: {
      type: Array,
      required: false,
      default: () => []
    },

    valueType: {
      type: String,
      required: false,
      default: () => ''
    }
  },

  emits: ['selected'],

  data () {
    return {
      isSelectOpen: false,
      value: null
    }
  },

  mounted () {
    document.addEventListener('click',  this.eventHandler)
  },

  beforeUnmount() {
    document.removeEventListener('click', this.eventHandler)
  },

  computed: {
    getValue () {
      return this.value ? this.value[this.valueType] : 'Please, select a value'
    }
  },

  methods: {
    handleSelected (option) {
      this.value = option
      this.closeSelect()
      this.$emit('selected', this.value)
    },

    closeSelect () {
      this.isSelectOpen = false
    },

    eventHandler (e) {
      if (this.isSelectOpen && !e.target.className.includes('select__value')) {
        this.closeSelect()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/components/select.scss';
</style>