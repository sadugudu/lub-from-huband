$(document).ready(function() {
  // Play transition on page load after 1 second
  setTimeout(transition, 1000);

  // Click event handler for elements with class .js-trigger-transition
  $('.js-trigger-transition').on('click', function(e) {
    e.preventDefault();
    transition();
  });

  // Transition function
  function transition() {
    var tl = new TimelineMax();

    // Animate body:before pseudo-element
    tl.to(CSSRulePlugin.getRule('body:before'), 0.2, {cssRule: {top: '50%'}, ease: Power2.easeOut}, 'close')
      .to(CSSRulePlugin.getRule('body:before'), 0.2, {cssRule: {top: '0%'}, ease: Power2.easeOut}, '+=1.5');

    // Animate body:after pseudo-element
    tl.to(CSSRulePlugin.getRule('body:after'), 0.2, {cssRule: {bottom: '50%'}, ease: Power2.easeOut}, 'close')
      .to(CSSRulePlugin.getRule('body:after'), 0.2, {cssRule: {bottom: '0%'}, ease: Power2.easeOut}, '-=0.2');

    // Animate loader element
    tl.to($('.loader'), 0.2, {opacity: 1}, '-=0.2')
      .to($('.loader'), 0.2, {opacity: 0});

    // Ensure proper sequencing of animations
    tl.timeScale(1); // Adjust timeline speed if necessary
  }
});
