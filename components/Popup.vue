<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
} from '@headlessui/vue';
import 'swiper/css/navigation';

interface DetailCard {
  detail_src: string[];
  detail_text: string[];
}

const props = defineProps<{
  detail_card: DetailCard;
  subtitle: string;
}>();

const emits = defineEmits<{
  (e: 'close'): void;
}>();

const isOpen = ref<boolean>(true);

function closeModal(): void {
  isOpen.value = false;
  setTimeout(() => {
    emits('close');
  }, 380);
}

function openModal(): void {
  isOpen.value = true;
}
</script>



<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="$emit('close')" class="relative z-10">

      <TransitionChild 
       as="template" 
       enter="duration-300 ease-out" 
       enter-from="opacity-0" 
       enter-to="opacity-100"
       leave="duration-200 ease-in-out" 
       leave-from="opacity-100" 
       leave-to="opacity-0">
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>


      <div class="fixed inset-0 overflow-y-auto  px-10">
        <div class="flex min-h-full items-center justify-center text-center ">
          <TransitionChild 
            as="template" 
            enter="duration-300 ease-out" 
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100" 
            leave="duration-200 ease-in" 
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95">
            <DialogPanel
              class="w-full max-w-full transform overflow-hidden bg-custom-bg p-6 text-left align-middle shadow-xl transition-all ">

              <button @click="closeModal">
                <img class="Popup__closeBtn" src="/public/img/closeBtn.svg" alt="">
              </button>

              <Swiper 
                id="swiper2" 
                :spaceBetween="115" 
                :slidesPerView="1" 
                :centeredSlides="false" 
                class="mySwiper2"
              >
                <SwiperSlide v-for="(src, index) in props.detail_card.detail_src" :key="index">
                  <div class="Popup__areaItems">
                    <img :src="src" />

                    <div class="Popup__items">
                      <div class="Popup__customPagination">
                        0{{ index + 1 }} / 0{{ props.detail_card.detail_src.length }}
                      </div>

                      <div class="Popup__bottomItems">
                        <h2 class="Popup__itemH2">{{ props.subtitle }}</h2>
                        <p class="Popup__itemP">{{ props.detail_card.detail_text[index] }}</p>
                      </div>

                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>

            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>


<style lang="scss">
.mySwiper2 {
  width: 100%;
  position: relative;
  background-color: #F1F1ED;
  user-select: none;
}

.Popup__closeBtn {
  position: absolute;
  top: 0;
  right: 0;
  padding-top: 20px;
  padding-right: 40px;
  z-index: 999;
}

.Popup__areaItems {
  display: flex;
}

.Popup__itemP {
  font-family: 'Mabry Pro Regular';
  font-size: 16px;
  color: #282525B2;
  line-height: 120%;
  position: absolute;
  bottom: 40px;
  // width: 400px;
}

.Popup__items {
  position: relative;
  flex-wrap: wrap;
  text-align: left;
  padding: 0px 0px 40px 40px;
}

.Popup__itemH2 {
  font-family: 'Mabry Pro Regular';
  padding-top: 32px;
  font-size: 62px;
  line-height: 90%;

}

.mySwiper2 .Popup__customPagination {
  font-family: 'Mabry Pro Regular';
  font-size: 16px;
  z-index: -1;
}

.Popup__bottomItems {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}

.mySwiper2 .swiper-slide {
  height: auto;
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s, width 0.3s, height 0.3s;
  margin: auto;
}

.mySwiper2 .swiper-wrapper {
  padding-top: 40px;
  display: flex;
  align-items: center;
}

.mySwiper2 .swiper-slide-active {
  width: 940px !important;
  width: fit-content;
  margin-left: 0;
}

.mySwiper2 .swiper-slide img {
  display: block;
  width: 500px;
  height: 500px;
  object-fit: cover;
  aspect-ratio: square;
}


@media screen and (max-width: 1440px) {

  .mySwiper2 .swiper-slide-active {
    width: 740px !important;
  }

  .mySwiper2 .swiper-slide img {
    width: 400px;
    height: 400px;
  }

  .Popup__itemH2 {
    font-size: 48px;
  }

  .Popup__itemP {
    font-family: 'Mabry Pro Regular';
    font-size: 14px;
    color: #282525B2;
    line-height: 120%;
    position: absolute;
    bottom: 40px;
  }
}


@media screen and (max-width: 870px) {

  .mySwiper2 .swiper-slide-active {
    width: 550px !important;
  }

  .mySwiper2 .swiper-slide img {
    width: 300px;
    height: 300px;
  }

  .Popup__itemH2 {
    font-size: 32px;
  }

  .Popup__itemP {
    font-size: 12px;
    bottom: 20px;
  }

  .Popup__closeBtn {
    height: 50px;
    padding-top: 10px;
    padding-right: 20px;
  }
}


@media screen and (max-width: 680px) {

  .mySwiper2 .swiper-slide-active {
    width: 350px !important;
  }

  .mySwiper2 .swiper-slide img {
    width: 300px;
    height: 200px;
  }

  .Popup__customPagination {
    padding-top: 5px;
  }

  .Popup__itemH2 {
    font-size: 24px;
    padding: 5px 0 0;
  }

  .Popup__itemP {
    position: relative;
    font-size: 10px;
    padding-top: 15px;
    bottom: 0;
    width: 280px;
  }

  .Popup__areaItems {
    flex-wrap: wrap;
  }

  .Popup__items {
    padding: 0;
  }

}
</style>
