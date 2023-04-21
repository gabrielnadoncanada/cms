<template>
  <div class="bg-body-light">
    <div class="content content-full">
      <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center">
        <h1 class="flex-grow-1 fs-3 fw-semibold my-2 my-sm-3">Factures</h1>
        <a class="btn btn-primary my-2" @click="addClientInvoice">
          <i class="fa fa-fw fa-plus opacity-50"></i>
          <span class="d-none d-sm-inline ms-1">Nouvelle facture</span>
        </a>
      </div>
    </div>
  </div>

  <div class="content">
    <!-- Dynamic Table Full -->
    <div class="block block-rounded">
      <div class="block-content block-content-full">
        <table class="table  table-vcenter js-dataTable-full">
          <thead>
          <tr class="bg-body-light">
            <th>Numéro de facture</th>
            <th class="d-none d-sm-table-cell" style="width: 30%;">Client</th>
            <th class="d-none d-sm-table-cell" style="width: 30%;">Date</th>
            <th class="d-none d-sm-table-cell" style="width: 15%;">Actions</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="clientInvoice in clientInvoices" :key="clientInvoice.id">
            <td class="fw-semibold">
              <router-link :to="{ name: 'ClientEdit', params: { id: clientInvoice.id} }">{{ clientInvoice.id }}</router-link>
            </td>
            <td class="d-none d-sm-table-cell">
              {{ getClientName(clientInvoice.clientId) }}
            </td>
            <td class="d-none d-sm-table-cell">
              {{ clientInvoice.date }}
            </td>

            <td>
              <div class="btn-group">
                <button @click="editClientInvoice(clientInvoice)" type="button"
                        class="btn btn-sm btn-alt-secondary js-bs-tooltip-enabled"
                        data-bs-toggle="tooltip" aria-label="Edit" data-bs-original-title="Edit">
                  <i class="fa fa-pencil-alt"></i>
                </button>
                <button @click="deleteClientInvoice(clientInvoice)" type="button"
                        class="btn btn-sm btn-alt-secondary js-bs-tooltip-enabled"
                        data-bs-toggle="tooltip" aria-label="Delete" data-bs-original-title="Delete">
                  <i class="fa fa-times"></i>
                </button>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
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
