<script setup lang="ts">
defineOptions({
  title: 'Политика конфиденциальности',
});
</script>

<template>
  <section-base name="private" :title="$options.title">
    <div class="private__content">
      <div class="private__info-block">
        Пользователь, оставляя заявку на интернет-сайте
        <a
          class="marked link private__link"
          href="https://moscowboxing.ru"
          target="_blank"
          >https://moscowboxing.ru</a
        >
        , принимает настоящее Согласие на обработку персональных данных (далее –
        Согласие). Действуя свободно, своей волей и в своем интересе, а также
        подтверждая свою дееспособность, Пользователь дает свое согласие ИП
        Шишлов Родион Витальевич (ОГРНИП 315774600141921), которое расположено
        по адресу 117142, г. Москва, Плавский проезд, д. 8, к. 1, кв. 96, на
        обработку своих персональных данных со следующими условиями:
      </div>
      <ul class="privare__info-list">
        <li class="private__info-item">
          Данное Согласие дается на обработку персональных данных, как без
          использования средств автоматизации, так и с их использованием.
        </li>
        <li class="private__info-item">
          Согласие дается на обработку следующих моих персональных данных:
          Персональные данные, не являющиеся специальными или биометрическими:
          номера контактных телефонов; адреса электронной̆ почты;
          пользовательские данные (сведения о местоположении; тип и версия ОС;
          тип и версия Браузера; тип устройства и разрешение его экрана;
          источник откуда пришел на сайт пользователь; с какого сайта или по
          какой рекламе; язык ОС и Браузера; какие страницы открывает и на какие
          кнопки нажимает пользователь; ip-адрес.)
        </li>
        <li class="private__info-item">
          Персональные данные не являются общедоступными.
        </li>
        <li class="private__info-item">
          Цель обработки персональных данных: обработка входящих запросов
          физических лиц с целью оказания консультирования; аналитики действий
          физического лица на веб-сайте и функционирования веб-сайта; проведение
          рекламных и новостных рассылок.
        </li>
        <li class="private__info-item">
          Основанием для обработки персональных данных является: ст. 24
          Конституции Российской Федерации; ст.6 Федерального закона №152-ФЗ«О
          персональных данных»; Свидетельство госрегистрации ИП Шишлов Р.В. ;
          настоящее согласие на обработку персональных данных.
        </li>
        <li class="private__info-item">
          В ходе обработки с персональными данными будут совершены следующие
          действия: сбор; запись; систематизация; накопление; хранение;
          уточнение (обновление, изменение); извлечение; использование; передача
          (распространение, предоставление, доступ); блокирование; удаление;
          уничтожение.
        </li>
        <li class="private__info-item">
          Персональные данные обрабатываются до отписки физического лица от
          рекламных и новостных рассылок. Также обработка персональных данных
          может быть прекращена по запросу субъекта персональных данных.
          Хранение персональных данных, зафиксированных на бумажных носителях
          осуществляется согласно Федеральному закону №125-ФЗ «Об архивном деле
          в Российской Федерации» и иным нормативно правовым актам в области
          архивного дела и архивного хранения.
        </li>
        <li class="private__info-item">
          Согласие может быть отозвано субъектом персональных данных или его
          представителем путем направления письменного заявления ИП Шишлов Р.В.
          или его представителю по адресу, указанному в начале данного Согласия.
        </li>
        <li class="private__info-item">
          В случае отзыва субъектом персональных данных или его представителем
          согласия на обработку персональных данных ИП Шишлов Р.В. вправе
          продолжить обработку персональных данных без согласия субъекта
          персональных данных при наличии оснований, указанных в пунктах 2 – 11
          части 1 статьи 6, части 2 статьи 10 и части 2 статьи 11 Федерального
          закона №152-ФЗ«О персональных данных» от 27.07.2006 г.
        </li>
        <li class="private__info-item">
          Настоящее согласие действует все время до момента прекращения
          обработки персональных данных, указанных в п.7 и п.8 данного Согласия.
        </li>
      </ul>
      <my-button mode="link" to="/">Вернуться на главную</my-button>
    </div>
  </section-base>
</template>

<style lang="scss" scoped>
.private__content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.private__link {
  display: inline;
}
.private__info-block {
  text-wrap: pretty;
  align-self: center;
  max-width: 50rem;
}
.privare__info-list {
  counter-reset: list;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.private__info-item {
  text-wrap: pretty;
  display: flex;
  justify-content: start;
  gap: 0.5rem;
  &::before {
    min-width: 1.5rem;
    content: counter(list) '.';
    counter-increment: list;
  }
}
</style>
