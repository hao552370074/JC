<template>
  <div>
    <div class="centent">
      <!-- 1 -->
      <div class="container animate__animated animate__bounceInLeft">
        <div class="Scientific1">
          <p class="ScientificIconTopBj">
            <span>科研项目级别占比</span>
            <img src="../assets/image/u1315.png" alt />
          </p>
          <div class="ScientificIcon TopLeft"></div>
          <div class="ScientificIcon TopRight"></div>
          <div class="ScientificIcon BottomLeft"></div>
          <div class="ScientificIcon BottomRight"></div>
        </div>
      </div>
      <!-- 2 -->
      <div class="container animate__animated animate__bounceInLeft"></div>
      <!-- 3 -->
      <div class="container container3 animate__animated animate__backInUp" style="width:850px"></div>
      <!-- 4 -->
      <div class="container animate__animated animate__bounceInRight"></div>
      <!-- 5 -->
      <div class="container animate__animated animate__bounceInRight"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Scientific",
  components: {},
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {},
  filter: {},
  computed: {},
  watch: {}
};
</script>

<style lang="scss" scoped>
.Scientific1 {
  margin-top: 20px;
  height: 50%;
  width: 100%;
  background-image: url("../assets/image/u1313.png");
  background-position: center;
  background-size: 97% 96%;
  background-repeat: no-repeat;
  //   background-color: red;
  position: relative;
}
.ScientificIcon {
  position: absolute;
  width: 25px;
  height: 25px;
  border: 8px solid #ccc;
  border-image: url(../assets/image/u1259.png) 10 stretch;
}
.ScientificIconTopBj {
    span{
        position: absolute;
        top: 10px;
        height: 40px;
        width: 200px;
        margin-left: -100px;
        left: 50%;
    }
  text-align: center;
  position: relative;
  top: -10px;
  img {
    width: 33%;
  }
  &::before {
    content: "";
    position: absolute;
    width: 47%;
    height: 60px;
    margin-left: -48px;
    background-image: url("../assets/image/u1314.png");
    background-repeat: no-repeat;
    background-size: 100%;
  }
}
.TopLeft {
  position: absolute;
  left: 0;
  top: 0;
}
.BottomLeft {
  position: absolute;
  bottom: 0;
  border-image: url(../assets/image/u1261.png) 12 stretch;
}
.BottomRight {
  position: absolute;
  bottom: 0;
  right: 0;
  border-image: url(../assets/image/u1262.png) 12 stretch;
}
.TopRight {
  position: absolute;
  border-image: url(../assets/image/u1260.png) 11 stretch;
  top: 0;
  right: 0;
}
</style>
