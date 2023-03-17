<template>
  <div class="card">
    <div class="card-header">
      <h1 class="h4 mb-0">Edit product category</h1>
    </div>
    <div class="card-body">
      <form @submit.prevent="save">
        <div class="mb-3">
          <label class="form-label" for="name">Name:</label>
          <input class="form-control" type="text" id="name" v-model="productCategory.name" required>
        </div>
        <div class="mb-3">
          <label class="form-label" for="description">Description:</label>
          <textarea class="form-control" id="description" v-model="productCategory.description"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Save</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCategoryForm',
  data() {
    return {
      productCategory: {
        name: '',
        description: ''
      }
    }
  },
  mounted() {
    // Check if we're editing an existing product category
    const id = this.$route.params.id
    if (id) {
      const productCategories = JSON.parse(localStorage.getItem('productCategories')) || []
      const productCategory = productCategories.find(c => c.id === id)
      if (productCategory) {
        this.productCategory = productCategory
      } else {
        console.log(`Product Category with id ${id} not found in local storage`)
        // TODO: Display an error message to the user
      }
    }
  },
  methods: {
    save() {
      // Check if we're adding a new category or editing an existing one
      if (this.productCategory.id) {
        const productCategories = JSON.parse(localStorage.getItem('productCategories')) || []
        const index = productCategories.findIndex(c => c.id === this.productCategory.id)
        if (index > -1) {
          productCategories.splice(index, 1, this.productCategory)
          localStorage.setItem('productCategories', JSON.stringify(productCategories))
        }
      } else {
        const productCategories = JSON.parse(localStorage.getItem('productCategories')) || []
        const newProductCategory = {
          ...this.productCategory,
          id: Date.now().toString()
        }
        productCategories.push(newProductCategory)
        localStorage.setItem('productCategories', JSON.stringify(productCategories))
      }
      this.$router.push({ name: 'ProductCategoryList' })
    }
  }
}
</script>
