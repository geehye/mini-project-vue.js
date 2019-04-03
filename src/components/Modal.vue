<template>
<div class="modal-class">
  <b-modal id="modal-prevent" ref="modal" title="필터" size="lg" @ok="handleOk" ok-only>
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
          text: '카테고리1',
          value: '1'
        },
        {
          text: '카테고리2',
          value: '2'
        },
        {
          text: '카테고리3',
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
      } else {
        this.handleSubmit()
      }
    },
    handleSubmit() {
      this.$emit("selectedCategory", this.selected)
      this.$nextTick(() => {
        this.$refs.modal.hide()
        this.selected = []
      })
    }
  }
}
</script>

<style>
#modal-prevent {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
.modal-backdrop.in {
  background-color: #000;
  opacity: 0.7;
}
</style>
