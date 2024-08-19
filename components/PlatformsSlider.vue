<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const arr_card = [
  {
    src: '/img/slider/image1.png',
    subtitle: 'Площадка для малышей',
    detail_card: {
      detail_src: [
        '/img/PlatformsForKids/PlatformsForKids1.png',
        '/img/PlatformsForKids/PlatformsForKids2.png',
        '/img/PlatformsForKids/PlatformsForKids3.png'
      ],
      detail_text: [
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam aut quibusdam, laboriosam ipsum quidem accusantium voluptatem mollitia sunt numquam aspernatur odit, cupiditate temporibus voluptatibus harum explicabo consequuntur quasi cum beatae.',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam aut quibusdam, laboriosam ipsum quidem accusantium voluptatem mollitia sunt numquam aspernatur odit, cupiditate temporibus voluptatibus harum explicabo consequuntur quasi cum beatae.',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam aut quibusdam, laboriosam ipsum quidem accusantium voluptatem mollitia sunt numquam aspernatur odit, cupiditate temporibus voluptatibus harum explicabo consequuntur quasi cum beatae.'
      ]
    },
  },

  {
    src: '/img/slider/image2.png',
    subtitle: 'Площадка для детей',
    detail_card: {
      detail_src: [
        '/img/PlatformsForChildren/PlatformsForChildren1.png',
        '/img/PlatformsForChildren/PlatformsForChildren2.png',
      ],
      detail_text: [
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam aut quibusdam, laboriosam ipsum quidem accusantium voluptatem mollitia sunt numquam aspernatur odit, cupiditate temporibus voluptatibus harum explicabo consequuntur quasi cum beatae.',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam aut quibusdam, laboriosam ipsum quidem accusantium voluptatem mollitia sunt numquam aspernatur odit, cupiditate temporibus voluptatibus harum explicabo consequuntur quasi cum beatae.'
      ]
    }
  },

  {
    src: '/img/slider/image3.png',
    subtitle: 'Площадка для школьников',
    detail_card: {
      detail_src: [
        '/img/PlatformsForSchoolchildren/PlatformsForSchoolchildren1.png',
        '/img/PlatformsForSchoolchildren/PlatformsForSchoolchildren2.png',
        '/img/PlatformsForSchoolchildren/PlatformsForSchoolchildren3.png',
      ],
      detail_text: [
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam aut quibusdam, laboriosam ipsum quidem accusantium voluptatem mollitia sunt numquam aspernatur odit, cupiditate temporibus voluptatibus harum explicabo consequuntur quasi cum beatae.',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam aut quibusdam, laboriosam ipsum quidem accusantium voluptatem mollitia sunt numquam aspernatur odit, cupiditate temporibus voluptatibus harum explicabo consequuntur quasi cum beatae.',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam aut quibusdam, laboriosam ipsum quidem accusantium voluptatem mollitia sunt numquam aspernatur odit, cupiditate temporibus voluptatibus harum explicabo consequuntur quasi cum beatae.'
      ]
    }
  },

  {
    src: '/img/slider/image4.png',
    subtitle: 'Площадка для старших',
    detail_card: {
      detail_src: [
        '/img/PlatformsForElders/PlatformsForElders1.png',
        '/img/PlatformsForElders/PlatformsForElders2.png',
      ],
      detail_text: [
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam aut quibusdam, laboriosam ipsum quidem accusantium voluptatem mollitia sunt numquam aspernatur odit, cupiditate temporibus voluptatibus harum explicabo consequuntur quasi cum beatae.',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam aut quibusdam, laboriosam ipsum quidem accusantium voluptatem mollitia sunt numquam aspernatur odit, cupiditate temporibus voluptatibus harum explicabo consequuntur quasi cum beatae.'
      ]
    }
  },

  {
    src: '/img/slider/image5.png',
    subtitle: 'Площадка для юношей',
    detail_card: {
      detail_src: [
        '/img/PlatformsForYoung/PlatformsForYoung1.png',
      ],
      detail_text: [
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam aut quibusdam, laboriosam ipsum quidem accusantium voluptatem mollitia sunt numquam aspernatur odit, cupiditate temporibus voluptatibus harum explicabo consequuntur quasi cum beatae.'
      ]
    }
  },

  {
    src: '/img/slider/image6.png',
    subtitle: 'Площадка для девочек',
    detail_card: {
      detail_src: [
        '/img/PlatformsForGirls/PlatformsForGirls1.png',
        '/img/PlatformsForGirls/PlatformsForGirls2.png',
        '/img/PlatformsForGirls/PlatformsForGirls3.png'
      ],
      detail_text: [
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam aut quibusdam, laboriosam ipsum quidem accusantium voluptatem mollitia sunt numquam aspernatur odit, cupiditate temporibus voluptatibus harum explicabo consequuntur quasi cum beatae.',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam aut quibusdam, laboriosam ipsum quidem accusantium voluptatem mollitia sunt numquam aspernatur odit, cupiditate temporibus voluptatibus harum explicabo consequuntur quasi cum beatae.',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam aut quibusdam, laboriosam ipsum quidem accusantium voluptatem mollitia sunt numquam aspernatur odit, cupiditate temporibus voluptatibus harum explicabo consequuntur quasi cum beatae.'
      ]
    }
  },

  {
    src: '/img/slider/image7.png',
    subtitle: 'Площадка для взрослых',
    detail_card: {
      detail_src: [
        '/img/PlatformsForAdults/PlatformsForAdults1.png'
      ],
      detail_text: [
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam aut quibusdam, laboriosam ipsum quidem accusantium voluptatem mollitia sunt numquam aspernatur odit, cupiditate temporibus voluptatibus harum explicabo consequuntur quasi cum beatae.'
      ]
    }
  },

  {
    src: '/img/slider/image8.png',
    subtitle: 'Площадка для бабушек',
    detail_card: {
      detail_src: [
        '/img/PlatformsForGrannies/PlatformsForGrannies1.png',
        '/img/PlatformsForGrannies/PlatformsForGrannies2.png'
      ],
      detail_text: [
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam aut quibusdam, laboriosam ipsum quidem accusantium voluptatem mollitia sunt numquam aspernatur odit, cupiditate temporibus voluptatibus harum explicabo consequuntur quasi cum beatae.',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam aut quibusdam, laboriosam ipsum quidem accusantium voluptatem mollitia sunt numquam aspernatur odit, cupiditate temporibus voluptatibus harum explicabo consequuntur quasi cum beatae.'
      ]
    }
  },

  {
    src: '/img/slider/image9.png',
    subtitle: 'Площадка для дедушек',
    detail_card: {
      detail_src: [
        '/img/PlatformsForGrandfathers/PlatformsForGrandfathers1.png',
        '/img/PlatformsForGrandfathers/PlatformsForGrandfathers2.png',
        '/img/PlatformsForGrandfathers/PlatformsForGrandfathers3.png'

      ],
      detail_text: [
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam aut quibusdam, laboriosam ipsum quidem accusantium voluptatem mollitia sunt numquam aspernatur odit, cupiditate temporibus voluptatibus harum explicabo consequuntur quasi cum beatae.',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam aut quibusdam, laboriosam ipsum quidem accusantium voluptatem mollitia sunt numquam aspernatur odit, cupiditate temporibus voluptatibus harum explicabo consequuntur quasi cum beatae.',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam aut quibusdam, laboriosam ipsum quidem accusantium voluptatem mollitia sunt numquam aspernatur odit, cupiditate temporibus voluptatibus harum explicabo consequuntur quasi cum beatae.'
      ]
    }
  },
];

