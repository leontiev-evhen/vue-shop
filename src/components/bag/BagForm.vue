<template>
	<div class="form">
		<h4>Your Details</h4>
		<form @submit.prevent="validForm">
			<p :class="{ 'control': true }"><input v-model="firstName" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('firstName') }"type="text" name="firstName" :placeholder="this.$parent.$parent.lang.text_first_name"></p>
			<span v-show="errors.has('firstName')" class="help is-danger">{{ errors.first('firstName') }}</span>

			<p :class="{ 'control': true }"><input v-model="lastName" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('lastName') }"type="text" name="lastName" :placeholder="this.$parent.$parent.lang.text_last_name"></p>
			<span v-show="errors.has('lastName')" class="help is-danger">{{ errors.first('lastName') }}</span>
			
			<p :class="{ 'control': true }"><input v-model="email" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" type="text" name="email" :placeholder="this.$parent.$parent.lang.text_email"></p>
			<span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
			
			<button type="submit">{{this.$parent.$parent.lang.text_complete}}</button>
		</form>
	</div>
</template>
<script>
	export default {
		name: 'bag_form',
		data() {
			return {
				firstName: '',
				lastName: '',
				email: '',
			}
		},
		methods: {
			validForm: function() {
				this.$validator.validateAll().then((result) => {
			        if (result) {
			          	window.location.href="/#success"
			        }
	     		});
			}
		}
	}
</script>