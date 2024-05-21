<template>
  <div class="component">
    <ul class="list-inline card-list">
      <li v-for="disorder in disorders" class="list-inline-item card-md disorder">
        <div
          v-if="disorder.expansion && disorder.expansion.crest"
          class="expansion"
          :style="{
            'background-color': disorder.expansion.color,
          }"
        >
          <img
            :src="disorder.expansion.crest"
            :alt="disorder.expansion.name"
            :title="disorder.expansion.name"
          >
        </div>
        <p class="name">
          {{ disorder.name }}
        </p>
        <div class="location">
          <img src="~images/disorder.png" alt="Head">
        </div>
        <p v-if="disorder.caption" class="caption" v-html="disorder.caption" />
        <p class="description" v-html="disorder.description" />
        <div class="record-archive">
          <p><i>📝</i> <span class="keyword">Record</span> and archive.</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'
import { disorders } from 'references/disorders'

// @vue/component
@Component
export default class extends Vue {
  get disorders() {
    return Object.assign({}, Object.keys(disorders).map(k => {
      const disorder = disorders[k]
      const clone = Object.create(disorder)
      if (disorder.caption) {
        clone.caption = '<p>' + disorder.caption
            .replace(/\[([^\]]+)\]/g, '<b>$1</b>')
            .replace(/\n/mg, '</p><p>') + '</p>'
      }
      clone.description = '<p>' + disorder.description
          .replace(/\[([^\]]+)\]/g, '<b>$1</b>')
          .replace(/\n/mg, '</p><p>') + '</p>'

      return clone
    }))
  }
}
</script>

<style lang="scss" scoped>
img {
  filter: brightness(33%);
}
</style>
