<template>
  <div class="bg-body-light">
    <div class="content content-full">
      <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center">
        <h1 class="flex-grow-1 fs-3 fw-semibold my-2 my-sm-3">Clients</h1>
        <a class="btn btn-primary my-2" @click="addClient">
          <i class="fa fa-fw fa-plus opacity-50"></i>
          <span class="d-none d-sm-inline ms-1">Nouveau client</span>
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
            <th>Nom</th>
            <th class="d-none d-sm-table-cell" style="width: 30%;">Courriel</th>
            <th class="d-none d-sm-table-cell" style="width: 30%;">Téléphone</th>
            <th class="d-none d-sm-table-cell" style="width: 15%;">Actions</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="client in clients" :key="client.id">
            <td class="fw-semibold">
              <router-link :to="{ name: 'ClientEdit', params: { id: client.id} }">{{ client.name }}</router-link>
            </td>
            <td class="d-none d-sm-table-cell">
              {{ client.email }}
            </td>
            <td class="d-none d-sm-table-cell">
              {{ client.phone }}
            </td>

            <td>
              <div class="btn-group">
                <button @click="editClient(client)" type="button"
                        class="btn btn-sm btn-alt-secondary js-bs-tooltip-enabled"
                        data-bs-toggle="tooltip" aria-label="Edit" data-bs-original-title="Edit">
                  <i class="fa fa-pencil-alt"></i>
                </button>
                <button @click="deleteClient(client)" type="button"
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
  name: 'ProductList',
  data() {
    return {
      clients: JSON.parse(localStorage.getItem('clients')) || [],
    }
  },
  methods: {
    addClient() {
      this.$router.push({name: 'ClientAdd'})
    },
    editClient(client) {
      this.$router.push({name: 'ClientEdit', params: {id: client.id}})
    },
    deleteClient(client) {
      const index = this.clients.findIndex(p => p.id == client.id)
      if (index > -1) {
        this.clients.splice(index, 1)
        localStorage.setItem('clients', JSON.stringify(this.clients))
      }
    }
  }
}
</script>
