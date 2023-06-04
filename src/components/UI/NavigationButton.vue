<template>
  <button class="btn-nav" :style="isType">
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
      return this.type === "next"
        ? "transform: rotate(0deg);"
        : "transform: rotate(180deg);";
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-nav {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  background: white;
  border: 0;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  padding: 12px;

  &:disabled {
    opacity: 0;
    pointer-events: none;
  }
}
</style>