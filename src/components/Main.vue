<template>
<b-container class="">
  <div class="header">
    <h1>Welcome to Gee's test Website</h1>
    <p>I am learning Vue and practicing it here!</p>
  </div>
  <div class="topnav">
    <a href="#" style="float: left;">Home</a>
    <b-dropdown id="orderDropdown" text="Order" bg-transparent style="float: right;">
      <b-dropdown-item>Ascending</b-dropdown-item>
      <b-dropdown-item>Descending</b-dropdown-item>
    </b-dropdown>
    <a href="#" v-b-modal.filterModal style="float: right;">Filter</a>

    <ModalVue @selectedCategory="updateCategory"></ModalVue>
  </div>
  <div class="row">
    <div class="col-sm-4">
      <div class="card">
        <h3 style="text-align: center;">About me</h3>
        <center><img src="../assets/profil_image.jpg" style="max-width: 150px; max-height: 150px;"/></center>
        <h5>Jihye Catherine Kang</h5>
        <p>I am an web front-end developer</p>
      </div>
    </div>
    <div class="col-sm-8">
      <div class="card">
        <h2>Recent Post</h2>
        <h5>My first Harry Potter trip in Ireland</h5>
        <h6>Jun 17, 2018</h6>
        <p>Some text.................................</p>
      </div>
      <div class="card">
        <h2>Popular Post</h2>
        <h5>The first day of Harry Potter trip in Scotland</h5>
        <h6>Oct 24, 2018</h6>
        <p class="post">It's hard to believe that June 2017 was the 20th anniversary of JK Rowling publishing her debut novel, Harry Potter and the Philosopher's Stone.
           In 1997, no one could have predicted the wildly successful book sales and box office smashing blockbusters that would follow.
           Here in Scotland, you can see where the Edinburgh-dweller found her inspiration, and where the magic all began.</p>
      </div>
    </div>
  </div>
  <div class="footer">
  </div>
</b-container>
</template>

<script>
import ModalVue from './Modal'

export default {
  name: 'Main',
  components: {
    ModalVue
  },
  data: function () {
    return {
    }
  },
  methods: {
    updateCategory(variable) {
      this.childData = variable
      this.httpRequest()
    },
    httpRequest() {
      this.$http.get(`http://comento.cafe24.com/category.php`).then(result => {
        this.categories = result.data.list
      })
    }
  }
}
</script>
