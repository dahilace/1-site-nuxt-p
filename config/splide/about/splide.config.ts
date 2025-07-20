export const aboutSplideOptions = {
  type: 'loop',
  perMove: 1,
  perPage: 3,
  gap: '1rem',
  lazyLoad: 'nearby',
  pagination: true,
  keyboard: 'global',
  classes: {
    arrows: 'about__splider-controls',
    arrow: 'about__splider-arrow splider-arrow',
    prev: 'about__splider-arrow--prev splider-arrow--prev',
    next: 'about__splider-arrow--next splider-arrow--next',
    pagination: 'about__splider-pagination splider-pagination',
  },
  breakpoints: {
    1025: {
      perPage: 2,
    },
    500: {
      perPage: 1,
    },
  },
}
