<template>
	<div class="table-responsive">
	  <table class="table table-hover">
	  	<tbody>
	  	<tr>
	  		<th>Name</th><th>Price</th><th>Count</th>
	  	</tr>
	    <tr v-for="product in products">
	    	<td>{{product.name}}</td>
	    	<td>{{product.price}} {{$parent.lang.valuta}}</td>
	    	<td>{{product.count}}</td>
	    </tr>
	    </tbody>
	  </table>
	</div>
	</div>
</template>
 
<script>
	export default {
		name: 'success',
		data() {
			return {
				products: this.$parent.cart.get()
			}
		},
		mounted: function () {
			this.$parent.cart.clear()
			this.$parent.count = 0
		}
	}
</script>