import Vue from 'vue'
import App from './App.vue'

// Filtro Global
// Este es en singular
Vue.filter('suspensivos',function(texto){
  return texto.substring(0,10)+ '...';
})

new Vue({
  el: '#app',
  render: h => h(App)
})
