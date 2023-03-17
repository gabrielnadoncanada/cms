<template>
  <div class="card">
    <div class="card-header d-flex justify-content-between align-items-center">
      <h1 class="h4 mb-0">Product Categories</h1>
      <button class="btn btn-primary" @click="addProductCategory">Add Category</button>
    </div>
    <div class="card-body">
      <table class="table border">
        <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="productCategory in productCategories" :key="productCategory.id">
          <td>{{ productCategory.name }}</td>
          <td>{{ productCategory.description }}</td>
          <td class="d-flex gap-2">
            <button class="btn btn-primary" @click="editProductCategory(productCategory)">Edit</button>
            <button class="btn btn-danger" @click="deleteProductCategory(productCategory)">Delete</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCategoryList',
  data() {
    return {
      productCategories: JSON.parse(localStorage.getItem('productCategories')) || [],
    }
  },
  methods: {
    addProductCategory() {
      this.$router.push({ name: 'ProductCategoryAdd' })
    },
    editProductCategory(productCategory) {
      this.$router.push({ name: 'ProductCategoryEdit', params: { id: productCategory.id } })
    },
    deleteProductCategory(productCategory) {
      const index = this.productCategories.findIndex(c => c.id === productCategory.id)
      if (index > -1) {
        this.productCategories.splice(index, 1)
        localStorage.setItem('productCategories', JSON.stringify(this.productCategories))
      }
    }
  }
}
</script>
