export const newsSplideOptions = {
  perMove: 1,
  speed: 500,
  rewind: false,
  start: 0,
  // focus: 'center',
  // autoWidth: false,
  // autoHeight: true,
  // fixedHeight: '20rem',
  perPage: 4,
  gap: '1rem',
  // fixedWidth: '42rem',
  lazyLoad: 'nearby',
  pagination: false,
  // arrows: false,
  // drag: false,
  // focus: 'center',
  // keyboard: 'global',
  classes: {
    arrows: 'news__splider-controls',
    arrow: 'news__splider-arrow splider-arrow',
    prev: 'news__splider-arrow--prev splider-arrow--prev',
    next: 'news__splider-arrow--next splider-arrow--next',
    // pagination: 'abonement__splider-pagination splider-pagination',
  },
  breakpoints: {
    1200: {
      // arrows: true,
      // pagination: true,
      // drag: true,
      perPage: 3,
    },
    800: {
      // perPage: 3,
      // padding: '3rem',
      perPage: 2,
    },

    580: {
      // padding: '5rem',
      perPage: 1,
    },
  },
}
