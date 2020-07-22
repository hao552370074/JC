<template>
  <div class="caselist">
    <h1 class="animate__animated animate__bounceInLeft">An animated element</h1>
  </div>
</template>
 
<script type="text/ecmascript-6">
import { WOW } from "wowjs";
export default {
  data() {
    return {
      cases: [1, 2, 3]
    };
  },
  watch: {},
  mounted() {
    // 在项目加载完成之后初始化wow
    // this.$nextTick(() => {
    //   let wow = new WOW().init();
    //   wow.init();
    // });
  },
  watch: {
    $route(to, from) {
      this.$nextTick(() => {
        new WOW({
          mobile: true,
          live: true,
          scrollContainer: ".layout-content"
        }).init();
      });
    }
  }
};
</script>