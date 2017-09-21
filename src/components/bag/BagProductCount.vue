<template>
	<span class="count">
		<img src="/static/images/cart.png" class="bag">({{countItem}})
	</span>
</template>
 
<script>
	export default {
		name: 'bag_product_count',
		computed: {
			countItem() {
			  if (localStorage['bag']) {
				return Object.keys(JSON.parse(localStorage['bag'])).length
			  }
			  return 0
			}
			
		}
	}
</script>