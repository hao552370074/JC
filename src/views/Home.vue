<template>
  <div class="home">
    <!-- 头部 -->
    <div class="header">
      <div style="float:left;width:40%">
        <!-- <span class="headerDate">14:32 星期二 12/13/2018</span> -->
        <span class="headerDate">{{DateTime}} {{getDay}}</span>
        <span style="margin-left:52%">
          <a
            v-for="(item,index) in menu"
            @click="MenuClick(index,$event)"
            :id="index==Indexs||name==item?'headerHaver':''"
            :key="index"
            href="javascript:void(0)"
          >{{item}}</a>
        </span>
      </div>
      <div style="float:right;width:40%">
        <span style="margin-left:10%">
          <a
            v-for="(item,index) in menu2"
            @click="MenuClick2(index,$event)"
            :id="index==Indexs2||name==item?'headerHaver':''"
            :key="index"
            href="javascript:void(0)"
          >{{item}}</a>
        </span>
        <span style="float:right" class="headerDate">
          <span style="font-weight:700">上海 {{Tqs.high}} {{Tqs.type}} {{Tqs.fengxiang}}</span>
          <!-- <span style="font-weight:700">PM2.5</span> -->
        </span>
      </div>
    </div>
    <!-- 内容 -->
    <home1 v-if="name=='迎评建本'"></home1>
  </div>
</template>

