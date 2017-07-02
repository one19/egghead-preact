import tc from 'tinycolor2';

const tensor = [-1, 1][Math.round(Math.random())];
const color1 = tc('palegoldenrod').spin(Math.random() * 360);
const color2 = color1.clone().spin(37 * tensor);
const compliment1 = color1.clone().spin(180);
const compliment2 = color2.clone().spin(180);

module.exports = {
  black: '#252b33',
  color1: color1.toString(),
  color2: color2.toString(),
  lighter1: color1.clone().lighten(10).toString(),
  lighter2: color2.clone().lighten(10).toString(),
  compliment1: compliment1.toString(),
  compliment2: compliment2.toString(),
  complimentLighter1: compliment1.clone().lighten(10).toString(),
  complimentLighter2: compliment2.clone().lighten(10).toString()
};
