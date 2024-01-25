'use strict';

const x = 9;
function ft1(val) {
  val = val + 1;
  return val;
}

ft1(x);

console.log(x);

const y = { x: 9 };
function ft2(val) {
  val.x = val.x + 1;
  return val;
}

ft2(y);

console.log(y);