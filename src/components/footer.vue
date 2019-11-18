<template>
  <b-container>
    <div class="footer">
      <b-row class="text-center" align-h="between">
        <b-col class="content" cols="12" md="12" lg="5">
          <h4>CONTACT</h4>
          <p class="contact"><i class="far fa-envelope"></i>metald847@gmail.com</p>
          <p class="contact"><i class="fab fa-vk"></i>vk.com/id337997317</p>
          <p class="contact"><i class="fab fa-linkedin-in"></i>linkedin.com/in/timur-ismailov-641563194</p>
          <p class="contact"><i class="fas fa-mobile-alt"></i>+998(91)466-86-41</p>
        </b-col>
        <b-col class="content" cols="12" md="12" lg="4">
          <h4>TECHNOLOGY</h4>
          <p class="contact"><i class="fab fa-vuejs"></i>Vue.js, Vue CLI</p>
          <p class="contact"><i class="fab fa-algolia"></i>Algolia</p>
          <p class="contact"><i class="fab fa-bootstrap"></i>Bootstrap-vue</p>
        </b-col>
      </b-row>

      <b-row class="text-center" align-h="center">
        <b-col class="rights" cols="12" md="1" lg="1">2019</b-col>
        <b-col class="rights" cols="12" md="6" lg="4">DESIGNED AND DEVELOPED BY TIMUR</b-col>
        <b-col class="rights" cols="12" md="12" lg="3">ALL RIGHTS NOT RESERVED</b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  data() {}
};
</script>

<style scoped>
.footer {
  background: rgba(0,0,0,0.8);
  color: #fff;
  border-radius: 25px 25px 0 0;
  padding: 50px 75px 10px;
}

h4 {
  margin-bottom: 50px;
}

.content {
  margin-bottom: 50px;
}

.contact {
  display: flex;
  justify-content: space-between;
}
.contact i {
  font-size: 25px;
}

.rights {
  margin: 5px 0;
  color: #fff;
  font-size: 12px;
}

@media only screen and (max-width: 480px) {
  .footer {
    border-radius: 15px 15px 0 0;
    padding: 50px 35px 5px;
  }

  h4 {
  margin-bottom: 25px;
}
}
</style>