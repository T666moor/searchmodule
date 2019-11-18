<template>
  <ais-instant-search :search-client="searchClient" index-name="games">
    <b-container>
      <b-row class="text-center" align-h="center">
        <b-col cols="12" md="9" lg="6"><ais-search-box /></b-col>
      </b-row>

      <ais-hits>
        <b-row slot-scope="{ items }" class="text-center" align-h="center">
          <b-col v-for="item in items" :key="item.objectID" cols="12" sm="6" md="6" lg="4" xl="3">
            <div class="hit">
              <img :src="item.image" :alt="item.name" />
              <h5><ais-highlight attribute="title" :hit="item"/></h5>
              <ais-highlight attribute="developer" :hit="item"/>
              <h5><ais-highlight attribute="date" :hit="item"/></h5>
              <b-row class="text-center ">
                <b-col cols="6">{{ item.genre }}</b-col>
                <b-col cols="6">{{ item.storage }}</b-col>
                <b-col cols="6" tag="h4">{{ item.rating }}</b-col>
                <b-col cols="6" tag="h4">{{ item.price }}</b-col>
              </b-row>
              <button>DOWNLOAD</button>
            </div>
          </b-col>
        </b-row>
      </ais-hits>
    </b-container>
  </ais-instant-search>
</template>

<script>
import algoliasearch from 'algoliasearch/lite'

export default {
  data() {
    return {
      searchClient: algoliasearch(
        '8NFZ6SQ85S',
        '5408aecf4ad888d58430845af001d6d0'
      ),
    };
  },
};
</script>

<style>
.ais-Highlight-highlighted {
  background: #003;
  color: #fff;
  border-radius: 3px;
}

.ais-SearchBox-submit {
  display: none;
}

.ais-SearchBox-reset {
  display: none;
}

.ais-SearchBox-form {
  margin-top: 20px;
  margin-bottom: 50px;
}

.ais-SearchBox-input {
  width: 100%;
  padding: 5px 15px;
  background: #003;
  border: 2px solid #fff;
  border-radius: 15px;
  font-size: 20px;
  color: #fff;
  outline: none;
}

.ais-Hits {
  margin: 50px 0;
}

@media only screen and (max-width: 576px) {
  .ais-SearchBox-form {
  margin-top: 0;
  margin-bottom: 25px;
}
}
</style>

<style scoped>
.hit {
  background: #fff;
  color: #003;
  margin: 20px 0;
  padding-bottom: 20px;
  border: 2px solid #fff;
  border-radius: 15px;
  box-shadow: 0px 0px 0px 0px rgba(255,255,255,0.9);
}

img {
  width: 100%;
  border-radius: 14px;
  margin-bottom: 10px;
}

button {
  background: #00f;
  color: #fff;
  border: 0px;
  border-radius: 15px;
  padding: 15px 25px;
  margin: 10px;
  box-shadow: 0px 0px 30px 0px rgba(0,0,255,0.9);
  font-size: 18px;
  outline: none;
}
</style>