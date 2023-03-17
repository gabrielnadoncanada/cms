<template>
  <div class="card">
    <div class="card-header">
      <h1 class="h4 mb-0"> Edit product</h1>
    </div>
    <div class="card-body">
      <form @submit.prevent="save">
        <div class="mb-3">
          <label class="form-label" for="name">Name:</label>
          <input class="form-control" type="text" id="name" v-model="product.name" required>
        </div>
        <div class="mb-3">
          <label class="form-label" for="category">Category:</label>
          <select class="form-select" id="category" v-model="product.productCategoryId" required>
            <option v-for="productCategory in productCategories" :key="productCategory.id" :value="productCategory.id">
              {{ productCategory.name }}
            </option>
          </select>
        </div>
        <div v-for="(variant, index) in product.variants" :key="index">
          <div class="mb-3">
            <label class="form-label" for="variant-name">Variant Name:</label>
            <input class="form-control" type="text" v-model="variant.name" required>
          </div>
          <div class="mb-3">
            <label class="form-label" for="variant-price">Variant Price:</label>
            <input class="form-control" type="number" v-model="variant.price" required>
          </div>
        </div>
        <button type="button" class="btn btn-primary" @click="addVariant">Add Variant</button>
        <div class="mb-3">
          <label class="form-label" for="description">Description:</label>
          <textarea class="form-control" id="description" v-model="product.description"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Save</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductForm',
  data() {
    return {
      product: {
        name: '',
        description: '',
        productCategoryId: '',
        variants: [
          {name: '', price: 0}
        ]
      },
      productCategories: JSON.parse(localStorage.getItem('productCategories')) || []
    }
  },
  created() {
    const id = this.$route.params.id
    if (id) {
      // Edit an existing product
      const products = JSON.parse(localStorage.getItem('products')) || []
      const product = products.find(s => s.id === id)
      if (product) {
        this.product = product
      } else {
        console.log(`Product with id ${id} not found in local storage`)
        // TODO: Display an error message to the user
      }
    }
  },
  methods: {
    save() {
      if (this.product.id) {
        // Update an existing product
        const products = JSON.parse(localStorage.getItem('products')) || []
        const index = products.findIndex(s => s.id === this.product.id)
        if (index > -1) {
          // Update the existing product with the new data
          products.splice(index, 1, this.product)
          localStorage.setItem('products', JSON.stringify(products))
        }
      } else {
        // Save a new product
        const products = JSON.parse(localStorage.getItem('products')) || []
        const newProduct = {
          ...this.product,
          id: Date.now().toString()
        }
        products.push(newProduct)
        localStorage.setItem('products', JSON.stringify(products))
      }
      this.$router.push({name: 'ProductList'})
    },
    addVariant() {
      this.product.variants.push({name: '', price: 0})
    }
  }
}
</script>