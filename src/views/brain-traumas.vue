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
      <li v-for="trauma in traumas" class="list-inline-item card-md trauma">
        <p v-if="dice && trauma.roll" class="roll">
          <span v-html="trauma.roll" />
        </p>
        <p class="name" v-html="trauma.name" />
        <div class="location">
          <img :src="src" :srcset="srcset" alt="Brain" title="Brain">
        </div>
        <p v-if="trauma.caption" class="caption" v-html="trauma.caption" />
        <p class="description" v-html="trauma.description" />
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
import disorderImage from 'images/disorder.png'
import { BrainTrauma, brainTraumas } from 'references/brain-trauma'

// @vue/component
@Component
export default class extends VuexComponent {
  protected readonly _stateKey = 'Reference.BrainTrauma'
  dice = false
  severity = false

  created() {
    Object.assign(this, this.getComponentGlobalStateMany({
      dice: this.dice,
      severity: this.severity,
    }))
  }

  get traumas() {
    return Object.assign({}, Object.keys(brainTraumas).map(k => {
      const trauma = brainTraumas[k]
      const clone = Object.create(trauma)
      if (trauma.caption) {
        clone.caption = '<p>' + trauma.caption
            .replace(/\[([^\]]+)\]/g, '<b>$1</b>')
            .replace(/\n/mg, '</p><p>') + '</p>'
      }
      clone.description = '<p>' + trauma.description
          .replace(/\[([^\]]+)\]/g, '<b>$1</b>')
          .replace(/\n/mg, '</p><p>') + '</p>'
      return clone
    }).sort((a: BrainTrauma, b: BrainTrauma): number => {
      if (this.severity) {
        return 0
      }

      return a.name.localeCompare(b.name)
    }))
  }

  get src() {
    return disorderImage.src
  }

  get srcset() {
    return disorderImage.srcSet
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
