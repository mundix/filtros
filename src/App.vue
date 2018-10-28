<template>
  <div class="container">
    <div class="jumbotron">
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
  }
}
</script>

<style>

</style>
