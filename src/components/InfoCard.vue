<template>
  <div class="info">
    <loader style="border-radius: inherit" v-show="isLoading" />
    <div class="info__image">
      <a target="_blank" :href="link"> </a>
      <img :src="image" alt="" srcset="" />
    </div>
    <div class="info__content">
      <div class="info__job-title">
        {{ jobTitle }}
      </div>
      <div class="info__name">
        {{ name }} <br />
        {{ surName }}
      </div>
      <div class="info__dsc">
        {{ fullName }} — <br />
        {{ dsc }}
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/UI/Loader.vue";
export default {
  components: { Loader },
  props: {
    image: {
      type: String,
      requaried: true,
    },
    jobTitle: {
      type: String,
      requaried: false,
      default: "Ведущий",
    },
    name: {
      type: String,
      reqauried: true,
    },
    surName: {
      type: String,
      reqauried: true,
    },
    fullName: {
      type: String,
      reqauried: true,
    },
    dsc: {
      type: String,
      reqauried: false,
      default:
        "российский журналист и общественный деятель, ведущий на телевидении и радио, автор документальных фильмов и книг, кандидат экономических наук. ",
    },
    link: {
      type: String,
      reqauried: true,
    },
  },
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = !this.isLoading;
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
.info {
  position: relative;
  width: 286px;
  height: 380px;
  filter: drop-shadow(0px 16px 32px rgba(0, 0, 0, 0.05));
  border-radius: 8px;
  background-color: #fff;
  text-align: left;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  &__image {
    position: relative;
    width: 100%;
    height: 160px;
    overflow: hidden;
    &::after {
      content: "";
      position: absolute;
      background-image: url("@/assets/icon/play-button.svg");
      width: 108px;
      height: 72px;
      top: 0;
      right: 0;
      cursor: pointer;
      z-index: 1;
    }
    a {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 2;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__content {
    padding: 16px 16px 0;
    overflow: hidden;
    flex: 1;
  }
  &__job-title {
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #b8c2cc;
    margin-bottom: 4px;
  }
  &__name {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    margin-bottom: 4px;
  }
  &__dsc {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    background: linear-gradient(180deg, #000000 25%, rgba(0, 0, 0, 0) 53.57%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
}
</style>