<template>
	<div class="row">
		<div class="col-md-10">
			<h1>Checkout</h1>
			<div class="col-md-8">
				<ul>
					<li v-for="item in products">{{item.name}}</li>
				</ul>
			</div>
			<div class="col-md-4 right_sidebar">
				<div class="voucher_block">
					<h4>Voucher code</h4>
					<form @submit="discaunt">
						<p>
							<input type="text" v-model="voucher">
						</p>
						<button>Submit</button>
					</form>
				</div>
				<div>
					<ul class="list-group">
						<li class="list-group-item">
							Subtotal (2 items): $30.98
						</li> 
						<li class="list-group-item">
						<strong>Total:</strong> 
						<strong>{{Total}}</strong> 
						</li>
					</ul>
				</div>
			</div>
		</div>	
	</div>
</template>

<script>
export default {
	name: 'bag',
	data() {
		return {
			products: JSON.parse(localStorage['bag']),
			voucher: '',
			total: []
		}
	},
	methods: {
		discaunt: function() {
			
		}
	},
	computed: {
		Total() {
			this.products.filter((el) => {
				return this.total.push(el.price)
			})
			
			return this.total
		}
		
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
</style>