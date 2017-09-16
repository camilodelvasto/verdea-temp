<template>
  <section class="hero"
    v-bind:style="{ backgroundImage: 'url(https://res.cloudinary.com/startics/image/upload/v1505492455/imageedit_6_6230174407_hop5zy.jpg)'}"
  >
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Una verdea para ti, una para mí.
        </h1>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  background-size: cover;
  flex: 1;
  width: 100%;

  .hero-body {
    display: flex;
    align-items: flex-end;
  }

  .container {
    flex: 1;
  }

  .title {
    font-family: $font-logo;
    color: $color-bg-light;
    text-align: right;
    background: rgba(black, 0.2);
  }
}
</style>

<script>
</script>
