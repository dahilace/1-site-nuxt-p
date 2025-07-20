<script setup lang="ts"></script>

<template>
  <section-base name="form-section">
    <div class="form-section__block">
      <p class="form-section__question">Не знаете какой абонемент выбрать?</p>
      <p>Заполните форму и мы в ближайшее время мы свяжемся с Вами.</p>
    </div>
    <div class="form-section__block">
      <form class="form-section__form">
        <my-input
          mode="input"
          name="name"
          type="text"
          placeholder="Введите имя"
          required
        ></my-input>
        <my-input
          mode="input"
          name="phone"
          type="tel"
          placeholder="Введите номер телефона"
          required
        ></my-input>
        <my-button mode="btn" type="submit">Записаться</my-button>
      </form>
      <p class="form-section__terms">
        Заполняя форму вы соглашаетесь с
        <router-link class="underline inline" to="/private-policy"
          >условиями обработки персональных данных</router-link
        >
      </p>
    </div>
  </section-base>
</template>

<style lang="scss" scoped>
:deep(.form-section__inner) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  // flex-wrap: wrap;
  // align-items: center;
  // justify-content: space-between;
  gap: 1rem;
  @media (min-width: 1300px) {
    justify-content: space-between;
  }
}
.form-section {
  display: flex;
  color: var(--btn-color);
  background-color: var(--accent-color);
}
.form-section__block {
  text-wrap: balance;
  width: max-content;
}
.form-section__form {
  // margin-block: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  // align-items: start;
  // justify-content: start;
  // justify-content: center;
  gap: 0.5rem;
  background-color: var(--main-bg);
  flex-direction: column;
  @media (min-width: 600px) {
    flex-direction: row;
  }
}
.form-section__question {
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
}
.form-section__terms {
  text-align: center;
}
</style>
