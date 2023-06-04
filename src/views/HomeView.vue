<template>
  <loader v-if="isLoading" global />
  <div class="container">
    <swiper
      :modules="modules"
      :slides-per-view="slidesPerView"
      :space-between="16"
      :navigation="{
        nextEl: '.custom-button-next',
        prevEl: '.custom-button-prev',
      }"
    >
      <swiper-slide v-for="person in persons" :key="person.id">
        <card
          @click="showDialog(person.id)"
          :name="person.name"
          :surName="person.surname"
          :avatar="`https://api.smotrim.ru/api/v1/pictures/${person.picId}/bq/redirect`"
        ></card>
      </swiper-slide>
    </swiper>
    <navigation-button class="custom-button-prev" type="prev" />
    <navigation-button class="custom-button-next" />
  </div>
  <modal-dialog :show="showModal" @close="showModal = false">
    <info-card
      :image="`https://api.smotrim.ru/api/v1/pictures/${personInfo.picId}/bq/redirect`"
      :name="personInfo.name"
      :surName="personInfo.surname"
      :fullName="personInfo.title"
      :link="personInfo.url"
    />
  </modal-dialog>
</template>

<script>
import { getPersons } from "@/api/persons";
import { Navigation } from "swiper";
import Card from "@/components/Card.vue";
import NavigationButton from "@/components/UI/NavigationButton.vue";
import Loader from "@/components/UI/Loader.vue";
import ModalDialog from "@/components/ModalDialog.vue";
import InfoCard from "@/components/InfoCard.vue";
export default {
  components: { Card, NavigationButton, Loader, ModalDialog, InfoCard },
  data() {
    return {
      persons: null,
      personInfo: null,
      isLoading: false,
      showModal: false,
      titleModal: null,
      modules: [Navigation],
    };
  },
  methods: {
    showDialog(idx) {
      this.personInfo = this.persons.find((el) => el.id === idx);
      this.showModal = true;
      this.titleModal = idx;
    },
  },
  mounted() {
    this.isLoading = true;
    getPersons(this);
    window.addEventListener("resize", this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },

  computed: {
    slidesPerView() {
      if (window.innerWidth >= 1440) {
        return 8;
      } else if (window.innerWidth >= 1024) {
        return 6;
      } else if (window.innerWidth >= 768) {
        return 4;
      } else if (window.innerWidth >= 568) {
        return 3;
      } else if (window.innerWidth >= 400) {
        return 2;
      } else {
        return 1;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  max-width: 1440px;
  height: 256px;
  margin: 0 auto;
  padding: 24px;
}
.btns-nav {
}
</style>