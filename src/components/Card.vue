<template>
  <div class="card">
    <div class="card__img">
      <img :src="avatar" alt="" />
    </div>
    <div class="card__name">
      {{ name }} <br />
      {{ surName }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      reqauried: true,
    },
    name: {
      type: String,
      reqauried: true,
    },
    surName: {
      type: String,
      reqauried: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  width: 160px;
  height: 208px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  color: #000000;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer; 
  &:hover {
    background-color: rgba($color: #000000, $alpha: .04)
  }
  &__img { 
    width: 144px;
    height: 144px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 10px; 
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>