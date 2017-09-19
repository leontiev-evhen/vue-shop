<template>
 	<div class="col-md-4 item">
		<div class="group list-group-image">
			<img :src="product.img">
		</div>
		<div class="product-name">
			<a :href="'/product.html?id=' + product.id">{{product.name}}</a> <b> - {{product.price}} EUR</b>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Product',
  props: ['product']
}
</script>

