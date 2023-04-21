<template>
    <span class="editable">
        <span ref="editable"
              class="editableItem"
              :contenteditable="!disabled"
              v-on="listeners"
        ></span>
        <span v-if="!tmpVal" @click="focus"
              class="editableItem">{{ placeholder }}</span>
        <span v-if="suffix">{{ suffix }}</span>
    </span>

  <div v-if="searchResults.length" class="search-results">
    <ul>
      <li v-for="(result, index) in searchResults" :key="index">
        {{ result.name }}
      </li>
    </ul>
  </div>
</template>

<script>


export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Enter item',
    },
    disabled: {
      default: false,
    },
    suffix: {},
    errors: {},
    field: {},
  },
  data() {
    return {
      searchResults: [],
      showModal: false,
      searchInput: "",
      focusInVal: null,
      tmpVal: null,
    };
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.onInput,
        focusin: this.onFocusIn,
        focusout: this.onFocusOut,
        isFocused: false,
      };
    },
  },
  watch: {
    value() {
      this.$refs.editable.innerText = this.value;
      this.tmpVal = this.value;
    },
  },
  mounted() {
    this.$refs.editable.innerText = this.value;
    this.tmpVal = this.value;
  },
  methods: {
    onInput(e) {
      this.tmpVal = e.target.innerText;
      this.search(this.tmpVal);
      this.$emit('input', this.tmpVal);
    },

    onFocusIn() {
      this.isFocused = true;
      this.focusInVal = this.$refs.editable.innerText;
    },
    onFocusOut() {
      this.isFocused = false;
      if (this.focusInVal !== this.$refs.editable.innerText) {
        this.$emit('change', this.$refs.editable.innerText);
      }
    },
    focus() {
      this.$refs.editable.focus();
    },
    search(query) {
      const products = JSON.parse(localStorage.getItem('products')) || [];
      const services = JSON.parse(localStorage.getItem('services')) || [];

      const productsAndServices = [
        ...products,
        ...(services.length > 0 && (!products.length || products !== services) ? services : []),
      ];

      if (query) {
        this.searchResults = productsAndServices.filter((item) =>
            item.name.toLowerCase().includes(query.toLowerCase())
        );
      } else {
        this.searchResults = [];
      }
    },
  },
};
</script>
