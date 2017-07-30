/*
 * Custom Tooltip Directive
 * -------------------------
 */

import { addClass, removeClass } from './helpers';

let mouseOverHandler = function(event) {
  let span = event.target.parentNode.getElementsByTagName('span')[0];
  addClass(span, 'tooltip-show');
};

let mouseOutHandler = function(event) {
  let span = event.target.parentNode.getElementsByTagName('span')[0];
  removeClass(span, 'tooltip-show');
};

// Vue Plugin
export default {
  install(Vue) {
    Vue.directive('tooltip', {
      bind(el, bindings) {
        console.log(bindings);
        let span = document.createElement('span'); 
        let text = document.createTextNode(`Seats available: ${bindings.value.seats}`);
        
        span.appendChild(text);
        addClass(span, 'tooltip');

        let div = el.getElementsByTagName('DIV')[0];
        
        div.addEventListener('mouseover', mouseOverHandler);
        div.addEventListener('mouseout',  mouseOutHandler);

        // mobile view
        div.addEventListener('touchstart', mouseOverHandler);
        div.addEventListener('touchend',   mouseOutHandler);
        el.appendChild(span);
      },
      // remove event listener when DOM changes.
      unbind(el) {
        div.removeEventListener('mouseover', mouseOverHandler);
        div.removeEventListener('mouseout',  mouseOutHandler);
        // mobile view
        div.removeEventListener('touchstart', mouseOverHandler);
        div.removeEventListener('touchend',   mouseOutHandler);
      }
    });
  }
}