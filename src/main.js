import {
    createApp
} from 'vue'
import App from './App.vue'
import {
    Swiper,
    SwiperSlide
} from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/scss/navigation';

const app = createApp(App);

app.component("Swiper", Swiper);
app.component("SwiperSlide", SwiperSlide);


app.mount('#app')