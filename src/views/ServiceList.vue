<template>
  <div class="card">
    <div class="card-header  d-flex justify-content-between align-items-center">
      <h1 class="h4 mb-0">Services</h1>
      <button class="btn btn-primary" @click="addService">Add Service</button>
    </div>
    <div class="card-body">
      <table class="table border">
        <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Price</th>
          <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="service in services" :key="service.id">
          <td>{{ service.name }}</td>
          <td>{{ service.description }}</td>
          <td>{{ service.price }}</td>
          <td class="d-flex gap-2">
            <button class="btn btn-primary" @click="editService(service)">Edit</button>
            <button class="btn btn-danger" @click="deleteService(service)">Delete</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceList',
  data() {
    return {
      services: JSON.parse(localStorage.getItem('services')) || [],
    }
  },
  methods: {
    addService() {
      this.$router.push({name: 'ServiceAdd'})
    },
    editService(service) {
      this.$router.push({name: 'ServiceEdit', params: {id: service.id}})
    },
    deleteService(service) {
      const index = this.services.findIndex(s => s.id == service.id)
      if (index > -1) {
        this.services.splice(index, 1)
        localStorage.setItem('services', JSON.stringify(this.services))
      }
    }
  }
}
</script>
