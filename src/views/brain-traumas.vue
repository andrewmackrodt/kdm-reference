<template>
  <card-list state-key="CardList.Generic.Options" :items="items" list-item-class="trauma" :has-roll-result="true" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'
import type { CardItem } from 'components/card-list'
import CardList from 'components/card-list.vue'
import HitLocations from 'enums/hit-locations'
import disorderImage from 'images/disorder.png'
import { brainTraumas } from 'references/brain-trauma'

const brainTraumaCardList: CardItem[] = Object.values(brainTraumas).map(trauma => ({
  location: HitLocations.Head,
  name: trauma.name,
  image: disorderImage,
  caption: trauma.caption,
  description: trauma.description,
  roll: trauma.roll,
}))

// @vue/component
@Component({
  components: { CardList },
})
export default class extends Vue {
  get items(): CardItem[] {
    return brainTraumaCardList
  }
}
</script>
