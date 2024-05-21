<template>
  <div class="component">
    <div v-if="stateKey" class="container-fluid">
      <div class="custom-switch">
        <label>
          <input v-model="dice" class="custom-control-input" type="checkbox">
          <span class="custom-control-label">Toggle Roll Indicators</span>
        </label>
      </div>
      <div class="custom-switch">
        <label>
          <input v-model="severity" class="custom-control-input" type="checkbox">
          <span class="custom-control-label">Sort by Severity</span>
        </label>
      </div>
    </div>
    <ul class="list-inline card-list">
      <li v-for="card in cards" class="list-inline-item card-md" :class="[listItemClass]">
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
        <p v-if="dice && card.roll" class="roll">
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

interface TemplateCardItem extends CardItem {
  crestText?: string
  nameStyle?: Record<string, string>
}

// @vue/component
@Component
export default class extends VuexComponent {
  @Prop() readonly stateKey?: string
  @Prop({ type: Array as PropType<CardItem[]>, required: true }) readonly items!: CardItem[]
  @Prop() readonly listItemClass?: string
  dice = false
  severity = false

  created() {
    if ( ! this.stateKey) {
      return
    }
    this._stateKey = this.stateKey
    super.created()
    Object.assign(this, this.getComponentGlobalStateMany({
      dice: this.dice,
      severity: this.severity,
    }))
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
            .replace(/\[endeavor\]/g, '<i title="endeavor">✪</i>')
            .replace(/\[monster:([^\]]+)\]/g, `<span class="text-nowrap"><img class="crest" src="${crestImage}" alt="monster action" title="monster action" /> <b>$1</b></span>`)
            .replace(/\[movement\]/g, '<i title="movement">♘</i>')
            .replace(/\[([^\]]+)\]/g, '<b>$1</b>')
            .replace(/\n/mg, '</p><p>'),
        roll: item.roll,
      }
    }).sort((a: CardItem, b: CardItem): number => {
      if (this.severity) {
        // todo sort by roll
        return 0
      }
      return a.name.localeCompare(b.name)
    })
  }

  @Watch('dice')
  onDiceChanged(value: boolean) {
    this.setComponentGlobalState('dice', value)
  }

  @Watch('severity')
  onSeverityChanged(value: boolean) {
    this.setComponentGlobalState('severity', value)
  }
}
</script>
