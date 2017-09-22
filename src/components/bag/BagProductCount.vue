<template>
	<span class="count">
		{{countItem}}
	</span>
</template>
 
<script>
import ProductInfo from '../product/ProductInfo.vue'
	export default {
		name: 'bag_product_count',
		data() {
			return {
				countProduct: 0
			}
		},
		computed: {
			countItem() {
			  if (localStorage['bag']) {
				this.countProduct = Object.keys(JSON.parse(localStorage['bag'])).length
				return this.countProduct
			  }
			  return this.countProduct
			}
			
		},
		methods: {
			test: function(el) {
				this.countProduct + el
				console.log(this.countProduct)
			}
		}, 
		components: {
		  ProductInfo
		}
	}
</script>