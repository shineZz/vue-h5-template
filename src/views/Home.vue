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
        <el-button type="primary" size="small">免费下载</el-button>
      </div>
    </div>
    <div class="rel content bg-4 clearfix ly-flex ly-flex-d-c">
      <div class="ly-flex ly-flex-d-c clearfix pb20 m15">
        <img :src="img" alt="logo" class="imgw">
        <div>
          <h3 class="font22 font-w600 text-align-r">捕鱼赢红包，兑换秒到账</h3>
          <h3 class="font22 font-w600 text-align-r mt10">大鱼好打爆率高</h3>
        </div>
        <div class="mt10 text-align-r buttom-foot pb15">
          <el-button size="medium" type="primary">免费下载</el-button>
        </div>
        <h3 class="mt10 font-w600">更多街机游戏等你体验</h3>
      </div>
      <div class="p20 ly-flex ly-flex-fw">
        <img :src="img" alt="游戏截图" class="imgGame" style="transform:translate(20px,20px);">
        <img :src="img" alt="游戏截图" class="imgGame" style="transform:translate(-20px,60px);">
        <img :src="img" alt="游戏截图" class="imgGame" style="transform:translate(20px,20px);">
        <img :src="img" alt="游戏截图" class="imgGame" style="transform:translate(-20px,-10px);">

      </div>
      <div class="p10 mb30">
         <span v-for="item in text">{{item}} </span>
      </div>
      <div class="footer">
        众多游戏尽在加比勒
      </div>
     
    </div>
   
  </div>
</template>

<script>
// @ is an alias to /src
import img from "../assets/logo.png";
import { isweixin } from '../../src/unit';
// import './assets/styles/base.scss'

export default {
  name: "home",
  components: {},
  data() {
    return {
      img: img,
      imgG:[{

      }
      ],
      text:['僵尸先生','水浒传','九线拉王','连环夺宝','飞禽走兽','。。。']

    };
  },
  beforeCreate () {
     let bool = isweixin()
     console.log('beforeCreate')
     if(bool) {
      
     }else{

      let url =encodeURI(location.href)
      location.href= `https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&redirect_uri=${url}&response_type=code&scope=SCOPE&state=STATE#wechat_redirect `
      console.log(location.href,'location.hreflocation.href')
     }
  },
  methods: {
    isweixin() {
          const ua = window.navigator.userAgent.toLowerCase();
          if(ua.match(/MicroMessenger/i) == 'micromessenger'){
              return true;
          } else {
              return false;
          }
      },
  },
};
</script>
<style lang="scss" scoped>
#home {
  background-color: #f2f6fc;

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
    top:4.875rem;

    .imgw {
      width: 3.125rem;
      height: 3.125rem;
    }
    .buttom-foot {
      border-bottom: 1px solid #dcdfe6;
    }
    .imgGame{
      width: 9.375rem;
      height: 9.375rem;
    }
  }
  .footer {
    position: absolute;
    bottom: 1.25rem;
    right: .625rem;
  }
}
</style>

