<template>
	<div class="bag_product">
		<div class="col-md-8 product_info">
			<h4><a :href="'#/product/' + product.id">{{product.name}}</a></h4>
			<div class="size">
				<ul>
					<li>Size{{product.size}}</li>
					<li>{{product.price}} EUR</li>
				</ul>
			</div>
			<div class="count">
				<button @click="changeCount(-1, product.id)">-</button><span v-model="count">{{count}}</span><button @click="changeCount(+1, product.id)">+</button>
			</div>
			<button class="delete" @click="remove(product.id)">X</button>
		</div>
		<div class="col-md-4 item">
			<div v-if="Array.isArray(product.img)">
				<img :src="product.img[0]">
			</div>
			<div v-else>
				<img :src="product.img">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
  		name: 'BagProduct',
  		props: ['product'],
  		data() {
  			return {
  				count: 1,
  			}
  		},
  		computed: {

  		},
  		methods: {
  			changeCount(operation, productId) {
  				this.count += operation
  				if (this.count <= 1) {
  					this.count = 1;
  				}
  				this.$emit('test', this.count, productId)
  			},
  			remove(id) {
  			  	console.log(this)
  			}
  		}
	}
</script>

<style>
	.bag_product {
		margin-bottom: 30px;
    	min-height: 300px;
    	border-bottom: 1px solid #222;
	}
	.product_info {
		position: relative;
	}
	.size ul {
		padding: 0;
	}
	.size ul li {
		display: inline-block;
		list-style-type: none;
		padding-right: 15px;
		font-weight: bold;
	}

	.delete {
		position: absolute;
	    top: 10px;
	    left: 50%;
	    background: #222;
	    color: #fff;
	    border: none;
	}
	.count span {
		padding: 10px;
	}
</style>