<template>
<div class="modal-class">
  <b-modal id="filterModal" ref="modal" title="Filter" size="lg" @ok="handleOk" ok-only ok-title="Save">
    <b-form-group @submit.stop.prevent="handleSubmit">
      <b-form-checkbox-group v-model="selected" :options="options" name="modal_chk_box">
      </b-form-checkbox-group>
    </b-form-group>
  </b-modal>
</div>
</template>

// eslint-disable-next-line
<script>
export default {
  name: 'ModalVue',
  data() {
    return {
      selected: [],
      options: [{
          text: 'Category 1',
          value: '1'
        },
        {
          text: 'Category 2',
          value: '2'
        },
        {
          text: 'Category 3',
          value: '3'
        }
      ]
    }
  },
  methods: {
    handleOk(evt) {
      // Prevent modal from closing
      evt.preventDefault()
      if (!this.selected) {
        alert('Please select a category')
      }
      else {
        this.handleSubmit()
      }
    },
    handleSubmit() {
      this.$emit("selectedCategory", this.selected)
      this.$nextTick(() => {
        // Wrapped in $nextTick to ensure DOM is rendered before closing
        this.$refs.modal.hide()
        this.selected = []
      })
    }
  }
}
</script>

<style>
#filterModal {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
