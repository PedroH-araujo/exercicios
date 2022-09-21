var agora = new Date()
var hr = agora.getHours
if (hr <= 11) {
   console.log('Bom dia');
}else if (hr <= 17) {
   console.log('Boa tarde');
}else {
   console.log('Boa noite');
}