<template>
  <card-list state-key="CardList.Generic.Options" :items="items" list-item-class="disorder" />
</template>

<script lang="ts">
import { Component } from 'vue-facing-decorator'
import type { CardItem } from 'components/card-list'
import CardList from 'components/card-list.vue'
import VuexComponent from 'components/vuex-component'
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
  if (disorder.crest || disorder.expansion?.crest) {
    let image: string | undefined
    let color: string | undefined
    const names: string[] = []
    if (disorder.expansion) {
      names.push(disorder.expansion.name)
      image = disorder.expansion.crest
      color = disorder.expansion.color
    }
    if (typeof disorder.crest === 'object') {
      names.unshift(disorder.crest.name)
      image = disorder.crest.image
    }
    const hidden = disorder.crest === false
    if (image) {
      let name: string | undefined = names.filter(Boolean).join(' - ')
      if (name.length === 0) {
        name = undefined
      }
      res.crest = { image, name, color, hidden }
    }
  }
  return res
})

// @vue/component
@Component({
  components: { CardList },
})
export default class extends VuexComponent {
  get items(): CardItem[] {
    return disordersCardList
  }
}
</script>

<style lang="scss" scoped>
:deep(.location img) {
  filter: brightness(67%);
}
</style>
