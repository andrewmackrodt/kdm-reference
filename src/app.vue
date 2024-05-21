<template>
  <div id="app">
    <div id="background" />
    <menu-component />
    <div id="content" class="container-fluid">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'
import MenuComponent from 'components/menu.vue'

// @vue/component
@Component({
  components: { MenuComponent },
})
export default class extends Vue {
}
</script>

<style lang="scss" scoped>
#background {
  background: url('~images/crests/watcher-crest-box-sq.webp') no-repeat center center;
  background-origin: content-box;
  background-size: contain;
  filter: grayscale(100%) invert(1) brightness(7%) opacity(0.85);
  height: 100vh;
  padding: 10vh 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: -100;
}

#content {
  padding-top: 4.5rem;
}
</style>
