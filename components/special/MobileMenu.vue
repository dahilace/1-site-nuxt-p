<script setup lang="ts">
const menu = useModalStore()
</script>

<template>
  <div
    id="menu-toggle"
    @click="menu.isNavOpen ? menu.closeNav() : menu.openNav()"
    :class="menu.isNavOpen ? 'open' : ''"
  >
    <div id="cross">
      <span></span>
      <span></span>
    </div>
    <div id="burger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  transition: 0.2s ease-in-out;
}
#menu-toggle {
  z-index: 1000;
  width: 50px;
  height: 50px;
  position: relative;
  cursor: pointer;
  span {
    display: block;
    background-color: var(--main-color);
    border-radius: 2px;
    transition-property: width, height, transform;
  }
  #burger {
    position: absolute;
    height: 100%;
    width: 100%;
    span {
      width: 32px;
      height: 3px;
      position: relative;
      left: 10px;
      margin: 10px 0;
      &:nth-child(1) {
        transition-delay: 0.2s;
      }
      &:nth-child(2) {
        transition-delay: 0.3s;
      }
      &:nth-child(3) {
        transition-delay: 0.375s;
      }
    }
  }
  #cross {
    position: absolute;
    height: 100%;
    width: 100%;
    transform: rotate(45deg);
    span {
      &:nth-child(1) {
        height: 0%;
        width: 4px;
        position: absolute;
        top: 10%;
        left: 24px;
        transition-delay: 0s;
      }
      &:nth-child(2) {
        width: 0%;
        height: 4px;
        position: absolute;
        left: 10%;
        top: 24px;
        transition-delay: 0.1s;
      }
    }
  }
}

#menu-toggle.open {
  #burger {
    span {
      width: 0%;
      &:nth-child(1) {
        transition-delay: 0s;
      }
      &:nth-child(2) {
        transition-delay: 0.125s;
      }
      &:nth-child(3) {
        transition-delay: 0.25s;
      }
    }
  }
  #cross {
    span {
      &:nth-child(1) {
        height: 80%;
        transition-delay: 0.4s;
      }
      &:nth-child(2) {
        width: 80%;
        transition-delay: 0.2s;
      }
    }
  }
}
</style>
