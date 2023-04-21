<template>
  <div class="bg-body-light">
    <div class="content content-full">
      <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center">
        <h1 class="flex-grow-1 fs-3 fw-semibold my-2 my-sm-3">{{ title }}</h1>
        <nav class="flex-shrink-0 my-2 my-sm-0 ms-sm-3" aria-label="breadcrumb">
          <ol class="breadcrumb">
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
                Quelques informations essentielles sur votre entreprise
              </p>
            </div>
            <div class="col-lg-8 col-xl-5">
              <div class=" mb-4">
                  <label class="form-label" for="name">Nom de la compagnie:</label>
                  <input class="form-control" type="text" id="name" v-model="enterprise.name" required>
              </div>
              <div class="row mb-4 justify-content-between">
                <div class="col-md-4">
                  <label class="form-label">Logo de l'entreprise</label>
                  <div class="push">
                    <div v-if="enterprise.enterpriseLogo">
                      <img class="enterpriseLogo" :src="enterprise.enterpriseLogo" alt="Enterprise Logo" />
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <label class="form-label" for="enterpriseLogo">Choisir un nouveau logo</label>
                  <input class="form-control" id="enterpriseLogo" type="file" @change="handleImageUpload" />
                </div>
              </div>
              <div class="row mb-4">
                <div class="col-md-6">
                  <label class="form-label" for="email">Courriel</label>
                  <input type="email" class="form-control" id="email" v-model="enterprise.email"
                         placeholder="ex: james@gmail.com">
                </div>
                <div class="col-md-6">
                  <label class="form-label" for="phone">Téléphone</label>
                  <input type="tel" class="form-control" id="phone" v-model="enterprise.phone"
                         placeholder="ex: 450-280-3556">
                </div>
              </div>
              <div class="row mb-4">
                <div class="col-md-6">
                  <label class="form-label" for="rbq_number">RBQ:</label>
                  <input class="form-control" type="text" id="rbq_number" v-model="enterprise.rbqNumber">
                </div>
                <div class="col-md-6">
                  <label class="form-label" for="enterprise_number">N° d'entreprise:</label>
                  <input class="form-control" type="text" id="enterprise_number" v-model="enterprise.enterpriseNumber">
                </div>
              </div>
              <div class="row mb-4">
                <div class="col-md-6">
                  <label class="form-label" for="tax_number1">TPS/TVH:</label>
                  <input class="form-control" type="text" id="tax_number1" v-model="enterprise.taxNumber1">
                </div>
                <div class="col-md-6">
                  <label class="form-label" for="tax_number2">TVQ:</label>
                  <input class="form-control" type="text" id="tax_number2" v-model="enterprise.taxNumber2">
                </div>
              </div>
              <div class="mb-4">
                <label class="form-label" for="notes">Notes:</label>
                <textarea class="form-control" type="text" id="notes" v-model="enterprise.notes"></textarea>
              </div>
            </div>
          </div>

          <h2 class="content-heading pt-0">Emplacement</h2>
          <div class="row push">
            <div class="col-lg-4">
              <p class="text-muted">
                Vous pouvez ajouter plus de détails si vous le souhaitez, mais ce n'est pas obligatoire
              </p>
            </div>
            <div class="col-lg-8 col-xl-5">
              <div class="row mb-4">
                <div class="col-md-6">
                  <label class="form-label" for="street">Adresse</label>
                  <input type="text" class="form-control" id="street" v-model="enterprise.street"
                         placeholder="ex: 611 rue de la Montagne">
                </div>
                <div class="col-md-6">
                  <label class="form-label" for="city">Ville</label>
                  <input type="text" class="form-control" id="city" v-model="enterprise.city"
                         placeholder="ex: Montréal">
                </div>
              </div>
              <div class="row mb-4">
                <div class="col-md-6">
                  <label class="form-label" for="state">Province</label>
                  <input type="text" class="form-control" id="state" v-model="enterprise.state"
                         placeholder="ex: Québec">
                </div>
                <div class="col-md-6">
                  <label class="form-label" for="zip">Code postal</label>
                  <input type="text" class="form-control" id="zip" v-model="enterprise.zipCode"
                         placeholder="ex: J7R 2E2">
                </div>
              </div>
              <div class="row mb-4">

                <div class="col-md-6">
                  <label class="form-label" for="country">Pays</label>
                  <input type="text" class="form-control" id="zip" v-model="enterprise.country"
                         placeholder="ex: Canada">
                </div>
              </div>
            </div>
          </div>
          <div class="row push">
            <div class="col-lg-8 col-xl-5 offset-lg-4">
              <div class="mb-4">
                <button type="submit" class="btn btn-alt-primary">
                  <i class="fa fa-check-circle me-1 opacity-50"></i> Modifier l'entreprise
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
  name: 'EnterpriseForm',
  data() {
    return {
      title: 'Paramètres de l\'entreprise',
      enterprise: {
        enterpriseLogo: '',
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
    handleImageUpload(event) {
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.onload = (e) => {
        this.enterprise.enterpriseLogo = e.target.result
      }
      reader.readAsDataURL(file)
    },
    save() {
      localStorage.setItem('enterprise', JSON.stringify(this.enterprise))
    }
  }
}
</script>

