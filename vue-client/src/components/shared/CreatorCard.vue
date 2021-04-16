<template>
  <div class="creator-container">
    <div class="creator" :class="creatorClass">
      <div class="creator-preview">
        <div class="image-circle">
          <img :src="data.imageUrl">
        </div>
      </div>
      <div class="creator-info">
        <h6>{{data.name}}</h6>
        <p>{{data.description}}</p>
      </div>
      <router-link :to="'/channel/'+data.pageUrl">
        <button class="btn button button-clear">See More...</button>
      </router-link>
    </div>
  </div>

</template>

<script>
export default {
  name: 'CreatorCard',
  data:()=>({
    // creatorClass: this.index === 0?'no-top-margin' : 'yes-top-margin'
  }),
  props: {
    data: {
      name:String,
      imageUrl:String,
      description:String,
      pageUrl: String
    },
    index: Number
  },
  computed:{
    creatorClass: function (){
      return this.$props.index === 0?'no-top-margin' : 'yes-top-margin'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

$circle-dim: 70px;

.image-circle {
  width:$circle-dim ;
  height: $circle-dim;
  border-radius: 100%;
  overflow:hidden;
}
.creator-container {
  position: relative;
}
.creator {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  max-width: 100%;
  margin: 20px;
  overflow: hidden;
}

.creator h6 {
  opacity: 0.6;
  margin: 0;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.creator-preview {
  background-color: var(--color-primary);
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}


.creator-info {
  padding: 30px;
  position: relative;
  width: 100%;

}

.btn {
  position: absolute;
  bottom: 10px;
  right: 0;
  transform: translateX(-30%);
}
.no-top-margin {
  margin-top: 0;
}

</style>
