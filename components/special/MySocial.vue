<script setup lang="ts">
import type { PersonSocials } from '~/assets/types/types';

type Template = {
  url: string;
  iconName: string;
};

const SOCIALS_TEMPLATE: Record<string, Template> = {
  vk: { url: 'https://vk.com/', iconName: 'vk' },
  ytb: { url: 'https://youtube.com/', iconName: 'ytb' },
  inst: { url: 'https://instagram.com/', iconName: 'inst' },
  whatsapp: { url: 'https://whatsapp.com/', iconName: 'whatsapp' },
  tg: { url: 'https://telegram.org/', iconName: 'tg' },
};

const props = withDefaults(
  defineProps<{
    mode: 'global' | 'personal';
    personSocials?: Partial<PersonSocials>;
  }>(),
  { mode: 'global' }
);
</script>

<template>
  <div class="socials" v-if="props.mode === 'global'">
    <p v-if="$slots.default" class="socials__title">
      <slot />
    </p>
    <ul class="socials__list">
      <li v-for="(item, i) in SOCIALS_TEMPLATE" :key="i">
        <a
          :href="item.url"
          target="_blank"
          rel="noopener noreferrer"
          class="socials__link"
        >
          <svg-icon class="icons-socials" :name="item.iconName" />
        </a>
      </li>
    </ul>
  </div>

  <div class="socials" v-else>
    <ul class="socials__list">
      <li v-for="(val, key) in personSocials" :key="key">
        <a
          class="socials__link link flex"
          :href="SOCIALS_TEMPLATE[key].url + val"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg-icon
            class="icons-socials"
            :name="SOCIALS_TEMPLATE[key].iconName"
          />
          <!-- <span class="marked">{{ val }}</span> -->
        </a>
      </li>
      <!-- <li v-if="personSocials?.vk">
        <a class="link" href="https://vk.com" target="_blank" rel="noopener noreferrer">
          <icon-vk /> <span class="marked">{{ personSocials?.vk }}</span>
        </a>
      </li>
      <li v-if="personSocials?.fb">
        <a class="link" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <icon-fb /> <span class="marked">{{ personSocials?.fb }}</span>
        </a>
      </li>
      <li v-if="personSocials?.ytb">
        <a class="link" href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <icon-ytb /> <span class="marked">{{ personSocials?.ytb }}</span>
        </a>
      </li>
      <li v-if="personSocials?.inst">
        <a class="link" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <icon-inst /> <span class="marked">{{ personSocials?.inst }}</span>
        </a>
      </li> -->
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.socials__list {
  display: flex;
  justify-self: start;
  gap: 0.25rem;
}
.socials__title {
  font-size: 1rem;
  line-height: 32px;
  margin-bottom: 0.7rem;
}
.socials__link {
  display: inline-flex;
  width: 100%;
  height: 100%;
  padding: 0.25rem;
}
</style>
