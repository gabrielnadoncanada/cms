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
  <div class="content">
    <div class="block block-rounded block-bordered">
      <div class="block-content">
        <form @submit.prevent="save">
          <h2 class="content-heading pt-0">Informations principales</h2>
          <div class="row push">
            <div class="col-lg-4">
              <p class="text-muted">
                Quelques informations essentielles sur votre nouveau client
              </p>
            </div>
            <div class="col-lg-8 col-xl-5">
              <div class="mb-4">
                <label class="form-label" for="name">
                  Nom <span class="text-danger">*</span>
                </label>
                <input v-model="client.name" required
                       type="text" class="form-control" id="name" name="dm-project-new-name"
                       placeholder="ex: James John">
              </div>
            </div>
          </div>
          <h2 class="content-heading pt-0">
            Informations facultatives</h2>
          <div class="row push">
            <div class="col-lg-4">
              <p class="text-muted">
                Vous pouvez ajouter plus de détails si vous le souhaitez, mais ce n'est pas obligatoire
              </p>
            </div>
            <div class="col-lg-8 col-xl-5">
              <div class="row mb-4">
                <div class="col-md-6">
                  <label class="form-label" for="email">Courriel</label>
                  <input type="email" class="form-control" id="email" v-model="client.email"
                         placeholder="ex: james@gmail.com">
                </div>
                <div class="col-md-6">
                  <label class="form-label" for="phone">Téléphone</label>
                  <input type="tel" class="form-control" id="phone" v-model="client.phone"
                         placeholder="ex: 450-280-3556">
                </div>
              </div>
              <div class="row mb-4">
                <div class="col-md-6">
                  <label class="form-label" for="street">Adresse</label>
                  <input type="text" class="form-control" id="street" v-model="client.street"
                         placeholder="ex: 611 rue de la Montagne">

                </div>
                <div class="col-md-6">
                  <label class="form-label" for="city">Ville</label>
                  <input type="text" class="form-control" id="city" v-model="client.city"
                         placeholder="ex: Montréal">
                </div>
              </div>
              <div class="row mb-4">
                <div class="col-md-6">
                  <label class="form-label" for="state">Pays</label>
                  <input type="text" class="form-control" id="state" v-model="client.state"
                         placeholder="ex: Canada"
                  >
                </div>
                <div class="col-md-6">
                  <label class="form-label" for="zip">Code postal</label>
                  <input type="text" class="form-control" id="zip" v-model="client.zip"
                         placeholder="ex: J7R 2E2"
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="row push">
            <div class="col-lg-8 col-xl-5 offset-lg-4">
              <div class="mb-4">
                <button type="submit" class="btn btn-alt-primary">
                  <i class="fa fa-check-circle me-1 opacity-50"></i> Créer le client
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'ClientForm',

  data() {
    return {
      title: 'Nouveau client',
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
      this.title = 'Modifier le client'
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
