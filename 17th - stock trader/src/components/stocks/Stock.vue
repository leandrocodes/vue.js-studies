<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <v-card class="green darken-3 white--text">
      <v-card-title class="headline">
        <strong>
          {{ stock.name }}
          <small>R$: {{ stock.price }}</small>
        </strong>
      </v-card-title>
    </v-card>

    <v-card>
      <v-container fill-height>
        <v-text-field label="Quantidade" type="number" v-model.number="quantity" />
        <v-btn class="green darken-3 white--text" :disabled='quantity <= 0' @click="buyStock">Comprar</v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        stockQuantity: this.quantity
      }
      console.log(order)
      this.quantity = 0
    }
  }
}
</script>

<style>
</style>