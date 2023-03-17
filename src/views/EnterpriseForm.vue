<template>
  <div class="card">
    <div class="card-header">
      <h1 class="h4 mb-0"> Edit enterprise</h1>
    </div>
    <div class="card-body">
      <form @submit.prevent="save">
        <div class="mb-3">
          <label class="form-label" for="name">Nom de la compagnie:</label>
          <input class="form-control" type="text" id="name" v-model="enterprise.name" required>
        </div>
        <div class="mb-3">
          <label class="form-label" for="street">Rue:</label>
          <input class="form-control" type="text" id="street" v-model="enterprise.street">
        </div>
        <div class="mb-3">
          <label class="form-label" for="city">Ville:</label>
          <input class="form-control" type="text" id="city" v-model="enterprise.city">
        </div>
        <div class="mb-3">
          <label class="form-label" for="state">Province:</label>
          <input class="form-control" type="text" id="state" v-model="enterprise.state">
        </div>
        <div class="mb-3">
          <label class="form-label" for="zip_code">Code postal:</label>
          <input class="form-control" type="text" id="zip_code" v-model="enterprise.zipCode">
        </div>
        <div class="mb-3">
          <label class="form-label" for="country">Pays:</label>
          <input class="form-control" type="text" id="country" v-model="enterprise.country">
        </div>
        <div class="mb-3">
          <label class="form-label" for="phone">Phone:</label>
          <input class="form-control" type="tel" id="phone" v-model="enterprise.phone">
        </div>
        <div class="mb-3">
          <label class="form-label" for="email">Email:</label>
          <input class="form-control" type="email" id="email" v-model="enterprise.email">
        </div>
        <div class="mb-3">
          <label class="form-label" for="rbq_number">RBQ:</label>
          <input class="form-control" type="text" id="rbq_number" v-model="enterprise.rbqNumber">
        </div>
        <div class="mb-3">
          <label class="form-label" for="enterprise_number">N° d'entreprise:</label>
          <input class="form-control" type="text" id="enterprise_number" v-model="enterprise.enterpriseNumber">
        </div>
        <div class="mb-3">
          <label class="form-label" for="tax_number1">TPS/TVH:</label>
          <input class="form-control" type="text" id="tax_number1" v-model="enterprise.taxNumber1">
        </div>
        <div class="mb-3">
          <label class="form-label" for="tax_number2">TVQ:</label>
          <input class="form-control" type="text" id="tax_number2" v-model="enterprise.taxNumber2">
        </div>
        <div class="mb-3">
          <label class="form-label" for="notes">Notes:</label>
          <textarea class="form-control" type="text" id="notes" v-model="enterprise.notes"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Edit Enterprise</button>
      </form>
    </div>
  </div>

</template>

<script>
export default {
  name: 'EnterpriseForm',
  data() {
    return {
      enterprise: {
        name: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        phone: '',
        email: '',
        rbqNumber: '',
        enterpriseNumber: '',
        taxNumber1: '',
        taxNumber2: '',
        notes: ''
      }
    }
  },
  created() {
    const enterprise = JSON.parse(localStorage.getItem('enterprise')) || {}
    if (enterprise) {
      this.enterprise = enterprise
    } else {
      console.log(`enterprise not found in local storage`)
      // TODO: Display an error message to the user
    }
  },
  methods: {
    save() {
      localStorage.setItem('enterprise', JSON.stringify(this.enterprise))
    }
  }
}
</script>

