<template>
  <div id="app">
    <div class="container" style="min-height: 90vh">
      <Menu style="margin-top: 2rem;" />
      <router-view/>
    </div>
    <Footer />

  </div>
</template>

<script>
// TODO: add loader here or in the index for before the app loads
import Footer from "@/components/shared/Footer";
import Menu from "@/components/shared/Menu";

export default {
  components: {Menu, Footer}
}
</script>

<style lang="scss">
:root {
  /* Milligram variable overwrites*/
  --color-initial: #FBFAFB;
  --color-primary: #317ec5;
  --color-secondary: #606c76;
  --color-tertiary: #f4f5f6;
  --color-quaternary: #d1d1d1;
  --color-quinary: #e1e1e1;

  /* Milligram variable extension*/
  --color-hover: #433D77;
  --border-radius: 28px;

  /* Action Color*/
  --color-info: #1e2052;
  --color-success: #44a073;
  --color-warning: #c1903b;
  --color-danger: #f44336;
}

.loader {
  font-size: 5rem;
  display: inline-block;
  font-weight: bold;
  color: var(--color-primary);
  letter-spacing: 2px;
  position: relative;
}

.loader::after {
  content: 'Loading';
  position: absolute;
  left: 0;
  top: 0;
  color: var(--color-hover);
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  animation: animloader 10s ease-in infinite;
}

@keyframes animloader {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}

.load-container {
  min-width: 100%;
  width: 33.33%;
  height: 200px;
  padding: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ccc;
  cursor: pointer;
  transition: 0.3s linear;
}
</style>
