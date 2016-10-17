export default function () {
  const duration = 300;
  const animation = {
    duration: duration,
    easing: 'easeInOutCubic'
  };

  this.transition(
    this.hasClass('swiper-container'),
    this.toValue(function(toValue, fromValue) {
      return toValue.index > fromValue.index;
    }),
    this.use('toLeft', animation)
  );

  this.transition(
    this.hasClass('swiper-container'),
    this.toValue(function(toValue, fromValue) {
      return toValue.index < fromValue.index;
    }),
    this.use('toRight', animation)
  );

}
