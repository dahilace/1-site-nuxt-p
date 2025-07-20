<script setup lang="ts">
import { ref, shallowRef, computed } from 'vue';

import type { LngLat, YMap, YMapLocationRequest } from '@yandex/ymaps3-types';
import type { VectorCustomization } from '@yandex/ymaps3-types';

import {
  YandexMap,
  YandexMapDefaultSchemeLayer,
  YandexMapDefaultFeaturesLayer,
  YandexMapMarker,
  YandexMapHint,
  YandexMapZoomControl,
  YandexMapControls,
  YandexMapGeolocationControl,
} from 'vue-yandex-maps';

// import { gymInfoArray } from '@pages/gyms/dev/data';
import type { GymInfo } from '~/assets/types/types';

import { gymInfoArray } from './yandexMap.data';

const theme = useThemeStore();

const map = shallowRef<null | YMap>(null);

const LOCATION = {
  center: [37.645644, 55.711234],
  zoom: 10,
};
const currentLocation = ref<YMapLocationRequest>(LOCATION);
const currentGym = ref<GymInfo>({} as GymInfo);

// Проверка для скрытия карточки
const isCardCollapsed = ref(true);

const darkThemeCustomization: VectorCustomization = [
  {
    tags: {
      any: ['water'],
    },
    elements: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
    ],
  },
  {
    tags: {
      any: ['landscape', 'admin', 'land', 'transit'],
    },
    elements: 'geometry',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    tags: {
      any: ['road'],
    },
    elements: 'geometry',
    stylers: [
      {
        color: '#4E4E4E',
      },
    ],
  },
  {
    tags: {
      any: ['building'],
    },
    elements: 'geometry',
    stylers: [
      {
        color: '#757474',
      },
    ],
  },
];

const lightThemeCustomization: VectorCustomization = [
  {
    tags: {
      any: ['water'],
    },
    elements: 'geometry',
    stylers: [{ color: '#ffffff' }],
  },
  {
    tags: {
      any: ['landscape', 'admin', 'land', 'transit'],
    },
    elements: 'geometry',
    stylers: [{ color: '#f0f0f0' }],
  },
  {
    tags: {
      any: ['road'],
    },
    elements: 'geometry',
    stylers: [{ color: '#cccccc' }],
  },
  {
    tags: {
      any: ['building'],
    },
    elements: 'geometry',
    stylers: [{ color: '#999999' }],
  },
];
// Кастомная тема карты
const customization = computed(() =>
  theme.theme === 'light' ? lightThemeCustomization : darkThemeCustomization
);
</script>

<template>
  <section class="map section-padding">
    <yandex-map
      v-model="map"
      :settings="
        theme.theme === 'light'
          ? {
              location: { ...currentLocation, duration: 1000 },
              theme: 'light',
              behaviors: [
                'dblClick',
                'magnifier',
                'oneFingerZoom',
                'drag',
                'pinchZoom',
              ],
            }
          : {
              location: { ...currentLocation, duration: 1000 },
              theme: 'dark',
              behaviors: [
                'dblClick',
                'magnifier',
                'oneFingerZoom',
                'drag',
                'pinchZoom',
              ],
            }
      "
      width="100%"
      height="500px"
    >
      <yandex-map-default-scheme-layer :settings="{ customization }" />
      <yandex-map-default-features-layer />
      <yandex-map-controls :settings="{ position: 'right' }">
        <yandex-map-zoom-control />
        <yandex-map-geolocation-control />
      </yandex-map-controls>
      <yandex-map-marker
        @click="
          JSON.stringify(currentLocation) === JSON.stringify(LOCATION)
            ? ((currentGym = marker),
              (currentLocation = {
                center: marker.coordinates as LngLat,
                zoom: 15,
              }),
              (isCardCollapsed = false))
            : ((currentLocation = LOCATION),
              (isCardCollapsed = true),
              (currentGym = {} as GymInfo))
        "
        v-for="(marker, index) of gymInfoArray"
        :key="index"
        position="top-center left-center"
        :settings="{
          coordinates: marker.coordinates as LngLat,
          properties: {
            hint: marker.address,
          },
        }"
      >
        <img class="pin" :src="marker.imgUrl" alt="" />
        <p class="marker-window">{{ marker.name }}</p>
        <template v-html="marker.address" />
      </yandex-map-marker>
      <yandex-map-hint hint-property="hint">
        <template #default="{ content }">
          <div class="hint-window" v-html="content" />
        </template>
      </yandex-map-hint>
    </yandex-map>
    <div class="card-wrapper" :class="isCardCollapsed ? 'collapsed' : ''">
      <card-gym
        class="map__card"
        :data="currentGym"
        v-if="Object.keys(currentGym).length"
      >
        <div class="map__controls">
          <button
            @click="
              (currentLocation = LOCATION),
                (currentGym = {} as GymInfo),
                (isCardCollapsed = true)
            "
            class="close-btn controls-btn link"
          >
            Закрыть
          </button>
        </div>
      </card-gym>
    </div>
  </section>
</template>

<style lang="scss" scoped>
:deep(.card__img) {
  max-width: 10rem;
}
:deep(.card__title) {
  align-self: start;
  white-space: wrap;
  max-width: 15rem;
}
.map {
  display: flex;
  position: relative;
  padding-block: 0;
  filter: grayscale(15%);
}
.card-wrapper {
  min-width: 15rem;
  position: absolute;
  height: 100%;
  background-color: var(--alt-bg);
  transform: translateX(0);
  transition: transform 0.25s linear;
  top: 0;
  left: 0;
}
.map__card {
  padding: 2rem;
  width: unset;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: 1111;
}
.map__controls {
  top: 15px;
  right: 15px;
  position: absolute;
  display: flex;
  gap: 1rem;
  .controls-btn {
    font-size: 0.6rem;
    padding: 2px 8px;
    border: 1px solid var(--main-color);
    border-radius: 4px;
  }
}

.pin {
  cursor: pointer;
  max-width: unset;
  width: 1.8rem;
  height: 1.8rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  box-shadow: 0 0 4px var(--accent-color);
  object-fit: cover;
  filter: sepia(0.5);
}
.marker-window {
  text-transform: uppercase;
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  left: 70%;
  padding: 0.5rem 0.2rem 0.5rem 0.7rem;
  font-size: 0.5rem;
  background-color: var(--main-color);
  color: var(--alt-bg);
  box-shadow: 3px 0px var(--accent-color);
  height: 35px;
  display: flex;
  align-items: center;
  z-index: -1;
  border-radius: 4px;
  cursor: pointer;
  // opacity: 0.7;
  // white-space: nowrap;
}
.hint-window {
  position: absolute;
  transform: translate(7px, -100%);
  padding: 4px;
  background-color: beige;
  border: 1px solid var(--alt-bg);
  opacity: 0.9;
  width: 15rem;
}
.collapsed {
  transform: translateX(-100%);
}
</style>
