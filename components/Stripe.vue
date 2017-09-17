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
    <div class="flexitem canvas-feed column columns is-tablet is-offset-0 is-6-desktop is-multiline">
        <div class="card column is-half-tablet">
          <div class="card-image">
            <figure class="image">
              <img src="https://res.cloudinary.com/startics/image/upload/v1505623912/3_xf7hso.jpg" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="subtitle is-6"><a class="button" disabled>$48.000 - Agotada</a></p>
              </div>
            </div>
          </div>
        </div> <!-- card -->
        <div class="card column is-half-tablet">
          <div class="card-image">
            <figure class="image">
              <img src="https://res.cloudinary.com/startics/image/upload/v1505623746/2_kjxnij.jpg" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="subtitle is-6"><a class="button" disabled>$48.000 - Agotada</a></p>
              </div>
            </div>
          </div>
        </div> <!-- card -->
        <div class="card column is-half-tablet">
          <div class="card-image">
            <figure class="image">
              <img src="https://res.cloudinary.com/startics/image/upload/v1505623497/1_cgc32r.jpg" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="subtitle is-6"><a class="button" disabled>$48.000 - Agotada</a></p>
              </div>
            </div>
          </div>
        </div> <!-- card -->
        <div class="card column is-half-tablet">
          <div class="card-image">
            <figure class="image">
              <img src="https://res.cloudinary.com/startics/image/upload/v1505624226/4_jgmena.jpg" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <form method="post" action="https://gateway.payulatam.com/ppp-web-gateway/pb.zul" accept-charset="UTF-8">
                  <button type="submit" class="button is-success" border="0" alt="" onClick="this.form.urlOrigen.value = window.location.href;">$68.000 - Comprar</button>
                  <input name="buttonId" type="hidden" value="rJBsGXokK2pdG/cjsofc6Ak7/IeRzvEBdMBhs5W49iD6Cv30eH1k1g=="/>
                  <input name="merchantId" type="hidden" value="38307"/>
                  <input name="accountId" type="hidden" value="42341"/>
                  <input name="description" type="hidden" value="Verdea Anturio Rojo"/>
                  <input name="referenceCode" type="hidden" value="verdeacr"/>
                  <input name="amount" type="hidden" value="54000"/>
                  <input name="tax" type="hidden" value="0"/>
                  <input name="taxReturnBase" type="hidden" value="0"/>
                  <input name="shipmentValue" value="6000" type="hidden"/>
                  <input name="currency" type="hidden" value="COP"/>
                  <input name="lng" type="hidden" value="es"/>
                  <input name="approvedResponseUrl" type="hidden" value="https://verdea.online/success"/>
                  <input name="declinedResponseUrl" type="hidden" value="https://verdea.online/failure"/>
                  <input name="pendingResponseUrl" type="hidden" value="https://verdea.online/pending"/>
                  <input name="displayShippingInformation" type="hidden" value="YES"/>
                  <input name="displayBuyerComments" type="hidden" value="true"/>
                  <input name="sourceUrl" id="urlOrigen" value="" type="hidden"/>
                  <input name="buttonType" value="SIMPLE" type="hidden"/>
                  <input name="signature" value="d7133d14a450b28b418d96f4dfcf40d7f32128a1ce0f02b4761aa9140cc567dd" type="hidden"/>
                </form>

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
