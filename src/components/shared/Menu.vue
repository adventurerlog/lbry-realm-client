<template>
  <div class="aligner">
    <router-link :to="'/'" class="logo">
      <img :src="logoSrc" alt="lbry realm">
    </router-link>
    <router-link :to="'/'">Home</router-link>
    <router-link :to="'/about'">About</router-link>
    <router-link :to="'/signup'">
      <button class="button-outline">SIGNUP</button>
    </router-link>
  </div>

</template>

<script>
export default {
  name: 'Menu',
  data: () => ({
    theme: 'light'
  }),
  computed: {
    logoSrc: function () {
      return `/img/logo-v-${this.$data.theme}.png`//this.
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.logo {
  width: 88px;
  margin-right: auto;
}

.aligner {
  display: flex;
  align-items: center;
  justify-content: right;

  a {
    margin-left: 15px;
    font-size: 2rem;
    font-weight: 400;
  }

  button {
    margin-left: 15px;
    font-size: 1rem;
    height: 3.3rem;
    line-height: 3.3rem;
    margin-top: 1px;
    position: relative;
    top: 4px;
    transition: all 0.2s;

    &:hover {
      top: 2px
    }
  }
}

</style>
