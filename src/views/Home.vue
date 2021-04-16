<template>
  <div class="home">

    <div class="above-the-fold" style="height: 100vh;">
      <div class="row">
        <div class="column">
          <h1 style="margin-top: 15rem;font-size: 7.5rem;font-weight: 100"><span
            style="font-weight: 300;color:var(--color-success)">Claim</span> <br/>your destiny !</h1>
          <h4 style="font-weight: 100">The realm is for lbry creators. <br/><br/>
            Connect with your audience, support other creators and get LBC from subscriptions.
          </h4>
          <button class="button">GET STARTED</button>
        </div>
        <div class="column">
          <div class="circle-maks"
               style="background-image: url('/img/moon-2134881_640.jpg');border-radius: 100%;width: 60vh;height: 60vh;border:1px solid;position: relative;top:5vh"></div>
        </div>
      </div>
      <div class="mouse center-block" style="position: relative;top:20vh"></div>
    </div>
    <CreatorSearch></CreatorSearch>
  </div>
</template>

<script>
import CreatorSearch from "@/components/shared/CreatorSearch";

export default {
  name: 'Home',
  components: {
    CreatorSearch
  }
}
</script>
<style scoped lang="scss">

$lighter-secondary-color: lighten(#606c76, 38%);

.mouse {
  position: relative;
  min-width: 50px;
  width: 50px;
  height: 80px;
  border-radius: 30px;

  border: 5px solid $lighter-secondary-color;

  &:after {
    content: '';
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: $lighter-secondary-color;
    animation: scroll 1s infinite alternate;
    @keyframes scroll {
      100% {
        transform: translate(-50%, 15px)
      }
    }
  }
}

</style>
