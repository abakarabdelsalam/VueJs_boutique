import Vue from 'vue'
import router from './router';
import App from './App.vue'
import * as Filters from './utils/filters'
import axios from 'axios';


Vue.config.productionTip = false
axios.defaults.baseURL = 'https://abdelboutique-91123-default-rtdb.firebaseio.com/';
Vue.prototype.$http = axios;
Object.keys(Filters).forEach((f) => {
  Vue.filter(f, Filters[f]);
})

export const eventBus = new Vue({
  data: {
    products: [],
    cart: [],
    page: 'User',
  },


  methods: {
    addProductToCart(product) {
      if (!this.cart.find(e => e.id === product.id)) {

        this.cart = [...this.cart, product];
        this.$emit('update:cart', this.cart);
      }

    },
    addProduct(product) {
      this.products = [...this.products, { ...product, id: this.products.length + 1 + '' }],
        this.$emit('update:products', this.products);
    },
    removeItemFromCart(item) {
      this.cart = this.cart.slice().filter(e => e.id !== item.id);
      this.$emit('update:cart', this.cart);
    },
    changePage(page) {
      this.page = page;
      this.$emit('update:page', this.page);
    },
    addProducts(products) {
      this.products = products
      this.$emit('update:products', this.products);
    },
    initProducts() {
      this.$http.get('products.json')
        .then(res => {
          const data = res.data;
          this.addProducts(Object.keys(data).map(key => data[key]));

        });
    },

  },


  created() {
    this.initProducts();
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
