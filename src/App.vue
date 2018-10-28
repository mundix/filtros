<template>
  <div class="container">
    <div class="jumbotron">
      <span>
        {{mensaje | mayusculas}}
      </span>
      <br>
      <span>
        {{mensaje}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      // Cambiar a mayusculas usando un filtro
      mensaje: 'Aprende Vue Js 2 Facilmente'
    }
  },
  filters: {
    // Debemos reibir el mensaje " mensaje | <= parte izq de la barra  "
    mayusculas(mensaje) {
      return mensaje.toUpperCase();
    }
  }
}
</script>

<style>

</style>
