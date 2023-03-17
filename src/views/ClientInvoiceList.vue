<template>
  <div class="card">
    <div class="card-header d-flex justify-content-between align-items-center">
      <h1 class="h4 mb-0">Invoices</h1>
      <button class="btn btn-primary" @click="addClientInvoice">Add Invoice</button>
    </div>
    <div class="card-body">
      <table class="table border">
        <thead>
        <tr>
          <th scope="col">Client</th>
          <th scope="col">Date</th>
          <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="clientInvoice in clientInvoices" :key="clientInvoice.id">
          <td>{{ getClientName(clientInvoice.clientId) }}</td>
          <td>{{ clientInvoice.date }}</td>
          <td class="d-flex gap-2">
            <button class="btn btn-primary" @click="editClientInvoice(clientInvoice)">Edit</button>
            <button class="btn btn-danger" @click="deleteClientInvoice(clientInvoice)">Delete</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InvoiceList',
  data() {
    return {
      clientInvoices: JSON.parse(localStorage.getItem('clientInvoices')) || [],
      clients: JSON.parse(localStorage.getItem('clients')) || [],
    }
  },
  methods: {
    addClientInvoice() {
      this.$router.push({name: 'ClientInvoiceAdd'})
    },
    editClientInvoice(clientInvoice) {
      this.$router.push({name: 'ClientInvoiceEdit', params: {id: clientInvoice.id}})
    },
    deleteClientInvoice(clientInvoice) {
      const index = this.clientInvoices.findIndex(i => i.id === clientInvoice.id)
      if (index > -1) {
        this.clientInvoices.splice(index, 1)
        localStorage.setItem('clientInvoices', JSON.stringify(this.clientInvoices))
      }
    },
    getClientName(clientId) {
      const client = this.clients.find(c => c.id === clientId)
      return client ? client.name : ''
    }
  }
}
</script>
