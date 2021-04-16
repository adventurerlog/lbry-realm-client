<template>
  <div class="">
    <div class="spacer"></div>
    <h2 style="text-align: center">You can also search for your favorite creators</h2>
    <div class="row" style="min-height: 50vh;">

      <div class="column">
        <input placeholder="Search for a lbry or odysee.com channel"
               type="search" v-model="searchTerm"
        v-on:change="lookupCreators($event)"
        >
        <!--        (change)="lookupCreators($event)"
                       (keyup)="keyUp()"-->
      </div>
      <div class="column">
        <template v-if="searchResults.length">
          <template v-for="(result, i) in searchResults" >
            <CreatorCard v-bind:key="result.id" v-bind:data="result" v-bind:index="i"></CreatorCard>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import CreatorCard from "@/components/shared/CreatorCard";

export default {
  name: 'CreatorSearch',
  components: {CreatorCard},
  data: () => ({
    year: new Date().getFullYear(),
    searchResults:[],
    searchTerm:''
  }),
  methods: {
    getRandomInt: function (min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    lookupCreators: function (event) {
      console.log('lookup creators: ', this.searchTerm);
      const exampleRes = ()=>({
        id:this.getRandomInt(0,12098309128309128309128),
        name: 'Mr. Meeseks',
        description: 'I\'m mr meeseks look at me!',
        imageUrl: 'https://thumbnails.lbry.com/UCwow4CXdvIfGj126J10LN3w',
        pageUrl: '@mr-meesek'
      })
      if (!event) {
        this.searchResults.push(exampleRes());
        this.searchResults.push(exampleRes());
        this.searchResults.push(exampleRes());
        this.searchResults.push(exampleRes());
      }
      if (this.searchTerm) {
        this.searchResults = [];
        let num = this.getRandomInt(1, 5);
        for (let i = 0; i < num; i++) {
          this.searchResults.push(exampleRes());
        }
        setTimeout(() => {
          // this.onSearch.emit(true);
        }, 200);
      } else {
        // this.onSearch.emit(false);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
