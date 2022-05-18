<template>
  <div class="app__inner">
    <div class="app__nav">
      <LNB />
    </div>
    <div class="app__page">
      <div class="page__header"></div>
      <div class="page__container"><RouterView /></div>
    </div>
  </div>
</template>

<script>
import LNB from "~/components/LNB";
export default {
  components: {
    LNB,
  },
};
</script>


<style lang="scss" scoped>
* {
  border: 1px solid;
  box-sizing: border-box;
}
.app__inner {
  display: flex;
  height: 100vh;
  color: $color-font;
  font-size: 14px;
  line-height: 1.4;
  font-family: "Noto Sans KR", sans-serif;
  font-family: "Ubuntu", sans-serif;

  .app__page {
    flex-grow: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    .page__header {
      height: 80px;
    }
    .page__container {
      flex-grow: 1;
      overflow-y: auto;
    }
  }
}
</style>