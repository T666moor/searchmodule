<template>
  <div id="app">
    <b-container>
      <b-row class="text-center" align-h="center">
        <b-col><h1>SEARCH<i class="fab fa-searchengin"></i>MODULE</h1></b-col>
      </b-row>
    </b-container>
    <Algolia/>
    <Footer/>
  </div>
</template>

<script>
import Algolia from './components/algolia.vue'
import Footer from './components/footer.vue'

export default {
  name: 'app',
  components: {
    Algolia,
    Footer
  }
}
</script>

<style>
* {
  padding: 0;
  font-family: arial;
  list-style: none;
}

body {
  background-image: linear-gradient(to bottom, rgba(0,0,200,1), rgba(0,0,255,0.75));
  background-attachment: fixed;
}

</style>

<style scoped>
h1 {
  color: #fff;
  margin: 50px 0;
}

@media only screen and (max-width: 480px) {
  h1 {
    font-size: 30px;
    margin: 25px 0;
  }
}
</style>
