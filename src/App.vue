<template>
  <div class="container">
    <div class="jumbotron">
      <span>
        {{mensaje | suspensivos | mayusculas}}
      </span>
      <br>
      <span>
        {{temperatura}} - {{temperatura | aFarenheit}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      // Cambiar a mayusculas usando un filtro
      mensaje: 'Aprende Vue Js 2 Facilmente',
      temperatura: 30
    }
  },
  filters: {
    // Debemos reibir el mensaje " mensaje | <= parte izq de la barra  "
    mayusculas(mensaje) {
      return mensaje.toUpperCase();
    },
    aFarenheit(temperatura) {
      return ((9/5) * temperatura ) + 32 + " F";
    }
  }
}
</script>

<style>

</style>