</script>

<template>
  <swiper
    :slidesPerView="7" 
    :spaceBetween="30" 
    :modules="[Navigation, Pagination]" 
    :centerInsufficientSlides="true"
    :centeredSlides="true" 
    :loop="true" 
    :navigation="true" 
    :pagination="{
        el: '.custom-pagination',
        type: 'fraction',
        
    }" 
    class="mySwiper1"
  >
    <swiper-slide v-for="(card_item, index) in arr_card" :key="index">
      <PlatformsItem :card="card_item" />
    </swiper-slide>
    <div class="custom-pagination"></div>
  </swiper>
</template>

<style lang="scss">
.mySwiper1 {
  width: 100%;
  height: 670px;
  position: relative;
}

.mySwiper1 .swiper-slide {
  position: relative;
  width: 145px;
  height: 145px;
  text-align: center;
  font-size: 18px;
  background: #959595;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s, width 0.3s, height 0.3s;
  margin: auto;
}

.mySwiper1 .swiper-wrapper {
  position: relative;
  display: flex;
  place-content: center;
  align-items: center;
  left: 15%;
}

.mySwiper1 .swiper-slide-active {
  width: 670px !important;
  height: 550px !important;
  margin: auto;
}

.mySwiper1 .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mySwiper1 .custom-pagination {
  position: absolute;
  font-family: 'Mabry Pro Regular';
  font-size: 16px;
  top: 60px;
  left: 0;
  z-index: -999;
}

.mySwiper1 .swiper-button-next,
.mySwiper1 .swiper-button-prev {
  position: absolute;
  top: 85px;
  right: 0;
  z-index: 100;
  background-repeat: no-repeat;
  border: 1px solid black;
  padding: 20px;
  justify-content: center;
  border-radius: 8px;
  background-position-x: center;
  background-position-y: center;
  gap: 12px;

  img {
    top: 50%;
  }
}

.mySwiper1 .swiper-button-prev {
  left: 92%;
  background-image: url('/public/img/next_arrow.svg');
  transform: rotate(180deg);
  display: flex;
  align-items: center;
}

.mySwiper1 .swiper-button-next {
  right: 10px;
  background-image: url('/public/img/next_arrow.svg');
}

.mySwiper1 .swiper-button-next::after,
.mySwiper1 .swiper-button-prev::after {
  display: none;
}
</style>
