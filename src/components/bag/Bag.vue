<template>
	<div class="row" v-if="products.length > 0">
		<div class="col-md-12">
			<h1>{{this.$parent.lang.text_checkout}}</h1>
			<div class="col-md-8">
					<bag-product v-for="product, key in products" :product="product"" @changeCountProduct="changeCountProduct" @removeProduct="removeProduct"></bag-product>
			</div>
			<div class="col-md-4 right_sidebar">

				<discount @discountAction="discountAction"></discount>

				<div class="total">
					<ul class="list-group">
						<li class="list-group-item">
							{{this.$parent.lang.text_subtotal}}:  {{this.$parent.cart.getCount()}} {{this.$parent.lang.text_items}}
						</li> 
						<li class="list-group-item" v-show="dataDiscount.value">
							{{this.$parent.lang.text_discount}}: - {{dataDiscount.value}} {{dataDiscount.operatin}}
						</li> 
						<li class="list-group-item">
							<strong>{{this.$parent.lang.text_total}}:</strong> 
							<strong v-html="Total"></strong> 
							<span>{{this.$parent.lang.valuta}}</span>
						</li>
					</ul>
				</div>
				<bag-form></bag-form>
			</div>
		</div>	
	</div>
	<div v-else>
		<h2 class="center">{{this.$parent.lang.text_empty_bag}}</h2>
	</div>
	
</template>

<script>
import BagProduct from './BagProduct.vue'
import Discount from './Discount.vue'
import BagForm from './BagForm.vue'
import CustomLocalStorage from '../../libs/CustomLocalStorage'
export default {
	name: 'bag',
	data() {
		return {
			products: this.$parent.cart.get(),
			discount: new CustomLocalStorage('discount'),
			total: 0,
			count: 0,
			dataDiscount: 0
		}
	},
	methods: {
		discountAction: function(discount) {
			//this.discount.set(discount)
			this.dataDiscount = discount
		},
		removeProduct: function() {
			this.products = this.$parent.cart.get()
			this.$emit('removeProduct')
		},
		changeCountProduct: function(count, productId) {
			for (var key in this.products) {
				if (this.products[key].id == productId) {
					this.products[key].count = count
				}
			}
			this.$parent.cart.set(this.products)
		}
	},	
	computed: {
		Total() {
			var total = 0
			var sum

			for (var key in this.products) {
				sum = this.products[key].price
				sum *= this.products[key].count
				total += sum
			}

			if (this.dataDiscount.value) {
				var oldTotal = total
				if (this.dataDiscount.operatin == '%') {
					total -= (total * this.dataDiscount.value) / 100
				} else {
					total -= this.dataDiscount.value
				}
				return '<strike>' + oldTotal + ' ' + this.$parent.lang.valuta + '</strike><br>' + total
			}
			return total
		},
		
	},
	created() {
		//this.dataDiscount = this.discount.get()
	},
	components: {
		BagProduct, Discount, BagForm
	}
}

</script>

<style>
	.voucher_block {
		padding-bottom: 20px;
		border-bottom: 1px solid #000;
	}
	
	.voucher_block input {
		width: 100%;
	}

	.center {
		text-align: center;
	}

	.form button {
		background: #222;
    	width: 100%;
    	color: #fff;
    	border: none;
    	padding: 10px;
	}

	.voucher_block button {
		background: #222;
    	width: 20%;
    	color: #fff;
    	border: none;
    	padding: 10px;
	}

	.total {
		padding-top:20px;
		padding-bottom: 20px;
		border-bottom: 1px solid #000;
	}
	
	.list-group-item {
		border-color: #222;
	}

	input {
		border: 1px solid #222;
		padding:10px;
		width: 100%;
	}
</style>