<template>
	<div>
		<ul>
			<li v-for="product in products">{{product.name}}</li>
		</ul>
	</div>
</template>
 
<script>
	export default {
		name: 'success',
		data() {
			return {
				products: JSON.parse(localStorage['bag'] || '[]'),
			}
		},
		mounted: function () {
			localStorage.clear()
		}
	}
</script>