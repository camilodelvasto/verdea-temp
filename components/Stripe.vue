<template>
  <div class="wrapper columns">
    <div class="flexitem canvas-left column columns is-one-quarter-tablet is-offset-1">
        <div class="fixed">
          <div class="card special">
            <div class="card-image">
              <figure class="image">
                <img src="https://res.cloudinary.com/startics/image/upload/v1505489852/tumblr_omc7tojjgr1trz70do1_500_1_gpddpl.jpg" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                verdea: planta enriquecida con matera natural de coco, siguiendo el antiqüísimo arte japonés.
              </div>
            </div>
          </div> <!-- card -->
        </div>
    </div>
    <div class="flexitem canvas-feed column columns is-tablet is-3 is-offset-0 is-6-desktop is-multiline">
        <div class="card column is-half-desktop">
          <div class="card-image">
            <figure class="image">
              <img src="https://res.cloudinary.com/startics/image/upload/v1505499681/tumblr_ophiutHiLR1trz70do1_500_1_o8gw90.jpg" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">Verdea rosada</p>
                <p class="subtitle is-6"><a class="button is-success">$48.000 - Comprar</a></p>
              </div>
            </div>
          </div>
        </div> <!-- card -->
        <div class="card column is-half-desktop">
          <div class="card-image">
            <figure class="image">
              <img src="https://res.cloudinary.com/startics/image/upload/v1505501333/tumblr_oi8me8zdNR1trz70do1_500_v7kvpr.jpg" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">Verdea de anturio blanco</p>
                <p class="subtitle is-6"><a class="button" disabled>$48.000 - Agotada</a></p>
              </div>
            </div>
          </div>
        </div> <!-- card -->
        <div class="card column is-half-desktop">
          <div class="card-image">
            <figure class="image">
              <img src="https://res.cloudinary.com/startics/image/upload/v1505501329/tumblr_oi2z5uh7Gi1trz70do1_500_swaqp9.jpg" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">Verdea rosada</p>
                <p class="subtitle is-6"><a class="button" disabled>$48.000 - Agotada</a></p>
              </div>
            </div>
          </div>
        </div> <!-- card -->
        <div class="card column is-half-desktop">
          <div class="card-image">
            <figure class="image">
              <img src="https://res.cloudinary.com/startics/image/upload/v1505492455/imageedit_6_6230174407_hop5zy.jpg" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">Verdea rosada</p>
                <p class="subtitle is-6"><a class="button is-success">$68.000 - Comprar</a></p>
              </div>
            </div>
          </div>
        </div> <!-- card -->
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  background-size: cover;

  @include breakpoint($md) {
    margin-top: 30px;
  }  
}
.column {
  padding: 0;
}

.card {
  border: 12px solid white;
  margin-bottom: 18px;
  position: relative;

  .subtitle {
    font-size: 20px;
    margin-top: 3px;
  }

  @include breakpoint($md) {
    margin-bottom: 30px;
    &:not(.special) {
      width: 47%;
      margin-top: -30px;

      &:nth-child(odd) {
        margin-top: 30px;
        transform: translate(0px,30px);
      }

    }
  }

  .card-content {
    background: rgba($color-bg-light, 0.4);
    position: absolute;
    bottom: 0;
    width: 100%;
    color: white;
  }

  &.special {
    .card-content {
      font-family: $font-logo;
      position: static;
      font-size: 20px;
      line-height: 1;
      text-align: right;
      color: $color-emphasis;
      background-color: white;
    }
  }
}

.fixed {
  @include breakpoint($sm) {
    position: fixed;
    width: 25%;
  }
}

.canvas-left {
  order: -1;
}

.canvas-feed {
  order: 1;

  @include breakpoint($md) {
    margin-left: 15px;
    align-items: flex-start;
    justify-content: space-around;
    margin-top: 60px;
  }
}

.flexcontainer {
    display: flex;
    flex-direction: row;
    min-height: 100%;
    align-items: stretch;
}
</style>

<script>
export default {
  data () {
    return {
      products: [
        {
          name: 'Verdea tipo bonsai rosado',
          description: 'Divina planta decorativa para regalo del día del amor y la amistad',
          price: '$45.000',
          img: {
            src: 'https://res.cloudinary.com/startics/image/upload/c_scale,w_664/v1505487450/_DSC6524_rrmrei.jpg',
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
