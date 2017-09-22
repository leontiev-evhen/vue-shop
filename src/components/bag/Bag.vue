<template>
	<div class="row" v-if="products.length > 0">
		<div class="col-md-12">
			<h1>Checkout</h1>
			<div class="col-md-8">
					<bag-product v-for="product, key in products" :product="product" :key="key" @test="changeCountProduct" @removeProduct="removeProduct"></bag-product>
			</div>
			<div class="col-md-4 right_sidebar">
				<div class="voucher_block">
					<h4>Voucher code</h4>
					<form @submit.prevent="discauntAction">
						<p>
							<input type="text" v-model="voucher">
						</p>
						<button type="submit">Submit</button>
					</form>
				</div>
				<div class="total">
					<ul class="list-group">
						<li class="list-group-item">
							Subtotal: <bag-product-count></bag-product-count> items
						</li> 
						<li class="list-group-item" v-show="discaunt">
							Discount: {{discaunt}}
						</li> 
						<li class="list-group-item">
							<strong>Total:</strong> 
							<strong>{{Total}}</strong> 
						</li>
					</ul>
				</div>
				<div class="form">
					<h4>Your Details</h4>
					<form @submit.prevent="validForm">
						<p><input v-model="firstName" type="text" name="firstName" placeholder="First name"></p>
						<p><input v-model="lastName" type="text" name="lastName" placeholder="Last name"></p>
						<p><input v-model="email" type="text" name="email" placeholder="Email"></p>
						<button type="submit">Complete purchase</button>
					</form>
					<ul class="errors">
						<li v-show="!validation.firstName">First name cannot be empty</li>
						<li v-show="!validation.lastName">Last name cannot be empty</li>
						<li v-show="!validation.email">Email cannot be empty</li>
					</ul>
				</div>
			</div>
		</div>	
	</div>
	<div v-else>
		<h2 class="center">Bag is empty</h2>
	</div>
	
</template>

<script>
import BagProduct from './BagProduct.vue'
import BagProductCount from './BagProductCount.vue'
var emailREG = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export default {
	name: 'bag',
	data() {
		return {
			products: JSON.parse(localStorage['bag'] || '[]'),
			voucher: '',
			discaunt: 0,
			total: 0,
			firstName: '',
			lastName: '',
			email: '',
		}
	},
	methods: {
		discauntAction: function() {
			switch (this.voucher) {
				case 'disck5eur':
					this.discaunt = 5
					break;
				case 'disck10':
					this.discaunt = 10
					break;
			}
			this.voucher = ''
		},
		removeProduct: function() {
			this.products = JSON.parse(localStorage['bag'] || '[]')
			this.$emit('removeProduct', Object.keys(JSON.parse(localStorage['bag'])).length)
		},
		changeCountProduct: function(count, productId) {
			for (var key in this.products) {
				if (this.products[key].id == productId) {
					this.products[key].count = count
				}
			}
		},
		validForm: function() {
			if (this.isValid) {
				window.location.href = '#/success';
			}
		}
	},
	computed: {
		Total() {
			var total = 0;
			var sum;
			for (var key in this.products) {
			sum = this.products[key].price
			sum *= this.products[key].count
			total += sum
			}
			return total
			return this.total = total
		},
		validation: function () {
	      return {
	        firstName: !!this.firstName.trim(),
	        lastName: !!this.lastName.trim(),
	        email: emailREG.test(this.email)
	      }
	    },
	    isValid: function () {
	      var validation = this.validation
	      return Object.keys(validation).every(function (key) {
	        return validation[key]
	      })
	    }
		
	},
	components: {
		BagProduct, BagProductCount
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
	.total {
		padding-top:20px;
		padding-bottom: 20px;
		border-bottom: 1px solid #000;
	}
	
	.errors li {
		color: red;
	}

	.list-group-item {
		border-color: #222;
	}

	input {
		border: 1px solid #222;
		padding:5px;
		width: 100%;
	}
	    
</style>