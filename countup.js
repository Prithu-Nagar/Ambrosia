import { CountUp } from './js/countUp.min.js';

window.onload = function() {
  var countUp = new CountUp('target', 3000);
  countUp.start();
}

()=>{
    var countUp = new CountUp('target', 3000);
    countUp.start();
    console.log()
}.();
