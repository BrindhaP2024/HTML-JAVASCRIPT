const date = new Date();
// us locale 
const dateFormatter1 = new Intl.DateTimeFormat('en-US');
console.log(dateFormatter1.format(date)); 
//uk locale
const dateFormatter2 = new Intl.DateTimeFormat('en-GB', {
  weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
});
console.log(dateFormatter2.format(date)); 

//japan locale
const dateFormatter3 = new Intl.DateTimeFormat('ja-JP', {
  year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false
});
console.log(dateFormatter3.format(date));
