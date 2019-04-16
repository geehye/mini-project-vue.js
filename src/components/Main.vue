<template>
<b-container class="">
  <div class="header">
    <h1>Welcome to Gee's Website</h1>
    <p>Share my footsteps for Harry Potter and Marvel film series</p>
  </div>
  <div class="topnav">
    <a href="#">Home</a>
    <a v-on:click="notReadyYet" href="#">HP</a>
    <a v-on:click="notReadyYet" href="#">MCU</a>
    <a v-on:click="notReadyYet" href="#" style="float:right">TEST</a>

    <b-modal ref="notReadyYetModal">It is not ready yet.</b-modal>
  </div>
  <div class="row">
    <div class="col-sm-4">
      <div class="card">
        <h3>Who am I</h3>
        <img src="" />
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
export default {
  name: 'Main',
  data: function () {
    return {
    }
  },
  methods: {
    notReadyYet: function (evt) {
      this.$refs['notReadyYetModal'].show()
    }
  }
}
</script>

<style>
.header {
  padding: 30px;
  text-align: center;
}

/* Style the top navigation bar */
.topnav {
  overflow: hidden;
  background-color: #333;
}
/* Style the topnav links */
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none; /* delete link-underline */
}
/* Change color on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a card effect for articles */
.card {
  background-color: white;
  padding: 20px;
  margin-top: 20px;
}

p.post {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
