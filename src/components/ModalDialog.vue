<template>
  <div v-if="show" class="modal">
    <div class="modal__overlay" @click="closeModal"></div>
    <close-button class="modal__close" @click="closeModal" />
    <div class="modal__container">
      <div class="modal__body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import CloseButton from "./UI/CloseButton.vue";
export default {
  components: { CloseButton },
  props: {
    show: Boolean,
    title: String,
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }

  &__container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__close {
    position: absolute; 
  }

  &__body {
    margin-top: 20px;
  }
}
</style>