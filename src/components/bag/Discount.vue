<template>
	<div class="voucher_block" v-if="!discount.value">
		<form @submit.prevent="discountAction">
			<p :class="{ 'control': true }">
				<input type="text" v-model="voucher" :placeholder="this.$parent.$parent.lang.text_vaucher_code">
			</p>
			<span class="help is-danger" v-show="invalidVaucher">{{invalidVaucher}}</span>
			<p>
				<button type="submit">{{this.$parent.$parent.lang.text_submit}}</button>
			</p>
		</form>
	</div>
</template>
<script>
export default {
	name: 'discount',
	data() {
		return {
			voucher: '',
			discount: this.$parent.discount.get(),
			invalidVaucher: '',
			typeVoucher: [
				{type: 'disck5eur', operatin: 'EUR', value: 5},
				{type: 'disck10', operatin: '%', value: 10}
			]
		}
	},
	methods: {
		discountAction: function() {
			for (var key in this.typeVoucher) {
				if (this.typeVoucher[key].type == this.voucher) {
					this.discount = {operatin: this.typeVoucher[key].operatin, value: this.typeVoucher[key].value}
				}
				this.invalidVaucher = this.$parent.$parent.lang.error_voucher
			}
			// switch (this.voucher) {
			// 	case 'disck5eur':
			// 		this.discaunt = {operatin: this.$parent.$parent.lang.valuta, value: 5}
			// 		break
			// 	case 'disck10':
			// 		this.discaunt = {operatin: '%', value: 10}
			// 		break
			// 	default:
			// 		this.invalidVaucher = this.$parent.$parent.lang.error_voucher
			// }

			this.$emit('discountAction', this.discount)
		},
	}
}
</script>