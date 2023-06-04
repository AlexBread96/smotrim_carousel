<template>
  <button class="btn-nav" :class="isType">
    <img src="@/assets/icon/arrow.svg" />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      requaried: false,
      default: "next",
    },
  },
  computed: {
    isType() {
      return this.type === "next" ? "next" : "prev";
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-nav {
  position: absolute;
  top: 80px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  background: white;
  border: 0;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  padding: 12px;
  z-index: 2;
  &.prev {
    left: 8px;
    transform: rotate(180deg);
  }
  &.next {
    right: 8px;
    transform: rotate(0);
  }
  &:disabled {
    opacity: 0;
    pointer-events: none;
  }
}
</style>