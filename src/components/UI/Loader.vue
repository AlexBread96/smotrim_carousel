<template>
  <div class="loader" :style="isGlobal">
    <div class="loader__spinner"></div>
  </div>
</template>

<script>
export default {
  props: {
    global: {
      type: Boolean,
      requaried: false,
      default: false,
    },
  },
  computed: {
    isGlobal() {
      return this.global ? "position: fixed;" : "position: absolute";
    },
  },
};
</script>

<style lang="scss" scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: white;
  z-index: 3;
  &__spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-top-color: #960000;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 1s ease-in-out infinite;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>