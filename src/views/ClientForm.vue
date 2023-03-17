<template>
  <div class="card">
    <div class="card-header">
      <h1 class="h4 mb-0">Edit client</h1>
    </div>
    <div class="card-body">
      <form @submit.prevent="save">
        <div class="mb-3">
          <label class="form-label" for="name">Name:</label>
          <input type="text" class="form-control" id="name" v-model="client.name" required>
        </div>
        <div class="mb-3">
          <label class="form-label" for="email">Email:</label>
          <input type="email" class="form-control" id="email" v-model="client.email" required>
        </div>
        <div class="mb-3">
          <label class="form-label" for="phone">Phone:</label>
          <input type="tel" class="form-control" id="phone" v-model="client.phone" required>
        </div>
        <div class="mb-3">
          <label class="form-label" for="street">Street:</label>
          <input type="text" class="form-control" id="street" v-model="client.street" required>
        </div>
        <div class="mb-3">
          <label class="form-label" for="city">City:</label>
          <input type="text" class="form-control" id="city" v-model="client.city" required>
        </div>
        <div class="mb-3">
          <label class="form-label" for="state">State:</label>
          <input type="text" class="form-control" id="state" v-model="client.state" required>
        </div>
        <div class="mb-3">
          <label class="form-label" for="zip">Zip Code:</label>
          <input type="text" class="form-control" id="zip" v-model="client.zip" required>
        </div>
        <button type="submit" class="btn btn-primary">Add Client</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ClientForm',
  data() {
    return {
      client: {
        name: '',
        email: '',
        phone: '',
        street: '',
        city: '',
        state: '',
        zip: '',
      }
    }
  },
  created() {
    const id = this.$route.params.id
    if (id) {
      // Edit an existing client
      const clients = JSON.parse(localStorage.getItem('clients')) || []
      const client = clients.find(s => s.id === id)
      if (client) {
        this.client = client
      } else {
        console.log(`Client with id ${id} not found in local storage`)
        // TODO: Display an error message to the user
      }
    }
  },
  methods: {
    save() {
      if (this.client.id) {
        // Update an existing client
        const clients = JSON.parse(localStorage.getItem('clients')) || []
        const index = clients.findIndex(s => s.id === this.client.id)
        if (index > -1) {
          clients.splice(index, 1, this.client)
          localStorage.setItem('clients', JSON.stringify(clients))
        }
      } else {
        // Save a new client
        const clients = JSON.parse(localStorage.getItem('clients')) || []
        const newClient = {
          ...this.client,
          id: Date.now().toString()
        }
        clients.push(newClient)
        localStorage.setItem('clients', JSON.stringify(clients))
      }

      this.$router.push({name: 'ClientList'})
    }
  }
}
</script>
