<template>
  <div class="index">
    <div class="page-wrapper">
      <Navigation />
      <div class="feed-wrapper ">
        <div class="flexitem canvas-left columns">
            <div class="fixed">
              <div class="card special">
                <div class="card-image">
                  <figure class="image">
                    <img src="https://res.cloudinary.com/startics/image/upload/v1506024359/imageedit_13_5126887008_pe1f7r.jpg" alt="Placeholder image">
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
        <div class="flexitem canvas-feed columns is-multiline">
          <div class="card column is-half-tablet" v-for="product in products">
            <div class="card-image">
              <figure class="image">
                <img v-bind:src="product.fields.picture.fields.file.url">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <span>{{ product.fields.name }}</span>
                  <a class="button is-success" v-on:click="addToCart(product)">{{ product.fields.price }} - Comprar</a>
                </div>
              </div>
            </div>
          </div> <!-- card -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import {createClient} from '~/plugins/contentful.js'

const client = createClient()

export default {
  transition: 'page',
  components: {
    Navigation
  },
  asyncData ({env}) {
    return Promise.all([
      // fetch all blog products sorted by creation date
      client.getEntries({
        'content_type': env.CTF_PRODUCT_ID,
        order: '-sys.createdAt'
      })
    ]).then(([products]) => {
      // return data that should be available
      // in the template
      return {
        products: products.items
      }
    }).catch(console.error)
  }
}
</script>

<style scoped lang="scss">
.feed-wrapper {
  background-size: cover;

}
.column {
  padding: 0;
}

.columns {
  margin-left: 0;
  margin-right: 0;
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
    background: rgba(white, 0.1);
    color: white;
    position: absolute;
    bottom: 0;
    width: 100%;
    color: white;

    span {
      display: block;
      margin-bottom: 10px;
    }

    button {
      font-family: $font-primary;
    }
  }

  &.special {
    .card-content {
      font-family: $font-primary;
      position: static;
      font-size: 20px;
      line-height: 1;
      text-align: right;
      color: $color-emphasis;
      background-color: white;
    }
  }
}

.canvas-left {
  order: -1;

  @include breakpoint($sm) {
    width: 30%;
    margin-top: 30px;
  }

  @include breakpoint($md) {
    width: 22%;
    margin-top: 30px;
  }

  .fixed {
    @include breakpoint($sm) {
      position: fixed;
      margin-left: 5%;
      width: 30%;
    }

    @include breakpoint($md) {
      width: 22%;
    }
  }

}

.canvas-feed {
  order: 1;

  @include breakpoint($sm) {
    width: 60%;
    margin-left: 37.5%;
    margin-top: 15px;
  }

  @include breakpoint($md) {
    margin-left: 27.5%;
    align-items: flex-start;
    justify-content: space-around;
    margin-top: 60px;
    width: 55%;
  }
}

.flexcontainer {
    display: flex;
    flex-direction: row;
    min-height: 100%;
    align-items: stretch;
}
</style>
