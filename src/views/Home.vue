<template>
  <div id="home" class="clearfix" @click="download">
    <div class="top">
          <el-image :src="bg3" class="fr imgBtn cp"  @click="download"></el-image>
    </div>
    <div class="rel content">
      <el-image :src="bg3" class="imgBtnB cp" @click="download"></el-image>
    </div>
  </div>
</template>

<script>
import { isweixin, appID } from "../../src/unit";
import { mapMutations, mapState } from "vuex";
import $http from "../http";
import { sync } from "glob";
import bg1 from "../assets/images/bg_01.jpg";
import bg2 from "../assets/images/bg_02.jpg";
import bg3 from "../assets/images/download_btn.png";

// import './assets/styles/base.scss'

export default {
  name: "home",
  components: {},
  data() {
    return {
      bg2: bg2,

      bg3: bg3,
      downUrl:'',
    };
  },

  computed: {
    ...mapMutations(["CHANGE_TOOK"]),
    ...mapState(["took"])
  },
  mounted() {
    this.getInfo()
    //     this.getInfo=`47.101.196.174:6001/api/bindparent?time=x&code=y&sid=z&signature=s
    // s=MD5(code=y&sid=z&theKey258)`
  },
  methods: {
    getInfo: async function() {
      let CODE = sessionStorage["webappCode"];
      console.log(navigator.userAgent, "234234");

      let sid = sessionStorage["sid"] || "";
      let rsid = sessionStorage["rsid"] || "";
      let channel = sessionStorage["channel"] || "";
      // let url = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${appID.appid}&secret=${appID.secret}&code=${CODE}&grant_type=authorization_code`
      let url = `rapi/bindparent`;
      let signature = this.$md5(`channel=${channel}&code=${CODE}&sid=${sid}&rsid=${rsid}&thKey258`);
      // console.log(object);
      let obj = {
        channel,
        // time:Math.floor(new Date().getTime()/1000),
        code: CODE,
        rsid,
        sid,
        signature
      };
      let res = await $http.get(url, obj);
      
      this.downUrl = res.data.Data
      // if (res.data.Code!='0') {
      //   this.$message({
      //     message: res.data.Message,
      //     type: "warning"
      //   });
      // }
    },
    // getTest: async function() {
    //   // let url =`api3/user/login`
    //   let url = `api3/menu/menubuttonlist`;
    //   let obj = {
    //     menucode: "Menu"
    //   };

    //   let res = await $http.get(url, obj);

    // },

    download() {
      
      window.location.href = this.downUrl
      // window.location.href ="https://fir.im/htgamesios"
      // window.location.href = this.url
      // let str = navigator.userAgent.toLowerCase();

      // if (str.includes("iphone")) {
      //   window.location.href =
      //     "https://fir.im/htgamesios"
      // } else if (str.includes("android")) {
      //   window.location.href = "http://fishfile.htgames.cn/dl/official/FishGame_v2.0.30.apk";
      // }
    }
  }
};
</script>
<style lang="scss" scoped>
@import '../assets/styles/base';
#home {
  // background-color: #fff;

  //  background-image: url(../assets/images/bg_02.jpg);
  .top {
    
    background: url(../assets/images/bg_01.jpg) no-repeat;
    background-position: center 0;
    background-size: 100% 100%;
      // background-image: url(../assets/images/bg_01.jpg);
      z-index: 9;
      position: fixed;
      top: 0;
      // padding-bottom: 15.6%;
      width: 100vw;
      height: vm(98);
      // width: 100vw;
      .imgBtn {
        width: 30vw;
        margin-top: 3.2vw;
        // position: absolute;
        // top: 50%;
        // translate: transform(0, -50%);
      }
  }
  .content {
    // height: 1000px;
    // margin-top: 1px;
    
    background: url(../assets/images/bg_02.jpg) no-repeat;
    background-position: center 0;
    background-size: 100% 100%;
    
    // padding-bottom: 162.5%;
    min-height: vm(1395);
    top:vm(98);
    // background-size: cover;
    overflow: auto;
    .imgBtnB {
      width: 35%;
      position: relative;
      // left:0;
      top: vm(715);
    }
  }
}
</style>

