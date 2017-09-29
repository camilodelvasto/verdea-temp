<template>
  <div class="index how">
    <div class="page-wrapper">
      <Navigation />

      <section class="section">
        <div class="container">
          <div v-if="status == 4">
            <h2>¡Transacción aprobada!</h2>
            <p>Hemos recibido el pago con éxito y en breve nos comunicaremos contigo para coordinar la entrega.</p>
            {{ $store.commit('emptyCart') }}
          </div>
          <div v-if="status == 6">
            <h2>Transacción declinada</h2>
            <p>La transacción no pudo ser completada. <a href="//startics.typeform.com/to/MtkSjl" target="_blank">Comúnicate con nosotros</a> si necesitas ayuda con otro medio de pago.</p>
            {{ $store.commit('emptyCart') }}
          </div>
          <div v-if="status == 5">
            <h2>Transacción expiró</h2>
            <p>La transacción no pudo ser completada a tiempo. Por favor regresa al inicio y arma tu carrito de compras de nuevo, o <a href="//startics.typeform.com/to/MtkSjl" target="_blank">comúnicate con nosotros</a> si necesitas ayuda para completar el pedido.</p>
            <br>
            <br>
            <p>Para tu comodidad, hemos guardado tu carrito de compras.<br>
            <nuxt-link class="cart-icon button" to="/checkout">
              <CartIcon/>
            </nuxt-link>
            </p>
          </div>
          <div v-if="status == 7">
            <h2>Transacción pendiente</h2>
            <p>La transacción está pendiente de ser completada. <a href="//startics.typeform.com/to/MtkSjl" target="_blank">Comúnicate con nosotros</a> si necesitas ayuda para completar el pedido.</p>            
            {{ $store.commit('emptyCart') }}
          </div>

          <div v-if="status == undefined">
            <h3>Nada por aquí. Regresa a <nuxt-link to="/">nuestra tienda</nuxt-link>.</h3>
          </div>

          <div class="response-table" v-if="status == 4 || status == 7">
            <p>Aquí está el resumen de la orden para referencia futura:</p>      
            <table class="table is-striped">
              <tbody>
                <tr>
                  <td>Estado:</td>
                  <td><strong>{{ lapTransactionState }}</strong></td>
                </tr>
                <tr>
                  <td>Total:</td>
                  <td><strong>{{ amount | currency }}</strong></td>
                </tr>
                <tr>
                  <td>Referencia:</td>
                  <td><strong>{{ referenceCode }}</strong></td>
                </tr>
              </tbody>
            </table>
            <p><nuxt-link target="_blank" to="//startics.typeform.com/to/MtkSjl">Contáctanos</nuxt-link> si tienes alguna duda sobre tu pedido.</p>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import CartIcon from '~/components/CartIcon.vue'

export default {
  components: {
    Navigation,
    CartIcon
  },
  computed: {
    status () {
      return this.$route.query.transactionState
    },
    lapTransactionState () {
      return this.$route.query.lapTransactionState
    },
    amount () {
      return this.$route.query.TX_VALUE
    },
    referenceCode () {
      return this.$route.query.referenceCode
    }
  },
  filters: {
    currency: function (value) {
      return '$' + value.toLocaleString('es-CO')
    }
  }
}
</script>

<style scoped lang="scss">
.response-table {
  p {
    margin-bottom: 20px;
  }
  table {
    @include breakpoint($xs) {
      margin-left: auto;
      margin-right: auto;
    }
  }
}
.section {
  padding-left: 0;
  padding-right: 0;
}
</style>
