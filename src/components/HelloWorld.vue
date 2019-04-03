<template>
<b-container class="hello">
  <b-button v-b-modal.modal-prevent class="btn btn-modal">필터</b-button>
  <!-- Main UI -->
  <div>
    <div>
      <ModalVue @selectedCategory="updateCategory"></ModalVue>
    </div>
    <div class="row justify-content-end">
      <b-button type="button" class="btn btn-default" value="asc" id="asc_btn" v-on:click="orderFunc">오름차순</b-button>
      <b-button type="button" class="btn btn-default" value="desc" id="desc_btn" v-on:click="orderFunc">내림차순</b-button>
    </div>
  </div>
  <div class="row card-columns d-flex justify-content-center">
    <div v-for="category in categories" v-if="category.no == childData">
      <div v-for="(post, idx) in posts">
        <!-- Posts -->
        <b-card no-body>
          <b-card-header style="background-color: white;">
            <b-row>
              <b-col style="color: rgb(76, 194, 95);"><h4> {{ category.name }} </h4></b-col>
              <b-col class="text-right"> no. {{ post.no }} </b-col>
            </b-row>
          </b-card-header>
          <b-card-text> 이메일: {{ post.email }} | 작성일: {{ post.updated_at }} </b-card-text>
          <b-card-title> {{ post.title }} </b-card-title>
          <b-card-text> {{ post.contents }} </b-card-text>
        </b-card>
        <!-- add Ads -->
        <div class="card" v-if="(idx+1)%3 == 0 && idx/3-1 <= ads_length">
          <div class="row no-gutters">
            <h4 class="card-subtitle" style="color: rgb(43, 179, 85);"> Sponsored </h4>
          </div>
          <div class="row" style="padding: 5px;"> <!-- failed to get item from list by ads[idx/3 -1] -->
            <div class="col-auto">
              <img class="card-img-left" v-bind:src="'http://comento.cafe24.com/public/images/' + ads[0].img">
            </div>
            <div class="col">
              <div class="card-block">
                <h4 class="card-title"> {{ ads[0].title }} </h4>
                <p class="card-text"> {{ ads[0].contents }} </p>
              </div>
            </div>
          </div>
        </div> <!-- end Ads -->
      </div>
    </div>
  </div>
</b-container>
</template>

<script>
import ModalVue from './Modal'

export default {
  name: 'HelloWorld',
  components: {
    ModalVue
  },
  data() {
    return {
      posts: [],
      categories: [],
      ads: [],
      childData: [],
      ads_length: '',
      order: ''
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
      this.$http.get(`http://comento.cafe24.com/request.php`, {
        params: {
          page: 1,
          ord: this.order,
          category: this.childData // error when more than two categories are chosen
        }
      }).then(result => {
        this.posts = result.data.list
        this.order = ''
      })
      this.$http.get(`http://comento.cafe24.com/ads.php`, {
        params: {
          page: 1,
          limit: 2
        }
      }).then(result => {
        this.ads = result.data.list
        this.ads_length = result.data.list.length
      })
    },
    orderFunc(evt) { // impossible more than twice
      this.order = evt.value
      this.httpRequest()
    }
  }
}
</script>

<style>
.btn-modal {
  background: white;
  color: rgb(43, 179, 85);
  border-color: rgb(43, 179, 85);
  border-radius: 0;
}

.btn-default {
  background: white;
  color: black;
  border: none;
}

.btn-default:focus,
.btn-default:hover,
.btn-default:after {
  background: white;
  color: rgb(43, 179, 85);
  border: none;
  box-shadow: none;
}

.card {
  max-width: 1200px;
  min-width: 480px;
  padding: 20px;
  bottom-margin: 10px;
  /* text-overflow: ellipsis;
     white-space: nowrap;
     overflow: hidden;         these did not work */
}
</style>
