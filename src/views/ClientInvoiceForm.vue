<template>
  <div class="bg-body-light">
    <div class="content content-full">
      <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center">
        <h1 class="flex-grow-1 fs-3 fw-semibold my-2 my-sm-3">{{ title }}</h1>
        <nav class="flex-shrink-0 my-2 my-sm-0 ms-sm-3" aria-label="breadcrumb">
          <ol class="breadcrumb">

            <li class="breadcrumb-item">
              <router-link :to="{ name: 'ClientList' }">
                Clients
              </router-link>

            </li>
            <li class="breadcrumb-item active" aria-current="page">{{ title }}</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  <div class="content content-boxed">
    <!-- Invoice -->
    <div class="block block-rounded">
      <div class="block-header block-header-default">
        <h3 class="block-title">#INV01364</h3>
        <div class="block-options">
          <!-- Print Page functionality is initialized dmPrint() -->
          <button type="button" class="btn-block-option" onclick="Dashmix.helpers('dm-print');">
            <i class="si si-printer me-1"></i> Print Invoice
          </button>
        </div>
      </div>
      <div class="block-content">
        <div class="p-sm-4 p-xl-7">
          <!-- Invoice Info -->
          <div class="row mb-5">
            <!-- Company Info -->
            <div class="col-6">
              <div v-if="enterprise.enterpriseLogo">
                <p>
                  <img class="enterpriseLogo" :src="enterprise.enterpriseLogo" alt="Enterprise Logo"
                       style="max-width: 150px;"/>
                </p>
              </div>
              <div v-else>
                <p class="h3">{{ enterprise.name }}</p>
              </div>

              <address>
                {{ enterprise.street }}<br>
                {{ enterprise.city }}, {{ enterprise.state }} {{ enterprise.zipCode }}<br>
                {{ enterprise.country }}<br><br>
                {{ enterprise.phone }}<br>
                {{ enterprise.email }}
              </address>
            </div>
            <!-- END Company Info -->

            <!-- Client Info -->
            <div class="col-6 text-end">
              <p class="h3">Client</p>
              <address>
                Street Address<br>
                State, City<br>
                Region, Postal Code<br>
                ctr@example.com
              </address>
            </div>
            <!-- END Client Info -->
          </div>
          <!-- END Invoice Info -->

          <!-- Table -->
          <div class="table-responsive push">
            <table class="table table-bordered">
              <thead class="bg-body">
              <tr>
                <th>Objet</th>
                <th class="text-start" style="width: 150px;">Quantité</th>
                <th class="text-start" style="width: 120px;">Prix</th>
                <th class="text-end" style="width: 90px;">Total</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item, index) in clientInvoice.items" :key="item.id">
                <td>
                  <EditableField placeholder="Entrer objet"/>
                </td>
                <td>
                  <EditableField placeholder="Entrer quantité" @change="updateItem({ item: $event })"/>
                </td>
                <td>
                  <EditableField placeholder="Entrer prix"/>
                </td>
                <td class="text-end">
                 0.00
                </td>
              </tr>
              <tr>
                <td colspan="6">
                  <button type="button" class="btn btn-light" @click="addItem">
                    <i class="fa  fa-plus"></i>
                  </button>
                </td>
              </tr>
              <!--              <tr>-->
              <!--                <td class="text-center">2</td>-->
              <!--                <td>-->
              <!--                  <p class="fw-semibold mb-1">Online Store Design &amp; Development</p>-->
              <!--                  <div class="text-muted">Design/Development for all popular modern browsers</div>-->
              <!--                </td>-->
              <!--                <td class="text-center">-->
              <!--                  <span class="badge rounded-pill bg-primary">1</span>-->
              <!--                </td>-->
              <!--                <td class="text-end">$20.000,00</td>-->
              <!--                <td class="text-end">$20.000,00</td>-->
              <!--              </tr>-->
              <!--              <tr>-->
              <!--                <td class="text-center">3</td>-->
              <!--                <td>-->
              <!--                  <p class="fw-semibold mb-1">App Design</p>-->
              <!--                  <div class="text-muted">Promotional mobile application</div>-->
              <!--                </td>-->
              <!--                <td class="text-center">-->
              <!--                  <span class="badge rounded-pill bg-primary">1</span>-->
              <!--                </td>-->
              <!--                <td class="text-end">$3.200,00</td>-->
              <!--                <td class="text-end">$3.200,00</td>-->
              <!--              </tr>-->
              <!--              <tr>-->
              <!--                <td colspan="4" class="fw-semibold text-end">Subtotal</td>-->
              <!--                <td class="text-end">$25.000,00</td>-->
              <!--              </tr>-->
              <!--              <tr>-->
              <!--                <td colspan="4" class="fw-semibold text-end">Vat Rate</td>-->
              <!--                <td class="text-end">20%</td>-->
              <!--              </tr>-->
              <!--              <tr>-->
              <!--                <td colspan="4" class="fw-semibold text-end">Vat Due</td>-->
              <!--                <td class="text-end">$5.000,00</td>-->
              <!--              </tr>-->
              <!--              <tr>-->
              <!--                <td colspan="4" class="fw-bold text-uppercase text-end bg-body-light">Total Due</td>-->
              <!--                <td class="fw-bold text-end bg-body-light">$30.000,00</td>-->
              <!--              </tr>-->
              </tbody>

            </table>
          </div>
          <!-- END Table -->

          <!-- Footer -->
          <p class="text-muted text-center my-5">
            Thank you for doing business with us.
          </p>
          <!-- END Footer -->
        </div>
      </div>
    </div>
    <!-- END Invoice -->
  </div>
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
import EditableField from "@/components/form/EditableField.vue";
export default {
  name: 'InvoiceForm',
  components: {EditableField},
  data() {
    return {
      title: 'Nouvelle Facture',
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
      this.title = 'Modifier Facture'
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