<script>
import home1 from "@/components/Home1";
export default {
  name: "home",
  components: {
    home1
  },
  data() {
    return {
      // 菜单1
      menu: ["迎评建本", "智慧教学"],
      // 菜单2
      menu2: ["智慧教务", "智慧学管"],
      // 单击判断1
      Indexs: null,
      // 单击判断2
      Indexs2: null,
      // 日期
      DateTime: new Date().toLocaleString(),
      Tqs: "1",
      dataStore: this.store.state.path,
      name: "迎评建本"
    };
  },
  computed: {
    // 星期
    getDay() {
      let day = new Date().getDay();
      let UpdateDay = "";
      switch (day) {
        case 1:
          UpdateDay = "星期一";
          break;
        case 2:
          UpdateDay = "星期二";
          break;
        case 3:
          UpdateDay = "星期三";
          break;
        case 4:
          UpdateDay = "星期四";
          break;
        case 5:
          UpdateDay = "星期五";
          break;
        case 6:
          UpdateDay = "星期六";
          break;
        default:
          UpdateDay = "星期日";
          break;
      }
      return UpdateDay;
    }
  },
  methods: {
    // 菜单点击Left
    MenuClick(i, e) {
      this.Indexs = i;
      this.Indexs2 = null;
      this.name = e.target.innerHTML;
    },
    // 菜单点击Right
    MenuClick2(i,e) {
      this.Indexs2 = i;
      this.Indexs = null;
      this.name = e.target.innerHTML;
    }
  },
  mounted() {
    setInterval(() => {
      this.DateTime = new Date().toLocaleString();
    }, 1000);
    this.axios
      .get("http://wthrcdn.etouch.cn/weather_mini?city=上海")
      .then(response => {
        this.Tqs = response.data.data.forecast[0];
      });
  },
  created() {
    console.log(this.store.state.path);
  }
};
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  background-image: url("../assets//image/bj.png");
  background-size: 100%;
  overflow: hidden;
  .header {
    height: 9vh;
    margin-top: 1.8vh;
    padding: 0 5vh;
    .headerDate {
      cursor: pointer;
      font-size: 20px;
      color: #ffffff;
    }
    a {
      padding: 8px 10px;
      height: 40px;
      background: rgb(10, 32, 104);
      border: 1px solid rgb(0, 119, 255);
      border-radius: 10px;
      color: #ffffff;
      font-size: 20px;
      margin: 0 40px;
    }
  }
}
.centent {
  display: flex;
  justify-content: space-evenly;
  .container {
    margin: 0 20px;
    width: 768px;
    height: 110vh;
    // background-color: rgba(255, 0, 0, 0.096);
    .Children {
      display: flex;
      align-items: center;
      i {
        display: inline-block;
        width: 8px;
        margin: 0 3px;
        height: 20px;
        transform: skew(-35deg, 0);
        background-color: rgb(0, 195, 255);
        &:nth-child(2) {
          opacity: 0.5;
        }
        &:nth-child(3) {
          opacity: 0.2;
        }
      }
      span {
        color: rgb(0, 195, 255);
        font-weight: 700;
      }
    }
    .Children2 {
      display: flex;
      justify-content: space-evenly;
      .ptext {
        color: rgb(0, 183, 255);
      }
      div {
        background: linear-gradient(
          left,
          rgba(255, 0, 0, 0) 20%,
          rgba(32, 147, 255, 0.493) 50%,
          rgba(255, 255, 0, 0)
        );
        margin: 20px 0;
        width: 200px;
        height: 60px;
        display: flex;
        i {
          border: 1px solid rgba(32, 147, 255, 0.493);
          background-color: rgba(32, 147, 255, 0.295);
          position: relative;
          &::after {
            content: "";
            position: absolute;
            left: 7px;
            top: 7.5px;
            width: 46px;
            height: 46px;
            border-radius: 50%;
            background: linear-gradient(
              -10deg,
              rgb(0, 119, 255),
              rgb(111, 197, 255)
            );
          }
        }
        span {
          margin-top: 5px;
          margin-left: 5px;
        }
        &:nth-child(2) {
          background: linear-gradient(
            left,
            rgba(255, 0, 0, 0) 20%,
            rgba(23, 233, 181, 0.486) 50%,
            rgba(255, 255, 0, 0)
          );
          .ptext {
            color: rgb(0, 255, 221);
          }
          i {
            border: 1px solid rgba(23, 233, 181, 0.486);
            background-color: rgba(23, 233, 181, 0.281);
            &::after {
              background: linear-gradient(
                -10deg,
                rgb(0, 255, 136),
                rgb(111, 197, 255)
              );
            }
          }
        }
        &:nth-child(3) {
          background: linear-gradient(
            left,
            rgba(255, 0, 0, 0) 20%,
            rgba(255, 239, 97, 0.37) 50%,
            rgba(255, 255, 0, 0)
          );
          .ptext {
            color: rgb(250, 209, 27);
          }
          i {
            border: 1px solid rgba(255, 239, 97, 0.37);
            background-color: rgba(255, 239, 97, 0.212);
            &::after {
              background: linear-gradient(
                -10deg,
                rgb(255, 208, 0),
                rgb(255, 247, 141)
              );
            }
          }
        }
      }
    }
    table {
      color: rgb(75, 159, 255);
      font-size: 14px;
      margin-bottom: 20px;
      th {
        color: rgb(75, 159, 255);
        border: 1px solid rgb(0, 119, 255);
        background-color: rgba(0, 119, 255, 0.308);
        padding: 6px;
        font-size: 16px;
      }
      width: 100%;
      td {
        text-align: center;
        height: 25px;
      }
      tr {
        &:nth-child(odd) {
          background-color: rgba(0, 119, 255, 0.37);
          color: #ffffff;
        }
      }
    }
    .tableS {
      table {
        tbody {
          tr,
          td {
            background-color: rgba(0, 119, 255, 0.116);
            border: 1px solid rgb(0, 119, 255);
          }
        }
      }
    }
  }
  #tablesX {
    td {
      height: 41px;
    }
  }
  #tablesX3 {
    td {
      height: 31px;
    }
  }
  #tablesS {
    font-size: 8px;
    td {
      height: auto;
    }
    th {
      font-size: 8px;
    }
  }
  .model {
    width: 100%;
    height: 100%;
    position: relative;
    background-image: url("../assets/image/model.png");
    background-repeat: no-repeat;
    background-position: 0 90%;
    background-size: 100%;
    display: flex;
    justify-content: space-evenly;
    p {
      font-size: 20px;
      position: relative;
      z-index: 9999;
      left: 20px;
      top: 90px;
    }
    div {
      transition: all 3s ease-in-out;
      animation: circleRoateS 6s infinite;
      width: 120px;
      height: 120px;
      position: absolute;
      top: 30%;
      left: 10%;
      i {
        color: aqua;
        font-family: myFirstFont;
        font-size: 34px;
        font-weight: 700;
      }
      &:nth-child(1) {
        transition: all 6s ease-in-out;
        top: 20%;
        left: 40%;
        animation: circleRoateS 8s infinite;
        i {
          color: #34a4ff;
        }
        .span {
          animation: circleRoate 10s infinite ease-in-out;
        }
      }
      &:nth-child(2) {
        left: 70%;
        animation: circleRoateS 6s infinite;
        i {
          color: rgb(255, 217, 0);
        }
        .span {
          animation: circleRoate 6s infinite ease-in-out;
        }
      }
    }
    .span {
      font-family: myFirstFont;
      opacity: 0.6;
      width: 120px;
      height: 120px;
      position: absolute;
      background-color: rgba(19, 44, 112, 0.938);
      border-radius: 50%;
      box-shadow: 0 0 0 10px rgba(2, 2, 2, 0.438), 0 0 0 15px rgb(1, 154, 255),
        0 2px 5px 15px rgba(0, 0, 0, 0.6);
      animation: circleRoate 6s infinite ease-in-out;
      transition: all 6s ease-out;
      &::before {
        content: "";
        position: absolute;
        left: -8px;
        top: -8px;
        width: 110%;
        height: 110%;
        border-radius: 50%;
        border: 3px solid rgb(255, 217, 0);
        clip: rect(10px, 70px, 200px, 0);
      }
      &::after {
        content: "";
        position: absolute;
        left: -8px;
        top: -8px;
        width: 110%;
        height: 110%;
        border-radius: 50%;
        border: 3px solid rgb(255, 94, 0);
        clip: rect(0, 200px, 100px, 90px);
      }
    }
  }
}
@keyframes circleRoate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(3000deg);
  }
  100% {
    transform: rotate(0);
  }
}
@keyframes circleRoateS {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 100px);
  }
  100% {
    transform: translate(0, 0);
  }
}
#headerHaver {
  color: rgb(0, 195, 255);
  background: radial-gradient(
    rgb(10, 32, 104),
    rgba(19, 22, 192, 0.829),
    rgb(10, 104, 167)
  );
}
</style>
