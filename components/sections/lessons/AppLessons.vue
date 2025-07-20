<script setup lang="ts">
import { lessons } from './lessonsData';
const changeLesson = useLessonsStore();
const currentLesson = ref<number>(0);

// defineOptions({
//   title: 'Уроки бокса',
// });
</script>

<template>
  <section-base name="lessons" title="Уроки бокса">
    <div class="lessons__content">
      <div class="lessons__list">
        <button
          @click.prevent="
            [changeLesson.toggle(i), (currentLesson = changeLesson.openIndex)]
          "
          class="lessons__item marked link"
          v-for="(lesson, i) in lessons"
          :key="i"
          :class="changeLesson.openIndex === i ? 'active' : ''"
        >
          {{ lesson.lesson }}
        </button>
      </div>
      <article v-if="changeLesson.openIndex !== null" class="lessons__info">
        <h3>{{ lessons[currentLesson].lesson }}</h3>
        <div
          class="lessons__info"
          v-for="(item, i) in lessons[changeLesson.openIndex].content"
          :key="i"
        >
          <p v-if="item.title">
            <icon-decor />
            {{ item.title }}
          </p>
          <p v-for="(info, i) in item.desc" :key="i">{{ info }}</p>
          <my-youtube-video v-if="item.video" :src="item.video" />
        </div>
      </article>
    </div>
  </section-base>
</template>

<style lang="scss" scoped>
.lessons__content {
  display: flex;
  gap: 2rem;
  counter-set: list;
}
.lessons__item {
  display: block;
  user-select: none;
  &::before {
    content: 'Урок ' counter(list) ':';
    counter-increment: list;
    margin-right: 0.5rem;
  }
}
.active {
  color: var(--link-hover);
}
</style>
