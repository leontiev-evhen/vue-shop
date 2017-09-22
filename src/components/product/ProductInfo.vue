<template>
	<div class="row" v-if="data">
		<div class="col-md-8">
			<div class="col-md-6">
				<div v-if="Array.isArray(data.img)" id="thumbCarousel" class="carousel slide">
					<div class="carousel-inner thumb-inner">
						<div class="item" v-for="(img, index) in data.img" :class="{ 'active': index === 0 }">
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
						<li data-target="#thumbCarousel" data-slide-to="0" class="carousel-border" v-for="(img, index) in data.img" :class="{ 'active': index === 0 }">
							<a data-href="#"><img :src="img" class="img-responsive"></a>
						</li>
					</ul>
				</div>
				<div v-else>
					<img :src="data.img">
				</div>
			</div>
			<div class="col-md-6 product_info">
				<h3>{{data.name}}</h3>
				<div class="product_description">{{data.description}}</div>
				<div class="product_price">{{data.price}} EUR</div>
				<div class="product_size">
					<select class="form-control" v-model="size">
						<option value="">Choose size</option>
						<option v-for="size in data.size">{{size}}</option>
					</select>
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
			data: null,
			size: '',
			agree: false,
			buttonText: 'Add to bag',
			buttonTextAfterClick: 'Proceed to checkout'
		}
	},
	created() {

		for (var key in products) {
			if (this.$route.params.id == products[key].id) {
				this.data = products[key]
			}
		}
	},
	methods: {
		addToBag: function() {

			var self = this
			this.buttonText = this.buttonTextAfterClick
			
			if (this.agree) {
				window.location.href = "#/bag";
			}
		
		    var aBag = [];
			aBag = JSON.parse(localStorage['bag'] || '[]')
			
			var item = {id: this.data.id, name: this.data.name, size: this.size, price: this.data.price, count: 1, img: this.data.img}
			
			if (!$.isEmptyObject(aBag)) {
				if (self.indexWhere(aBag, item => item.id === this.data.id) == -1) {
					aBag.push(item)
				}
			} else {
				aBag.push(item)
			}
		
		    localStorage['bag'] = JSON.stringify(aBag);
			this.agree = true;

		},

		indexWhere: function(array, conditionFn) {
			var item = array.find(conditionFn)
			return array.indexOf(item)
		}
	},
	components: {
	  PageNotFound
	}
}
</script>