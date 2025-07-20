declare module '@splidejs/vue-splide' {
  import { Plugin } from 'vue';
  const VueSplide: Plugin;

  import { DefineComponent } from 'vue'
  export const Splide: DefineComponent<any, any, any>
  export const SplideSlide: DefineComponent<any, any, any>
  
  export default VueSplide;
}