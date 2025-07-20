export const commentSplideOptions = {
  perMove: 1,
  speed: 1000,
  // autoWidth: true,
  // autoHeight: true,
  perPage: 1,
  // fixedWidth: '42rem',
  focus: 'center',
  gap: '15rem',
  // padding: '20%',
  lazyLoad: 'nearby',
  pagination: true,
  trimSpace: false,
  // keyboard: 'global',
  classes: {
    arrows: 'comments__splider-controls',
    arrow: 'comments__splider-arrow splider-arrow',
    prev: 'comments__splider-arrow--prev splider-arrow--prev',
    next: 'comments__splider-arrow--next splider-arrow--next',
    pagination: 'comments__splider-pagination splider-pagination',
  },
  breakpoints: {
    1000: {
      // padding: '10%',
    },
    768: {
      // padding: '5%',
    },
  },
}
