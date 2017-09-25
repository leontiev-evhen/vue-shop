<template>
  <div class="row">
    <div class="col-md-12">
        <h1>{{this.$parent.lang.text_home}}</h1>
        <div class="panel panel-primary filterable">
            <div class="panel-heading">
                <h3 class="panel-title">
                    Shop T-Shirt
                </h3>
            </div>
            <table class="table">
              <tr class="filters">
                  <th>
                    <select v-model="category" @change="" class="form-control" id="filter_category">
                      <option value="">{{this.$parent.lang.text_categories}}</option>
                      <option v-for="category in options.categories" :value="category">{{category}}</option>
                    </select>
                  </th>                    
                  <th>
                    <select v-model="color" v-on:change="" class="form-control" id="filter_size">
                      <option value="">{{this.$parent.lang.text_colors}}</option>
                      <option v-for="color in options.colors" :value="color">{{color}}</option>
                    </select>
                  </th>
                  <th>
                    <select v-model="size" v-on:change="" class="form-control" id="filter_color">
                      <option value="">{{this.$parent.lang.text_sizes}}</option>
                      <option v-for="size in options.sizes" :value="size">{{size}}</option>
                    </select>
                  </th>
                  <th>
                     <select v-model="sort" @change="" class="form-control" id="filter_sort">
                      <option value="">{{this.$parent.lang.text_sorts}}</option>
                      <option v-for="sort in options.sorts" :value="sort">{{sort}}</option>
                    </select>
                  </th>
                  <th>
                    <button id="filter_clear" @click="clear">{{this.$parent.lang.text_clear}}</button>
                  </th>
              </tr>
            </table>
        </div>
        <div id="content">
          <product v-for="product in filteredProducts" :product="product"></product>
        </div>
    </div>
  </div>
</template>

<script>
import Product from './Product.vue'

export default {
	
  name: 'product_list',
  data () {
    return {
      category: '',
      size: '',
      color: '',
      sort: '',
      options: {
        categories: ['Round Neck', 'Crew Neck', 'Collarless'],
        colors: ['black', 'grey', 'white','blue'],
		    sizes: ['L', 'M', 'XL'],
		    sorts: ['low', 'high'],
	  },
	  dataProducts: []
    }
  },
  components: {
	  Product
  },
  methods : {
		clear: function() {
			this.category = '';
			this.color = '';
			this.size = '';
			this.sort = '';
		}
	},
	created() {
		this.dataProducts = this.$parent.products
	},
	computed: {
		filteredProducts() {
			var self = this;
			var checkCategory = (el) => {
				if ( el.category == self.category || self.category == '') {
					return true
				}
				return false
			}
			
			var checkColor= (el) => {
				if (el.color.indexOf(self.color) != -1 || self.color == '' ) {
					return true
				}
				return false
			}
			
			var checkSize = (el) => {

				if (el.size.indexOf(self.size) != -1 || self.size == '') {
					return true
				}
				
				return false
			}
			
			if (self.sort == 'high') {
				self.dataProducts.sort((a, b) => {
					return b.price.toString().localeCompare(a.price);
				});
			} else {
				self.dataProducts.sort((a, b) => {
					return a.price.toString().localeCompare(b.price);
				});
			}
			
			return self.dataProducts.filter((el) => {
				return checkCategory(el) && checkColor(el) && checkSize(el)
			})
		}
	}
}
</script>