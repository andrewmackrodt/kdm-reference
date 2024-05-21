<template>
  <card-list state-key="Reference.BrainTrauma" :items="items" list-item-class="trauma" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'
import CardList, { type CardItem } from 'components/card-list'
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
