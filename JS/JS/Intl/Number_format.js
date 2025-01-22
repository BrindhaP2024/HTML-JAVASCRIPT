const number = 1234567.89;

const numberFormat1 = new Intl.NumberFormat('en-US');
console.log(numberFormat1.format(number)); 

const numberFormat2 = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
console.log(numberFormat2.format(number));

const numberFormat3 = new Intl.NumberFormat('en-US', {
  style: 'percent',
});
console.log(numberFormat3.format(0.123)); 
