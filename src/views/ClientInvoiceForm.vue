<template>
  <div>
    <table>
      <thead>
      <th>
        {{ enterprise.name }}
      </th>
      <th>
        Description
      </th>
      </thead>
      <tr v-for="productCategory in productCategories" :key="productCategory.id">
        <td>{{ productCategory.name }}</td>
        <td>{{ productCategory.description }}</td>
        <td>
          <button @click="editProductCategory(productCategory)">Edit</button>
          <button class="btn btn-danger" @click="deleteProductCategory(productCategory)">Delete</button>
        </td>
      </tr>
    </table>
    <form @submit.prevent="save">
      <div class="mb-3">
        <label for="client">Client:</label>
        <select class="form-select" id="client" v-model="clientInvoice.clientId" required>
          <option v-for="client in clients" :key="client.id" :value="client.id">{{ client.name }}</option>
        </select>
      </div>
      <div class="mb-3">
        <label class="form-label" for="date">Date:</label>
        <input class="form-control" type="date" id="date" v-model="clientInvoice.date" required>
      </div>
      <div>
        <table class="table border">
          <thead>
          <tr>
            <th>Type</th>
            <th>Product/Service</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item, index) in clientInvoice.items" :key="item.id">
            <td>
              <select class="form-select" v-model="item.type" @change="updateItem(index)" required>
                <option value="">Select an option</option>
                <option value="product">Product</option>
                <option value="service">Service</option>
              </select>
            </td>
            <td>
              <select class="form-select" v-model="item.productId" @change="updateItem(index)" required
                      v-if="item.type === 'product'">
                <option v-for="product in products" :key="product.id" :value="product.id">{{ product.name }}</option>
              </select>
              <select class="form-select" v-model="item.productId" @change="updateItem(index)" required
                      v-if="item.type === 'service'">
                <option v-for="service in services" :key="service.id" :value="service.id">{{ service.name }}</option>
              </select>
            </td>
            <td>
              <input class="form-control" type="number" v-model="item.quantity" min="1" @change="updateItem(index)"
                     required>
            </td>

            <td>
              {{ item.total.toFixed(2) }}
            </td>
            <td>
              <button class="btn btn-danger" @click.prevent="deleteItem(index)">Remove</button>
            </td>
          </tr>
          </tbody>
        </table>
        <button class="btn btn-primary" @click.prevent="addItem">Add Item</button>
      </div>
      <button type="submit" class="btn btn-primary">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'InvoiceForm',
  data() {
    return {
      clientInvoice: {
        clientId: '',
        date: '',
        items: []
      },
      clients: JSON.parse(localStorage.getItem('clients')) || [],
      products: JSON.parse(localStorage.getItem('products')) || [],
      services: JSON.parse(localStorage.getItem('services')) || [],
      enterprise: JSON.parse(localStorage.getItem('enterprise')) || {},
    }
  },
  created() {
    const id = this.$route.params.id
    if (id) {
      // Edit an existing service
      const clientInvoices = JSON.parse(localStorage.getItem('clientInvoices')) || []
      const clientInvoice = clientInvoices.find(s => s.id === id)
      if (clientInvoice) {
        this.clientInvoice = clientInvoice
      } else {
        console.log(`Client Invoice with id ${id} not found in local storage`)
        // TODO: Display an error message to the user
      }
    }
  },
  methods: {
    addItem() {
      this.clientInvoice.items.push({id: Date.now(), type: '', productId: '', quantity: 1, price: 0, total: 0})
    },
    deleteItem(index) {
      this.clientInvoice.items.splice(index, 1)
    },
    updateItem(index) {
      const item = this.clientInvoice.items[index]
      if (item.type === 'product') {
        const product = this.products.find(p => p.id === item.productId)
        if (product) {
          item.price = product.price
        }
      } else if (item.type === 'service') {
        const service = this.services.find(s => s.id === item.productId)
        if (service) {
          item.price = service.price
        }
      }
      item.total = item.price * item.quantity || 0 // Initialize total to 0 if price or quantity is undefined
    },
    save() {
      if (this.clientInvoice.id) {
        // Update an existing service
        const clientInvoices = JSON.parse(localStorage.getItem('clientInvoices')) || []
        const index = clientInvoices.findIndex(s => s.id === this.clientInvoice.id)
        if (index > -1) {
          clientInvoices.splice(index, 1, this.clientInvoice)
          localStorage.setItem('clientInvoices', JSON.stringify(clientInvoices))
        }
      } else {
        // Save a new service
        const clientInvoices = JSON.parse(localStorage.getItem('clientInvoices')) || []
        const newClientInvoice = {
          ...this.clientInvoice,
          id: Date.now().toString()
        }
        clientInvoices.push(newClientInvoice)
        localStorage.setItem('clientInvoices', JSON.stringify(clientInvoices))
      }

      this.$router.push({name: 'ClientInvoiceList'})
    }
  }
}
</script>