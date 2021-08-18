

<template>
  <div class="d-flex flex-column flex-wrap p-1">
    <h5 class="border-bottom pb-5">Mon panier</h5>
    <cart-product-item
      v-for="item in cart"
      :key="item.id"
      :item="item"
    ></cart-product-item>
    <hr class="w-100" />
    <span>Total : {{ total }} €</span>
  </div>
</template>

<script>
import CartProductItem from "./CartProductItem.vue";
export default {
  components: {
    CartProductItem,
  },
  props: ["cart"],
  computed: {
    total() {
      return this.cart.reduce((acc, v) => (acc += v.price), 0);
    },
  },
};
</script>

<style>
</style>


