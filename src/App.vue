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
                  <li><router-link to="/bag" ><img src="/static/images/cart.png" class="bag"><span>({{count}})</span></router-link></li>
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

export default {
  name: 'app',
  data() {
	  return {
		  count: 0
	  }
  },
  methods: {
	  addToBag: function(el) {
		  this.count = el
	  },
	  removeProduct: function(el) {
		  this.count = el
	  }
  },
  created() {
	  this.count = Object.keys(JSON.parse(localStorage['bag'])).length
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
