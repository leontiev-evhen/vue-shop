<template>
	<div class="container">
    <h1>Shop</h1>
      <div class="row">
        <div class="col-md-12">
            <div class="panel panel-primary filterable">
                <div class="panel-heading">
                    <h3 class="panel-title">
                        Shop T-Shirt
                    </h3>
                </div>
                <table class="table">
                      <tr class="filters">
                          <th>
                            <select v-model="category" v-on:change="" class="form-control" id="filter_category">
                              <option value="">Categories</option>
                              <option v-for="category in options.categories" :value="category.value">{{category.title}}</option>
                            </select>
                          </th>                    
                          <th>
                            <select v-model="color" v-on:change="" class="form-control" id="filter_size">
                              <option value="">Colors</option>
                              <option v-for="color in options.colors" :value="color">{{color}}</option>
                            </select>
                          </th>
                          <th>
                            <select v-model="size" v-on:change="" class="form-control" id="filter_color">
                              <option value="">Sizes</option>
                              <option v-for="size in options.sizes" :value="size">{{size}}</option>
                            </select>
                          </th>
                          <th>
                             <select v-model="sort" @change="sortPrice(sort)" class="form-control" id="filter_sort">
                              <option value="">Sorts</option>
                              <option v-for="sort in options.sorts" :value="sort">{{sort}}</option>
                            </select>
                          </th>
                          <th>
                            <button id="filter_clear">Clear filter</button>
                          </th>
                      </tr>
                </table>
            </div>
            <div id="content">
              <product v-for="product in dataProducts" :product="product"></product>
            </div>
            <div v-for="item in data | orderBy 'name'">{{item.name}}</div>
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
      data: [
        {name: 'test'},
        {name: 'atest'}
      ],
      category: '',
      size: '',
      color: '',
      sort: '',
      options: {
        categories: [
          {
            value: 'Round Neck',
            title: 'Round Neck'
          },
          {
            value: 'Crew Neck',
            title: 'Crew Neck'
          },
          {
            value: 'Collarless',
            title: 'Collarless'
          },
        ],
        colors: [
          'black',
          'grey',
          'white',	
          'blue'
        ],
		  sizes: [
		    'L',
			  'M',
			  'XL'
		  ],
		  sorts: ['low', 'high'],
	  },
	  dataProducts: products
    }
  },
  components: {
	  Product
  },
  methods : {
	  sortPrice: function(sort) {
		  alert(sort)
	  }
  },
  computed: {
    orderedProducts: function () {
      return _.orderBy(this.dataProducts, 'price')
    }
  },
  filters:{
    category: function(people){  
      if(this.gender=='all') return people
      return people.filter(function(person){
        return person.gender == this.gender
      }.bind(this))
    }
  }
  
  
}
</script>

