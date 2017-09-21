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
                  <li><router-link to="/">Home</router-link></li>
                  <li><router-link to="/bag"><bag-product-count></bag-product-count></router-link></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import BagProductCount from './components/bag/BagProductCount.vue'
export default {
  name: 'app',
  data() {
    return {
      countProduct: '',
    }
  },
  components: {
	  BagProductCount
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
