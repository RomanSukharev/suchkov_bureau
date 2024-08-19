<script setup lang="ts">
import { ref, computed } from 'vue';
import { useSwiperSlide } from 'swiper/vue';
import { useState } from '#app';

interface PopupInfo {
  detail_src: string[];
  detail_text: string[];
}

interface Card {
  src: string | undefined;
  detail_card: PopupInfo;
  subtitle: string;
}

const storagePopup = useState<PopupInfo | null>('storagePopup', () => null);
const isPopupOpen = ref<boolean>(false);
const swiperSlide = useSwiperSlide();

const props = defineProps<{
  card: Card;
}>();

const fillingPopup = (infoPopup: PopupInfo): void => {
  storagePopup.value = infoPopup;
  isPopupOpen.value = true;
};

const isActive = computed<boolean>(() => {
  return swiperSlide.value.isActive;
});

function closePopup(): void {
  isPopupOpen.value = false;
}
</script>


<template>
  <div class="relative w-full h-full overflow-hidden">
    <img :src="card.src" class="absolute top-0 left-0 w-full h-full object-cover" />
  </div>

  <div v-if="isActive" class="flex items-center justify-center">
    <div class="absolute left-0 bottom-[-50px] text-2xl z-[999] text-[#282525] font-['Mabry_Pro_Regular']">
      {{ card.subtitle }}
    </div>
    <button
      class="PlatformsItem__btn"
      @click="fillingPopup(card.detail_card)"
    >
      Подробнее о площадке
      <span class="absolute bottom-0 left-0 w-full h-[1px] bg-[#282525]"></span>
    </button>
  </div>

  <Popup v-if="isPopupOpen && storagePopup" :subtitle="card.subtitle" :detail_card="storagePopup" @close="closePopup" />
</template>



<style lang="scss">

.PlatformsItem__btn {
  font-family: "Mabry Pro Regular";
  position: absolute;
  right: 0;
  bottom: -40px;
  font-size: 16px;
  z-index: 999;
  color: #282525;
  border: none;

  &:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 1px;
    background-color: #282525;
    bottom: 0;
    left: 0;
  }
}

@media screen and (max-width: 1170px) {
  
}
</style>
