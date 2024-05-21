<template>
  <div id="menu" class="fixed-top navbar-dark component">
    <nav class="navbar navbar-expand-lg">
      <span class="navbar-brand">KDM Reference</span>
      <button
        class="navbar-toggler collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#menu-dropdown"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div id="menu-dropdown" class="navbar-collapse collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              Home
            </router-link>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li v-for="menuItem in menuItems" :class="['nav-item'].concat(menuItem.items ? ['dropdown'] : [])">
            <router-link v-if="!menuItem.items" class="nav-link" :to="menuItem.href">
              {{ menuItem.name }}
            </router-link>
            <span
              v-if="menuItem.items"
              class="nav-link dropdown-toggle"
              role="button"
              data-toggle="dropdown"
            >
              {{ menuItem.name }}
            </span>
            <div
              v-if="menuItem.items"
              class="dropdown-menu"
            >
              <router-link
                v-for="childItem in menuItem.items" :key="childItem.name"
                class="dropdown-item"
                :to="childItem.href"
              >
                {{ childItem.name }}
              </router-link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'

interface MenuItem {
  name: string
  href: string
  items?: MenuItem[]
}

// @vue/component
@Component
export default class extends Vue {
  private _documentClickListener?: EventListener

  mounted() {
    const navbar = this.$el.querySelector('nav.navbar')
    const navbarToggler = navbar.querySelector('.navbar-toggler')
    const $navbarCollapse = $(navbar.querySelector('.navbar-collapse'))

    navbarToggler.addEventListener('click', () => {
      if ( ! navbarToggler.classList.contains('collapsed')) {
        if (this._documentClickListener) {
          document.removeEventListener('click', this._documentClickListener)
          this._documentClickListener = undefined
        }
        return
      }

      this._documentClickListener = e => {
        const target = e.target as HTMLElement
        if (navbarToggler.contains(target) || (
            navbar.contains(target)
              && target.classList.contains('nav-link')
              && target.classList.contains('dropdown-toggle')
            )
        ) {
          return
        }
        $navbarCollapse.collapse('hide')
        document.removeEventListener('click', this._documentClickListener!)
        this._documentClickListener = undefined
      }

      document.addEventListener('click', this._documentClickListener)
    })
  }

  get menuItems(): MenuItem[] {
    return [
      { name: 'Brain Traumas', href: '/reference/brain-traumas' },
      { name: 'Disorders', href: '/reference/disorders' },
      { name: 'Severe Injuries', href: '/reference/severe-injuries' },
    ]
  }
}
</script>

<style lang="scss" scoped>
@import "styles/env";

#menu, .dropdown-menu {
  background: #101010;
}

.dropdown-item {
  color: rgba(255, 255, 255, 0.5);

  &:hover, &:focus {
    background-color: transparent;
    color: rgba(255, 255, 255, 0.75);
  }
}

@include media-breakpoint-up(lg) {
  .dropdown > .dropdown-menu {
    margin-top: -0.75rem;
    padding-top: 0.75rem;
  }

  .dropdown:hover > .dropdown-menu {
    display: block;
  }
}

.nav-item {
  cursor: pointer;

  .dropdown:hover {
    color: rgba(255, 255, 255, 0.75);
  }
}
</style>
