<template>
  <div id="home" class="bg-4 clearfix">
    <div class="top ly-flex ly-flex-jcsb bg-3 bd-d pt10 clearfix pb5">
      <div class="pl15">
        <img :src="img" style="width:50px">
      </div>
      <div class="mt5 pl10 pr10">
        <div>
          <h3 class="font20 font-w600 color-tb text-align-l">加勒比捕鱼</h3>
          <div class="mt5">红包捕鱼来袭,天天有豪礼</div>
        </div>
      </div>
      <div class="mt5 pr10">
        <el-button type="primary" size="small" @click="getAccessToken">免费下载</el-button>
      </div>
    </div>
    <div class="rel content clearfix ly-flex ly-flex-d-c">
      <div class="ly-flex ly-flex-d-c clearfix pb20 m15">
        <img :src="img" alt="logo" class="imgw">
        <div>
          <h3 class="font22 font-w600 color-tb text-align-c">捕鱼赢红包，兑换秒到账</h3>
          <h3 class="font22 font-w600 color-tb text-align-c mt10">大鱼好打爆率高</h3>
        </div>
        <div class="mt10 text-align-r buttom-foot pb15">
          <el-button size="medium" type="primary" @click="download">免费下载</el-button>
        </div>
        <h3 class="mt10 font-w600">更多街机游戏等你体验</h3>
      </div>
      <div class="p20 ly-flex ly-flex-fw ly-flex-jcsb">
        <img :src="img" alt="游戏截图" class="imgGame" style="transform:translate(20px,20px);">
        <img :src="img" alt="游戏截图" class="imgGame" style="transform:translate(-20px,60px);">
        <img :src="img" alt="游戏截图" class="imgGame" style="transform:translate(20px,20px);">
        <img :src="img" alt="游戏截图" class="imgGame" style="transform:translate(-20px,-10px);">
      </div>
      <div class="p10 mb30 mt30">
        <span v-for="item in text">{{item}}&nbsp;&nbsp;&nbsp;</span>
      </div>
      <div class="footer text-align-r mr20 mb20">众多游戏尽在加勒比</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import img from "../assets/logo.png";
import { isweixin, appID } from "../../src/unit";
import { mapMutations, mapState } from "vuex";
import $http from "../http";
// import './assets/styles/base.scss'

export default {
  name: "home",
  components: {},
  data() {
    return {
      img: img,
      imgG: [{}],
      text: ["僵尸先生", "水浒传", "九线拉王", "连环夺宝", "飞禽走兽", "。。。"]
    };
  },
  // beforeCreate() {
  //   let bool = isweixin();
  //   console.log(this.took,'this.tookthis.took0')
  //   if (bool) {
  //     if (this.took) {
  //       console.log(this.took,'this.tookthis.took1')
  //       let url = encodeURIComponent(location.href);
  //       location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx9f8d74816fc35815&redirect_uri=${url}&response_type=code&scope=snsapi_base&state=123#wechat_redirect`;
  //      this.$store.commit("CHANGE_TOOK",fasle)
  //      console.log(this.took,'this.tookthis.took2')
  //     }
  //   } else {
  //     // let url =encodeURI(location.href)
  //     // location.href= `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx520c15f417810387&redirect_uri=${url}&response_type=code&scope=snsapi_base&state=123#wechat_redirect`
  //   }
  // },
  computed: {
    ...mapMutations(["CHANGE_TOOK"]),
    ...mapState(["took"])
  },
  methods: {
    getAccessToken: async function() {
      console.log($http, "this.$http");
      let CODE = localStorage["webappCode"];
      // let url = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${appID.appid}&secret=${appID.secret}&code=${CODE}&grant_type=authorization_code`
      let url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${
        appID.appid
      }&secret=${appID.secret}`;
      let res = await $http.get(url, {});
      console.log(res.data, "this.1");

      if ("access_token" in res.data) {
        console.log("this.2");
        localStorage["access_token"] = res.data.access_token;
        this.getJsapiTicket();
      }
    },
    getJsapiTicket: async function() {
      let accessToken = localStorage["access_token"];
      let url = `https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${accessToken}&type=jsapi`;
      let res = await $http.get(url, {});
      console.log(res.data, "getJsapiTicket");
    },
    download(){
      //  window.location.assign('www.baidu.com')
    }
  }
};
</script>
<style lang="scss" scoped>
#home {
  background-color: #fff;

  .top {
    z-index: 9999;
    position: fixed;
    top: 0;
    width: 100%;
    .h3 {
      font-size: 1.25rem;
    }
  }
  .content {
    // height: 1000px;
    overflow: auto;
    top: 4.875rem;

    .imgw {
      width: 3.125rem;
      height: 3.125rem;
    }
    .buttom-foot {
      border-bottom: 1px solid #dcdfe6;
    }
    .imgGame {
      display: inline-block;
      // height: auto;
      // max-width: 100%;
      width: 8.75rem;
      height: 8.75rem;
    }
  }
  .footer {
    // position: absolute;
    // bottom: 1.25rem;
    // right: 0.625rem;
  }
}
</style>

