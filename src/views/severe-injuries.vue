<template>
  <div class="component">
    <div class="container-fluid">
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
      <li v-for="injury in injuries" class="list-inline-item card-md injury">
        <p v-if="dice && injury.roll" class="roll">
          <span v-html="injury.roll" />
        </p>
        <p class="name" v-html="injury.name" />
        <div class="location">
          <img :src="injury.src" :alt="injury.alt" :title="injury.alt">
        </div>
        <p v-if="injury.caption" class="caption" v-html="injury.caption" />
        <p class="description" v-html="injury.description" />
        <div class="record-archive">
          <p><i>📝</i> <span class="keyword">Record</span> and archive.</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Watch } from 'vue-facing-decorator'
import VuexComponent from 'components/vuex-component'
import { Injury, injuries } from 'references/injuries'

const images: Record<string, string> = {
  head: require('images/injuries/head.webp'),
  body: require('images/injuries/body.webp'),
  arms: require('images/injuries/arms.webp'),
  waist: require('images/injuries/waist.webp'),
  legs: require('images/injuries/legs.webp'),
}

// @vue/component
@Component
export default class extends VuexComponent {
  protected readonly _stateKey = 'Reference.SevereInjuries'
  dice = false
  severity = false

  created() {
    Object.assign(this, this.getComponentGlobalStateMany({
      dice: this.dice,
      severity: this.severity,
    }))
  }

  get injuries() {
    return Object.assign({}, Object.keys(injuries).map(k => {
      const injury = injuries[k]
      const clone = Object.create(injury)
      if (injury.caption) {
        clone.caption = '<p>' + injury.caption
            .replace(/\[([^\]]+)\]/g, '<b>$1</b>')
            .replace(/\n/mg, '</p><p>') + '</p>'
      }
      clone.description = '<p>' + injury.description
          .replace(/\[([^\]]+)\]/g, '<b>$1</b>')
          .replace(/\n/mg, '</p><p>') + '</p>'
      clone.src = images[injury.location]
      clone.alt = injury.location[0].toUpperCase() + injury.location.slice(1)
      return clone
    }).sort((a: Injury, b: Injury): number => {
      if (this.severity) {
        return 0
      }
      return a.name.localeCompare(b.name)
    }))
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

<style lang="scss" scoped>
img {
  margin-left: -0.175in;
}
</style>
