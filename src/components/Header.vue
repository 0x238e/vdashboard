<template>
  <section class="hero is-bold is-primary">
    <div class="hero-body">
      <div class="container">
        <img src="/logo2.png" alt="" id="logo1">
        <h1 class="title">
          VChain - Dashboard
        </h1>
        <h2 class="subtitle">
          {{ title }}
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String,
  }
}
</script>

<style scoped>
#logo1 {
  width: 70px;
}
</style>
