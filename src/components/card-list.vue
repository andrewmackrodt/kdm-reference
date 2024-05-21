<template>
  <div class="component">
    <div v-if="stateKey" class="container-fluid">
      <div class="custom-switch">
        <label>
          <input v-model="small" class="custom-control-input" type="checkbox">
          <span class="custom-control-label">Show Small Cards</span>
        </label>
      </div>
      <div v-if="hasRollResult" class="custom-switch">
        <label>
          <input v-model="showRoll" class="custom-control-input" type="checkbox">
          <span class="custom-control-label">Show Roll Result</span>
        </label>
      </div>
      <div v-if="hasRollResult" class="custom-switch">
        <label>
          <input v-model="sortRoll" class="custom-control-input" type="checkbox">
          <span class="custom-control-label">Sort by Roll Result</span>
        </label>
      </div>
    </div>
    <ul class="list-inline card-list">
      <li v-for="card in cards" class="list-inline-item" :class="[listItemClass, cardClass]">
        <div
          v-if="card.crest?.image" class="expansion"
          :class="([
            ...(card.crest.color ? [] : ['nobg']),
            ...(card.crest.hidden ? ['hidden'] : []),
          ]) as string[]"
          :style="{ 'background-color': card.crest.color }"
        >
          <img :src="card.crest.image" :alt="card.crestText" :title="card.crestText">
        </div>
        <p v-if="showRoll && card.roll" class="roll">
          <span v-html="card.roll" />
        </p>
        <p class="name" :style="card.nameStyle" v-html="card.name" />
        <div v-if="card.image" class="location">
          <img :src="card.image" :alt="card.location" :title="card.location">
        </div>
        <p v-if="card.caption" class="caption" v-html="card.caption" />
        <p class="description" v-html="card.description" />
        <div class="record-archive">
          <p><i>📝</i> <span class="keyword">Record</span> and archive.</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { Component, Prop, Watch } from 'vue-facing-decorator'
import { CardItem } from 'components/card-list'
import VuexComponent from 'components/vuex-component'

import 'styles/cards.scss'

interface TemplateCardItem extends CardItem {
  crestText?: string
  nameStyle?: Record<string, string>
}

// @vue/component
@Component
export default class extends VuexComponent {
  @Prop({ type: String }) readonly stateKey?: string
  @Prop({ type: Array as PropType<CardItem[]>, required: true }) readonly items!: CardItem[]
  @Prop({ type: String }) readonly listItemClass?: string
  @Prop({ type: Boolean, default: false }) hasRollResult!: boolean
  showRoll = false
  sortRoll = false
  small = false

  created() {
    if ( ! this.stateKey) {
      return
    }
    this._stateKey = this.stateKey
    Object.assign(this, this.getComponentGlobalStateMany({
      ...(this.hasRollResult ? {
          showRoll: this.showRoll,
          sortRoll: this.sortRoll,
        } : undefined),
      small: this.small,
    }))
  }

  get cardClass(): string {
    return this.small ? 'card-sm' : 'card-md'
  }

  get cards(): TemplateCardItem[] {
    return Object.values(this.items).map(item => {
      const nameStyle: Record<string, string> = {}
      const name = item.name.replace(/\[([^\]]+)\]/g, '$1')
      if (item.crest && name.length > 16) {
        nameStyle.paddingLeft = '3rem'
      }
      const highlight = name !== item.name
      if (highlight && item.crest?.color) {
        nameStyle.color = item.crest.color
      }
      // todo use story event placeholder image
      const crestImage = item.crest?.image ?? ''
      return {
        crestText: item.crest?.name ? `${item.crest.name} Expansion` : undefined,
        crest: item.crest,
        location: item.location[0].toUpperCase() + item.location.slice(1),
        nameStyle,
        name,
        image: item.image,
        caption: item.caption?.replace(/\[([^\]]+)\]/g, '<b>$1</b>').replace(/\n/mg, '</p><p>'),
        description: item.description
            .replace(/\[activation\]/g, '<i title="activation">⚡</i>')
            .replace(/\[endeavor\]/g, '<i title="endeavor">✪</i>')
            .replace(/\[monster:([^\]]+)\]/g, `<span class="text-nowrap"><img class="crest" src="${crestImage}" alt="monster action" title="monster action" /> <b>$1</b></span>`)
            .replace(/\[movement\]/g, '<i title="movement">♘</i>')
            .replace(/\[story:([^\]]+)\]/g, '<i class="text-nowrap" title="story event">📖<b> $1</b></i>')
            .replace(/\[([^\]]+)\]/g, '<b>$1</b>')
            .replace(/\n/mg, '</p><p>'),
        roll: item.roll,
      }
    }).sort((a: CardItem, b: CardItem): number => {
      if (this.sortRoll) {
        // todo sort by roll
        return 0
      }
      return a.name.localeCompare(b.name)
    })
  }

  @Watch('small')
  onSmallChanged(value: boolean) {
    this.setComponentGlobalState('small', value)
  }

  @Watch('showRoll')
  onShowRollChanged(value: boolean) {
    this.setComponentGlobalState('showRoll', value)
  }

  @Watch('sortRoll')
  onSortRollChanged(value: boolean) {
    this.setComponentGlobalState('sortRoll', value)
  }
}
</script>
