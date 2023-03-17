<template>
  <div class="card">
    <div class="card-header d-flex justify-content-between align-items-center">
      <h1 class="h4 mb-0">Clients</h1>
      <button @click="addClient" class="btn btn-primary">
        Add Client
      </button>
    </div>
    <div class="card-body">
      <table class="table border">
        <thead>
        <tr>
          <th scope="col">Client</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="client in clients" :key="client.id">
          <td>{{ client.name }}</td>
          <td>{{ client.email }}</td>
          <td>{{ client.phone }}</td>
          <td class="d-flex gap-2">
            <button class="btn btn-primary" @click="editClient(client)">Edit</button>
            <button class="btn btn-danger" @click="deleteClient(client)">Delete</button>
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
