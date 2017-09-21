<template>
 	<div class="col-md-4 item">
		<div class="group list-group-image">
			<div v-if="Array.isArray(product.img)">
				<img :src="product.img[0]">
			</div>
			<div v-else>
				<img :src="product.img">
			</div>
		</div>
		<div class="product-name">
			<a :href="'#/product/' + product.id">{{product.name}}</a> <b> - {{product.price}} EUR</b>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Product',
  props: ['product']
}
</script>

