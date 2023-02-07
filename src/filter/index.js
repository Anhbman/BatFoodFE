import Vue from 'vue'

const fromatCurrency = Vue.filter('toCurrency', (value) => {
  if (typeof value !== "number") {
    return value;
  }
  var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'VND'
  });
  return formatter.format(value);
})

export default { fromatCurrency }