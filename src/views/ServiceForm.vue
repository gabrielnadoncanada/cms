<template>
  <div class="card">
    <div class="card-header">
      <h1 class="h4 mb-0">Edit service</h1>
    </div>
    <div class="card-body">
      <form @submit.prevent="save">
        <div class="mb-3">
          <label class="form-label" for="name">Name:</label>
          <input class="form-control" type="text" id="name" v-model="service.name" required>
        </div>
        <div class="mb-3">
          <label class="form-label" for="price">Price:</label>
          <input class="form-control" type="number" id="price" v-model="service.price" required>
        </div>
        <div class="mb-3">
          <label class="form-label" for="description">Description:</label>
          <textarea class="form-control" id="description" v-model="service.description"></textarea>
        </div>

        <button type="submit" class="btn btn-primary">Save</button>
      </form>
    </div>
  </div>

</template>

<script>
export default {
  name: 'ServiceForm',
  data() {
    return {
      service: {
        name: '',
        description: '',
        price: 0
      }
    }
  },
  created() {
    const id = this.$route.params.id
    if (id) {
      // Edit an existing service
      const services = JSON.parse(localStorage.getItem('services')) || []
      const service = services.find(s => s.id === id)
      if (service) {
        this.service = service
      } else {
        console.log(`Service with id ${id} not found in local storage`)
        // TODO: Display an error message to the user
      }
    }
  },
  methods: {
    save() {
      if (this.service.id) {
        // Update an existing service
        const services = JSON.parse(localStorage.getItem('services')) || []
        const index = services.findIndex(s => s.id === this.service.id)
        if (index > -1) {
          services.splice(index, 1, this.service)
          localStorage.setItem('services', JSON.stringify(services))
        }
      } else {
        // Save a new service
        const services = JSON.parse(localStorage.getItem('services')) || []
        const newService = {
          ...this.service,
          id: Date.now().toString()
        }
        services.push(newService)
        localStorage.setItem('services', JSON.stringify(services))
      }

      this.$router.push({name: 'ServiceList'})
    }
  }
}
</script>
