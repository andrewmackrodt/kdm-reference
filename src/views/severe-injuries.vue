<template>
  <card-list state-key="CardList.Generic.Options" :items="items" list-item-class="injury" :has-roll-result="true" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'
import type { CardItem } from 'components/card-list'
import CardList from 'components/card-list.vue'
import { injuries } from 'references/injuries'

const images: Record<string, string> = {
  head: require('images/injuries/head.webp'),
  body: require('images/injuries/body.webp'),
  arms: require('images/injuries/arms.webp'),
  waist: require('images/injuries/waist.webp'),
  legs: require('images/injuries/legs.webp'),
}

const severeInjuriesCardList: CardItem[] = Object.values(injuries).map(injury => ({
  location: injury.location,
  name: injury.name,
  image: images[injury.location],
  caption: injury.caption,
  description: injury.description,
  roll: injury.roll,
}))

// @vue/component
@Component({
  components: { CardList },
})
export default class extends Vue {
  get items(): CardItem[] {
    return severeInjuriesCardList
  }
}
</script>
