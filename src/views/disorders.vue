<template>
  <card-list :items="items" list-item-class="disorder" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'
import CardList, { type CardItem } from 'components/card-list'
import HitLocations from 'enums/hit-locations'
import disorderImage from 'images/disorder.png'
import { disorders } from 'references/disorders'

const disordersCardList: CardItem[] = Object.values(disorders).map(disorder => {
  const res: CardItem = {
    location: HitLocations.Head,
    name: disorder.name,
    image: disorderImage,
    caption: disorder.caption,
    description: disorder.description,
  }
  if (disorder.expansion?.crest) {
    res.crest = {
      name: disorder.expansion.name,
      image: disorder.expansion.crest!,
      color: disorder.expansion.color!,
    }
  }
  return res
})

// @vue/component
@Component({
  components: { CardList },
})
export default class extends Vue {
  get items(): CardItem[] {
    return disordersCardList
  }
}
</script>

<style lang="scss" scoped>
:deep(img) {
  filter: brightness(67%);
}
</style>
