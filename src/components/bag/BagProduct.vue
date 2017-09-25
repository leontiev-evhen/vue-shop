<template>
	<div class="bag_product">
		<div class="col-md-8 product_info">
			<h4><a :href="'#/product/' + product.id">{{product.name}}</a></h4>
			<div class="size">
				<ul>
					<li>Size<br>{{product.size}}</li>
					<li>{{product.price}} {{this.$parent.$parent.lang.valuta}}</li>
				</ul>
			</div>
			<div class="count">
				<button @click="changeCountProduct(-1)">-</button><span v-model="count">{{count}}</span><button @click="changeCountProduct(+1)">+</button>
			</div>
			<button class="delete" @click="removeProduct()">X</button>
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
  				count: this.product.count,
  			}
  		},
  		methods: {
  			changeCountProduct: function(operation) {
  				this.count += operation
  				if (this.count <= 1) {
  					this.count = 1
  				}
  				this.$emit('changeCountProduct', this.count, this.product.id)
  			},
  			removeProduct: function() {
				var localData = this.$parent.$parent.cart.get()
			
  			  	for (var key in localData) {
					if (localData[key].code == this.product.code) {
						localData.splice(key, 1)
						this.$parent.$parent.cart.set(localData)
					}
				}
				this.$emit('removeProduct')
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