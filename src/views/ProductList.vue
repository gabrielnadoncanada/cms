<template>
  <div class="card">
    <div class="card-header  d-flex justify-content-between align-items-center">
      <h1 class="h4 mb-0">Products</h1>
      <button class="btn btn-primary" @click="addProduct">Add Product</button>
    </div>
    <div class="card-body">
      <table class="table border">
        <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Category</th>
          <th scope="col">Price</th>
          <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>{{ getProductCategoryName(product.productCategoryId) }}</td>
          <td>{{ product.price }}</td>
          <td class="d-flex gap-2">
            <button class="btn btn-primary" @click="editProduct(product)">Edit</button>
            <button class="btn btn-danger" @click="deleteProduct(product)">Delete</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  data() {
    return {
      products: JSON.parse(localStorage.getItem('products')) || [],
      productCategories: JSON.parse(localStorage.getItem('productCategories')) || [],
    }
  },
  methods: {
    getProductCategoryName(id) {
      const productCategory = this.productCategories.find(c => c.id === id)
      return productCategory ? productCategory.name : ''
    },
    addProduct() {
      this.$router.push({name: 'ProductAdd'})
    },
    editProduct(product) {
      this.$router.push({name: 'ProductEdit', params: {id: product.id}})
    },
    deleteProduct(product) {
      const index = this.products.findIndex(p => p.id === product.id)
      if (index > -1) {
        this.products.splice(index, 1)
        localStorage.setItem('products', JSON.stringify(this.products))
      }
    }
  }
}
</script>
