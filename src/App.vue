<template>
  <div id="app">
    <div class="container">
      <header>
        <div class="row">
          <div class="header-wrapper col-md-12">
            <nav class="navbar navbar-inverse">
              <div class="container-fluid">
                <div class="navbar-header">
                  <a class="navbar-brand" href="#">
                    <img src="/static/images/logo.png" class="logo">
                  </a>
                </div>
                <ul class="nav navbar-nav">
                  <li><router-link to="/">{{lang.text_home}}</router-link></li>
                  <li v-show="count"><router-link to="/bag" ><img src="/static/images/cart.png" class="bag"><span> < {{count}}</span></router-link></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <router-view  @addToBag="addToBag" @removeProduct="removeProduct"></router-view>
    </div>
  </div>
</template>

<script>
import products from './api/data'
import lang from './lang'
import CustomLocalStorage from './libs/CustomLocalStorage'
export default {
  name: 'app',
  data() {
	  return {
		  count: 0,
      products: products,
      lang: lang,
      cart: new CustomLocalStorage("bag")
	  }
  },
  methods: {
	  addToBag: function() {
      this.count = this.cart.getCount()
	  },
	  removeProduct: function() {
		  this.count = this.cart.getCount()
	  }
  },
  created() {
    this.count = this.cart.getCount()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.navbar-nav span {
  font-size: 20px;
}


</style>
