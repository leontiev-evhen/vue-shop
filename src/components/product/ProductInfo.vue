<template>
	<div class="row" v-if="item">
		<div class="col-md-8">
			<div class="col-md-6">
				<div v-if="Array.isArray(item.img)" id="thumbCarousel" class="carousel slide" data-ride="carousel">
					<div class="carousel-inner thumb-inner">
						<div class="item" v-for="(img, index) in item.img" :class="{ 'active': index === 0 }">
							<div class="col-xs-12 slide1 slider-div">
								<img :src="img" alt="">
							</div>
						</div>
					</div>
					
					<a class="right carousel-control" data-href="#thumbCarousel" data-target="#thumbCarousel" data-toggle="carousel" data-slide="next">
						<span class="glyphicon glyphicon-chevron-right"></span>
					</a>
					<a class="left carousel-control" data-href="#thumbCarousel" data-target="#thumbCarousel" data-toggle="carousel" data-slide="prev">
						<span class="glyphicon glyphicon-chevron-left"></span>
					</a>
					<ul class="nav nav-justified nav-carousel">
						<li data-target="#thumbCarousel" data-slide-to="0" class="carousel-border" v-for="(img, index) in item.img" :class="{ 'active': index === 0 }">
							<a data-href="#"><img :src="img" class="img-responsive"></a>
						</li>
					</ul>
				</div>
				<div v-else>
					<img :src="item.img">
				</div>
			</div>
			<div class="col-md-6 product_info">
				<h3>{{item.name}}</h3>
				<div class="product_description">{{item.description}}</div>
				<div class="product_price">{{item.price}} {{this.$parent.lang.valuta}}</div>
				<div class="product_size">
					<select class="form-control" v-model="size">
						<option value="">{{this.$parent.lang.text_choose_size}}</option>
						<option v-for="size in item.size">{{size}}</option>
					</select>
					<span class="help is-danger" v-show="error">{{error}}</span>
				</div>
				<div class="product_btn">
					<button type="button" class="btn" v-on:click="addToBag">{{buttonText}}</button>
				</div>
			</div>
		</div>
	</div>
	<div v-else>
		<page-not-found></page-not-found>
	</div>
</template>

<script>
import PageNotFound from '../PageNotFound.vue'
export default {
	name: 'product_info',
	data() {
		return {
			item: null,
			products: this.$parent.products,
			size: '',
			agree: false,
			buttonText: this.$parent.lang.text_add_to_bag,
			buttonTextAfterClick: this.$parent.lang.text_proccess_to_checkout,
			error: ''
		}
	},
	created() {
		for (var key in this.products) {
			if (this.$route.params.id == this.products[key].id) {
				this.item = this.products[key]
			}
		}
	},
	methods: {
		addToBag: function() {
		
			if (this.checkSize()) {
				this.buttonText = this.buttonTextAfterClick
				
				if (this.agree) {
					return window.location.href = "#/bag"
				}
			
			    var aBag = []
				aBag = this.$parent.cart.get()
				var item = {id: this.item.id, code: this.item.id + '-' + this.size, name: this.item.name, size: this.size, price: this.item.price, count: 1, img: this.item.img}
				
				if (!$.isEmptyObject(aBag)) {
					var key
					if(key = this.getKey(aBag)) {
						if (aBag[key].size == this.size) {
							aBag[key].count++
						} else {
							aBag.push(item)
						}
					} else {
						aBag.push(item)
					}

				} else {
					aBag.push(item)
				}
				
				this.$parent.cart.set(aBag)
				
				this.agree = true
				this.$emit('addToBag')
			}
		},
		getKey: function(data) {
			var key = false
			for (var i in data) {
				if (data[i].code == this.item.id + '-' + this.size) {
					key = i
				} 
			}
			return key
		},
		checkSize: function() {
			if (this.size.length > 0) {
				this.error = ''
				return true
			}
			this.error = this.$parent.lang.error_size
			return false
		}
	},
	components: {
		PageNotFound
	}
}

</script>

<style>

</style>