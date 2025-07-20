export const coachSplideOptions = {
  // type: 'fade',
  updateOnMove: true,
  perMove: 1,
  perPage: 4,
  speed: 500,
  rewind: false,
  // autoWidth: false,
  // autoHeight: true,
  // padding: '4rem',
  gap: '1rem',
  // fixedWidth: '42rem',
  lazyLoad: 'nearby',
  pagination: false,
  // focus: 'center',
  // keyboard: 'global',
  classes: {
    arrows: 'coach__splider-controls',
    arrow: 'coach__splider-arrow splider-arrow',
    prev: 'coach__splider-arrow--prev splider-arrow--prev',
    next: 'coach__splider-arrow--next splider-arrow--next',
  },
  breakpoints: {
    1200: {
      // focus: 'center',
      perPage: 3,
    },
    900: {
      // fixedWidth: '15rem',
      perPage: 2,
      // padding: '3rem',
    },
    600: {
      perPage: 1,
      // width: '80vw',
    }
  },
}
