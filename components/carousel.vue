<template>
  <div class="hero carousel">
    <section class="hero is-primary is-medium">
      <div class="hero-body"
        v-bind:style="{ backgroundImage: `url(${product.img.src})` }"
        v-for="product in products"
      >
        <div class="product-info">
          <div class="container">
            <h1 class="name">
              {{ product.name }}
            </h1>
            <div class="description">
              {{ product.description }}
            </div>
            <div class="price">
              Comprar ya por sólo ${{ product.price }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.hero-body {
  background-size: cover;
  min-height: 45vh;
  display: flex;
  align-items: flex-end;
  padding: 0;
}

.product-info {
  background: rgba($color-bg-dark, 0.7);
  padding-bottom: 20px;
  padding-top: 10px;
  width: 100%;

  .name,
  .description,
  .price {
    color: $color-bg-light;
  }

  .price {
    color: $color-emphasis;
  }

  .name {
    margin-top: 0;
  }
}
</style>

<script>
export default {
  data () {
    return {
      products: [
        {
          name: 'Bubble Tea Original',
          description: 'Delicioso te taiwanés con burbujas de tapioca, deli!',
          price: '8.500',
          img: {
            src: 'https://res.cloudinary.com/startics/image/upload/v1505343879/tearepublic-1_tt23ro.jpg',
            alt: 'Bubble Tea'
          }
        },
        {
          name: 'Sandwich Gourmet',
          description: 'Delicioso sandich vegetariano para chuparse los dedos',
          price: '12.500',
          img: {
            src: 'https://res.cloudinary.com/startics/image/upload/v1505343880/sandwich-gourmet_zxbpxk.jpg',
            alt: 'Sandwich Gourmet'
          }
        },
        {
          name: 'Ensalada Fresca',
          description: 'Con 6 tipos de lechugas y Portobello',
          price: '14.700',
          img: {
            src: 'https://res.cloudinary.com/startics/image/upload/v1505343881/ensalada_bgnwiw.jpg',
            alt: 'Ensalada de Portobello'
          }
        }
      ],
      content: {
        head: {
          main: 'La cultura no se improvisa, ni se cambia de la noche a la mañana',
          sub: 'Pero tampoco tiene que tomar una vida'
        }
      },
      backgroundImage: ''
    }
  }
}
</script>
